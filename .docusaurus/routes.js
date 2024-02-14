import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'cd4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '598'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e03'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '902'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0ee'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd89'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '91d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '595'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '241'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ae7'),
            routes: [
              {
                path: '/docs/category/applications',
                component: ComponentCreator('/docs/category/applications', '157'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/flashcards',
                component: ComponentCreator('/docs/category/flashcards', 'c33'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/integration',
                component: ComponentCreator('/docs/category/integration', 'caa'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/interviews',
                component: ComponentCreator('/docs/category/interviews', '673'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/networking',
                component: ComponentCreator('/docs/category/networking', 'b15'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/notes',
                component: ComponentCreator('/docs/category/notes', '662'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/resumes-and-cover-letters',
                component: ComponentCreator('/docs/category/resumes-and-cover-letters', '2b9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/category/welcome-to-nohire',
                component: ComponentCreator('/docs/category/welcome-to-nohire', '370'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'e84'),
                exact: true
              },
              {
                path: '/docs/tutorial/applications/',
                component: ComponentCreator('/docs/tutorial/applications/', '6a6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/files/uploading',
                component: ComponentCreator('/docs/tutorial/files/uploading', 'c33'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/flashcards/creating-cards',
                component: ComponentCreator('/docs/tutorial/flashcards/creating-cards', '8a2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/integration/notion',
                component: ComponentCreator('/docs/tutorial/integration/notion', '457'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/interviews/first-interview',
                component: ComponentCreator('/docs/tutorial/interviews/first-interview', '62c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/networking/contacts',
                component: ComponentCreator('/docs/tutorial/networking/contacts', '461'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/notes/',
                component: ComponentCreator('/docs/tutorial/notes/', '101'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/welcome/about',
                component: ComponentCreator('/docs/tutorial/welcome/about', '8ee'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/welcome/overview',
                component: ComponentCreator('/docs/tutorial/welcome/overview', 'b13'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/welcome/quick-start-guide',
                component: ComponentCreator('/docs/tutorial/welcome/quick-start-guide', 'a23'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/tutorial/welcome/tech-stack',
                component: ComponentCreator('/docs/tutorial/welcome/tech-stack', '65e'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c4c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
