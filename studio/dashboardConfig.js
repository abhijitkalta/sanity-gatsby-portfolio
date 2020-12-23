export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe3ba76768a9d12335da274',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rw6s1n6y',
                  apiId: '7d00ed37-f9e9-4f74-994d-18a73e485c54'
                },
                {
                  buildHookId: '5fe3ba77768a9d12335da275',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nu6tkr66',
                  apiId: '90ab6c90-b9a0-4eab-aeb0-f5adbe4f2402'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abhijitkalta/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nu6tkr66.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
