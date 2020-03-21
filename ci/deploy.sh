#!/bin/bash

if [ "$STAGE" = "prod" ]; then
  BRANCH="master"
  DOMAIN="mbarney.me"
else
  BRANCH="$STAGE"
  DOMAIN="$STAGE.mbarney.me"
fi

aws cloudformation deploy \
  --stack-name mbarneyme-frontend-${STAGE} \
  --region us-east-1 \
  --template-file template.yaml \
  --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides \
    Repository=${REPOSITORY} \
    OauthToken=${GITHUB_OAUTH_TOKEN} \
    Domain=${DOMAIN} \
    Branch=${BRANCH}
