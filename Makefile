MAKEFLAGS=--warn-undefined-variables

export APPLICATION_NAME=mbarneyme
export ENVIRONMENT_NAME
export STACK_NAME ?= ${APPLICATION_NAME}-$(ENVIRONMENT_NAME)
export AWS_REGION ?= us-east-2
export CHANGE_SET_NAME
export CHANGE_SET_DESCRIPTION
export DOMAIN_NAME
export HOSTED_ZONE_NAME

node_modules/prod: package-lock.json
	npm ci --omit dev
	touch node_modules/prod

node_modules/all: package-lock.json
	npm ci
	touch node_modules/all

artifacts/:
	mkdir -p artifacts

.PHONY: lint create-change-set deploy-change-set delete site/rum.json upload clean
dependencies: requirements.txt node_modules/all
	pip3 install -r requirements.txt
	touch dependencies

lint: dependencies
	cfn-lint
	npx eslint .

create-change-set: node_modules/all artifacts/
	./scripts/create-change-set.sh

deploy-change-set: node_modules/all
	./scripts/deploy-change-set.sh

delete:
	./scripts/empty-s3-bucket.sh --bucket ${APPLICATION_NAME}-${ENVIRONMENT_NAME}
	./scripts/empty-s3-bucket.sh --bucket ${APPLICATION_NAME}-${ENVIRONMENT_NAME}-cloudfront-logs
	aws cloudformation delete-stack --stack-name ${STACK_NAME}

site/rum.json:
	aws rum get-app-monitor --region ${AWS_REGION} --name ${APPLICATION_NAME}-${ENVIRONMENT_NAME}-rum > site/rum.json

upload: site/rum.json
	aws s3 sync site s3://${STACK_NAME} --delete

clean:
	rm -rf aritfacts
	rm -rf node_modules
	rm -rf site/rum.json
