module.exports = {
  siteMetadata: {
    title: 'Michael R. Barney, Jr.',
    education: [{
      title: 'BS in Computer Science',
      location: 'Indiana University South Bend',
      time: '2014 - 2018',
    }, {
      title: 'Minor in Mathematics',
      location: 'Indiana University South Bend',
      time: '2014 - 2018',
    }],
    social: [
      {
        icon: 'envelope',
        url: 'mailto: mbarneyme@gmail.com',
      }, {
        icon: 'stack-overflow',
        url: 'https://stackoverflow.com/users/4071608',
      }, {
        icon: 'linkedin',
        url: 'https://linkedin.com/in/michael-barney',
      }, {
        icon: 'github',
        url: 'http://github.com/mbarneyjr',
      }, {
        icon: 'twitter',
        url: 'https://twitter.com/mbarneyjr',
      },
    ],
    certifications: [{
      title: 'AWS Certified DevOps Engineer - Professional',
      description: 'This exam validates technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform.',
      link: 'https://www.certmetrics.com/amazon/public/badge.aspx?i=5&t=c&d=2018-10-24&ci=AWS00407623',
      image: 'AWSDevOpsPro'
    }, {
      title: 'AWS Certified Solutions Architect - Professional',
      description: 'The AWS Certified Solutions Architect – Professional exam validates advanced technical skills and experience in designing distributed applications and systems on the AWS platform.',
      link: 'https://www.certmetrics.com/amazon/public/badge.aspx?i=4&t=c&d=2019-12-02&ci=AWS00407623',
      image: 'AWSSAPro'
    }, {
      title: 'AWS Certified SysOps Administrator - Associate',
      description: 'The AWS Certified SysOps Administrator – Associate exam validates technical expertise in deployment, management, and operations on the AWS platform.',
      link: 'https://www.certmetrics.com/amazon/public/badge.aspx?i=3&t=c&d=2019-09-13&ci=AWS00407623',
      image: 'AWSSOAssociate'
    }, {
      title: 'AWS Certified Developer - Associate',
      description: 'This exam validates technical expertise in developing and maintaining applications on the AWS platform.',
      link: 'https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2018-03-16&ci=AWS00407623',
      image: 'AWSDevAssociate'
    }, {
      title: 'AWS Certified Solutions Architect - Associate',
      description: 'This exam is intended for individuals with experience designing distributed applications and systems on the AWS platform.',
      link: 'https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-12-05&ci=AWS00407623',
      image: 'AWSSAAssociate'
    }],
    interests: [
      {
        title: 'Developing / Software Engineering',
        description: `I really like creating things, going from start to finish on a project, and seeing where I'm able to take it.`,
      }, {
        title: 'Deep Learning / AI',
        description: 'I like learning about deep learning applications and neural network models.',
      }, {
        title: 'Serverless Architectures',
        description: `Through my work at Trek10, and as a "serverless native", I've grown to really appreciate serverless architectures and best practices.`,
      }, {
        title: 'Video Games',
        description: 'I enjoy playing anything from first-person shooters to puzzle games, and even retro games.',
      },
    ],
    projects: [
      {
        title: 'AWSume',
        image: 'Awsumepy',
        description: `Through my internship at Trek10, I've created an awesome command-line utility for easily using AWS IAM credentials. Easily use AWS user/role credentials with this feature-packed and extensible command-line utility.`,
        links: [
          {
            text: 'Check it out on GitHub!',
            url: 'https://github.com/trek10inc/AWSume',
            external: true,
          },
          {
            text: 'Check out the Trek10 blog!',
            url: 'https://trek10.com/blog',
            external: true,
          },
        ],
      }, {
        title: 'Growth',
        image: 'Growth',
        description: `Using the Unity3D game engine, I created a simple game reminiscent of the game Agario. The goal of the game is to eat everything that is smaller than you, and avoid things that are bigger than you.`,
        links: [
          {
            text: 'Play!',
            url: '/projects/growth',
          }, {
            text: 'Check it out on GitHub!',
            url: 'https://github.com/mbarneyjr/Growth',
            external: true,
          },
        ],
      }, {
        title: 'Movie Poster Prediction',
        image: 'DeepLearning',
        description: `Using the Keras deep learning library, I worked on training a model to predict movie genres based on their posters. Though our model wasn't very accurate, it was a ton of fun and an amazing learning experience.`,
      }, {
        title: 'Multilayer Perceptron JS',
        image: 'MLPJS',
        description: `I created a small neural network library using JavaScript. This library is intended to be easily understood/readable for educational purposes, and not meant to be optimized.`,
        links: [
          {
            text: 'Check it out on GitHub!',
            url: 'https://github.com/mbarneyjr/multilayerperceptron-js',
            external: true,
          }, {
            text: 'Read about it in my blog!',
            url: '/blog/write-your-own-neural-networks',
          },
        ],
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-javascript-frontmatter',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              backgroundColor: 'transparent',
              showCaptions: true,
              linkImagesToOriginal: false,
              quality: 100,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          'gatsby-remark-reading-time',
        ],
      },
    },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        classPrefix: "language-",
        aliases: {},
      },
    },
  ],
};
