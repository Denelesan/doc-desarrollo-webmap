import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/index_test',
    component: ComponentCreator('/index_test', '58a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', '438'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b7c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '2f9'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '7fe'),
            routes: [
              {
                path: '/arquitectura/descripcion',
                component: ComponentCreator('/arquitectura/descripcion', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/arquitectura-y-estructura-de-desarrollo',
                component: ComponentCreator('/category/arquitectura-y-estructura-de-desarrollo', '94d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/consumo-de-servicios-geoespaciales-geoserver',
                component: ComponentCreator('/category/consumo-de-servicios-geoespaciales-geoserver', '3ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/diseño-base-y-lineamientos-de-interfaz',
                component: ComponentCreator('/category/diseño-base-y-lineamientos-de-interfaz', 'a24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/documentación-mínima',
                component: ComponentCreator('/category/documentación-mínima', 'e3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/flujo-de-trabajo-y-ciclo-de-desarrollo',
                component: ComponentCreator('/category/flujo-de-trabajo-y-ciclo-de-desarrollo', '3e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/stack-tecnológico-recomendado',
                component: ComponentCreator('/category/stack-tecnológico-recomendado', '6b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/diseño/descripcion',
                component: ComponentCreator('/diseño/descripcion', 'e0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentacion/descripcion',
                component: ComponentCreator('/documentacion/descripcion', 'bd7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/flujo-de-trabajo/descripcion',
                component: ComponentCreator('/flujo-de-trabajo/descripcion', 'c4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/servicios/descripcion',
                component: ComponentCreator('/servicios/descripcion', '90a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stack-tecnologico/descripcion',
                component: ComponentCreator('/stack-tecnologico/descripcion', 'eb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
