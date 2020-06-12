export const initialState = {
  user: null,
  portfolio: [
    {
      name: 'kaizen',
      id: 1,
      preview: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/login.png?alt=media&token=d59f92d1-dc0d-4b08-b653-510d6dde36c3',
      description: 'Open source medical tests management system.',
      gallery: [
        {
          type: 'image',
          url: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/login.png?alt=media&token=d59f92d1-dc0d-4b08-b653-510d6dde36c3',
        },
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/FaVsJ9R9UME',
        },
      ],
      liveurl: 'https://kaizen-web-client.herokuapp.com/login',
      repository: 'https://github.com/Sphinx-Society/kaizen-web-client',
      technologies: [
        {
          name: 'react',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/react.png?alt=media&token=6f53f9b3-bdc7-43d6-af3c-16b189a522dd',
        },
        {
          name: 'redux',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/unnamed%20(1).png?alt=media&token=49a95bd6-3997-4d1c-8212-98803260d1d5',
        },
        {
          name: 'react router',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/react-router.svg?alt=media&token=a40cabf3-be3c-4faa-ab01-18dc34525991',
        },
        {
          name: 'sass',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/288_Sass-512.png?alt=media&token=aacd1590-a443-4e80-9842-54bafada6edd',
        },
        {
          name: 'jest',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/jest.png?alt=media&token=b6b875f5-245f-4242-a36a-6b414887dd7d',
        },
        {
          name: 'figma',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/a558b426cb8973523f37bbed94cf0f09.png?alt=media&token=9952fc88-5d11-4f1c-af53-d6ea809ab3f3',
        },
      ],
    },
    {
      name: 'My portfolio',
      id: 2,
      preview: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/iMac%20-%202.png?alt=media&token=56ba4b84-737c-4f65-ae5f-55cd2f1f9c8e',
      description: 'My personal website to show my curriculum and portfolio',
      gallery: [
        {
          type: 'image',
          url: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/iMac%20-%202.png?alt=media&token=56ba4b84-737c-4f65-ae5f-55cd2f1f9c8e',
        },
      ],
      repository: 'https://github.com/Sphinx-Society/kaizen-web-client',
      technologies: [
        {
          name: 'react',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/react.png?alt=media&token=6f53f9b3-bdc7-43d6-af3c-16b189a522dd',
        },
        {
          name: 'redux',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/unnamed%20(1).png?alt=media&token=49a95bd6-3997-4d1c-8212-98803260d1d5',
        },
        {
          name: 'react router',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/react-router.svg?alt=media&token=a40cabf3-be3c-4faa-ab01-18dc34525991',
        },
        {
          name: 'sass',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/288_Sass-512.png?alt=media&token=aacd1590-a443-4e80-9842-54bafada6edd',
        },
      ],
    },
  ],
  cv: {
    'name': 'Andrés Santana',
    'ocupation': 'Frontend web developer & UI designer',
    'phone': '(+57) 3153580836',
    'email': 'drew.lizcano@gmail.com',
    'location': 'Bogotá D.C Colombia',
    'lenguajes': [
      'english', 'spanish',
    ],
    'softwareSkills': [
      'React.js',
      'HTML',
      'CSS',
      'Vanilla.js',
      'Adobe XD',
      'Figma',
    ],
    'profesionalProfile': 'I am interested in get further, as a front end web developer I be able to build creative solves and maintaining websites using the best practices in the scope. Passionate about team working and Identifying innovative ideas according to project requirements proficient in technologies like HTML, CSS, JavaScript, Jest plus modern libraries and frameworks like React',
    'experience': [
      {
        'company': 'Platzi Master',
        'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/master.webp?alt=media&token=d4b764b4-bca5-4aff-a496-febdd0fe6a38',
        'role': 'Master Student',
        'contract': 'Contrato de prácticas',
        'startDate': 'Jan, 2020',
        'endDate': 'Actually',
        'description': 'Open source projects development using SCRUM methodology, with technologies such as React, Redux, React Router in the frontend; Node JS, Express, Passport, REST APIs, MongoDB, in the backend and database and Jest to perform unit tests.',
      },
    ],
    'education': [
      {
        'areaname': 'JavaScript School',
        'description': 'Develop with the MERN Stack with industry experts and the Platzi Engineering team.',
        'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/escuelajs%20(1).jpg?alt=media&token=775ac02e-07c7-4198-aeab-0dd69ad63a69',
        'courses': [
          {
            'name': 'Curso de Integración Backend con Frontend 2019',
            'hours': 6,
            'certificationdate': 'Abr 5, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Integraci%C3%B3n%20Backend%20con%20Frontend%202019%20(1).webp?alt=media&token=6e771979-37ca-4fb2-9aed-176332a772c6',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-bff-2019%20(1)_page-0001%20(1).jpg?alt=media&token=7de89728-362a-4596-adf6-2de40b06a95e',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Server Side Render con Express',
            'hours': 6,
            'certificationdate': 'Mar 10, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/ssr.webp?alt=media&token=071da300-59b6-40f4-a5a0-19e61ab3f730',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-ssr%20(1)_page-0001.jpg?alt=media&token=46baa0fa-9c93-4d8a-9f4a-6797f60955b6',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Asincronismo con JavaScript',
            'hours': 6,
            'certificationdate': 'Feb 2, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Asincronismo%20con%20JavaScript.webp?alt=media&token=56d575dd-8dfb-4dbb-80fd-59684a651609',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-asincronismo-js%20(2)_page-0001%20(2).jpg?alt=media&token=d25c7ff3-0259-457c-a6db-46ef2e8bdd1a',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Autenticación con Passport.js',
            'hours': 6,
            'certificationdate': 'Jen 24, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Autenticaci%C3%B3n%20con%20Passport.webp?alt=media&token=c9e0a64a-0b24-43d9-8311-850bbcfc7069',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-passport%20(1)_page-0001%20(1).jpg?alt=media&token=3ecb0a61-8c69-4e18-ae8e-681543c4c422',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Backend con Node.js',
            'hours': 6,
            'certificationdate': 'Nov 1, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Backend%20con%20Node.js%20(1).webp?alt=media&token=d993f2e9-d622-4fec-865c-39c759fd3025',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-backend-nodejs%20(1)_page-0001%20(1).jpg?alt=media&token=1cfe05dd-3868-49ab-88db-e9cf3723e6c2',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de React Router y Redux',
            'hours': 6,
            'certificationdate': 'Oct 12, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/redux.webp?alt=media&token=2927b51c-e18c-4780-85b5-145f61288611',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-react-router-redux%20(1)_page-0001.jpg?alt=media&token=e2bb69e2-e503-48b2-993e-b0fe3e993754',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso Práctico de React JS',
            'hours': 6,
            'certificationdate': 'Sep 26, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.webp?alt=media&token=e71f816c-7a86-4348-a5dc-0f834f6e1541',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-react-ejs%20(1)_page-0001.jpg?alt=media&token=a9bfe6ee-1139-44ba-a2a8-563c3b7ee567',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso Profesional de JavaScript',
            'hours': 6,
            'certificationdate': 'Sep 20, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.webp?alt=media&token=e4ad70da-e713-4a89-8475-9013127e6e1f',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-javascript-profesional%20(1)_page-0001.jpg?alt=media&token=04325d84-1f62-4792-9ab7-44ad6a3bf27a',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Frontend Developer',
            'hours': 6,
            'certificationdate': 'Ags 19, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Frontend%20Developer%20(1).webp?alt=media&token=b186d499-09d2-4395-9ff2-4bca5936f452',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-frontend-developer%20(1)_page-0001%20(1).jpg?alt=media&token=62bd3d12-2f8f-4c7a-8fba-c51fd6d80fd4',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Prework: Buenas Prácticas y Entorno de Desarrollo',
            'hours': 6,
            'certificationdate': 'Ags 16, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Prework_%20Buenas%20Pr%C3%A1cticas%20y%20Entorno%20de%20Desarrollo.webp?alt=media&token=9eabdd4b-f2fe-4fa8-be9b-b5988ef04e3c',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-prework_page-0001.jpg?alt=media&token=74dfde0a-27a5-4447-a071-6e859d38ae4a',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Fundamentos de JavaScript',
            'hours': 6,
            'certificationdate': 'Ags 10, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-fundamentos-javascript-61c15bdf-0a83-4aed-8537-b4753e4071e1.webp?alt=media&token=3a64304b-6494-4f77-b900-89e7a3a25bc2',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-fundamentos-javascript_page-0001.jpg?alt=media&token=1f714573-d248-431d-be7c-46f0326dfec0',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },

        ],
      },
      {
        'areaname': 'Frontend Arquitectures',
        'description': 'Create websites from scratch with a dynamic and attractive graphical interface in the browser and mobile devices, applying HTML, CSS and Javascript.',
        'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/42.webp?alt=media&token=1a024cde-0ee6-48c7-a936-43366f4e703c',
        'courses': [
          {
            'name': 'Curso de React Avanzado',
            'hours': 6,
            'certificationdate': 'Abr 29, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/react-av.webp?alt=media&token=b6caf778-297e-4337-ac77-99e65b4e81e0',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-react-avanzado%20(1)_page-0001.jpg?alt=media&token=059ac088-8f5f-4c57-8cf1-22ebd46e79da',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de End to End Testing con Cypress',
            'hours': 6,
            'certificationdate': 'Abr 24, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20End%20to%20End%20Testing%20con%20Cypress%20(1).webp?alt=media&token=43b400c9-fe6b-4aa3-aa26-6052e047d83f',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-testing-cypress%20(1)_page-0001%20(1).jpg?alt=media&token=1ca6fc93-2699-4952-851a-ed9e18d8b66a',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Fundamentos de Pruebas de Software',
            'hours': 6,
            'certificationdate': 'Abr 5, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Fundamentos%20de%20Pruebas%20de%20Software%20(1).webp?alt=media&token=e1c40365-0d01-455f-b87e-ff087a2c8704',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-pruebas-software%20(1)_page-0001%20(1).jpg?alt=media&token=307d7ca5-f2f1-4c0b-9270-3dde7411d55c',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso Básico de GraphQL',
            'hours': 6,
            'certificationdate': 'Abr 2, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-graphql-2e658b66-c0b9-4b33-8f84-c1b7311be302.webp?alt=media&token=24911ac5-fdb2-4b7a-bcd0-e3c9446fc224',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-graphql%20(1)_page-0001.jpg?alt=media&token=a88f7241-17a2-4e10-bb19-93b1ef5dc21c',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Redux por Bedu',
            'hours': 6,
            'certificationdate': 'Mar 30, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/redux-debu.webp?alt=media&token=b350217b-c46a-480d-ba74-9b0831cdfaa5',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-redux%20(1)_page-0001.jpg?alt=media&token=b01fe6a3-60ed-44e1-9f1f-4fcec83b8677',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de React Router',
            'hours': 6,
            'certificationdate': 'Mar 19, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/1342-b3aca9a0-32a2-4d6b-ad81-9edf7f982fb5.webp?alt=media&token=95fa3068-0583-472c-a927-8cfb57bc5320',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-react-router%20(1)_page-0001.jpg?alt=media&token=735413cd-a8fe-47c2-9c49-2998a5bf422b',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Sistemas de Diseño para Desarrolladores',
            'hours': 6,
            'certificationdate': 'Mar 17, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badges-sistemas-desarrolladores-041a4def-ce1a-4e88-9c84-eb3eff740433.webp?alt=media&token=071f2ca9-1e88-4cf3-8528-2f21f30a5116',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-diseno-desarrolladores_page-0001.jpg?alt=media&token=b42f3a98-5bd5-4fe1-be7f-4d9ac049f815',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Sistemas de Diseño',
            'hours': 6,
            'certificationdate': 'Mar 17, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badges-sistema-diseno-72e121d5-e96b-46cc-ba40-cf3ef7c1e1da.webp?alt=media&token=5b741a24-4f10-447a-a1d2-be48d10306d5',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-sistemas-diseno%20(1)_page-0001.jpg?alt=media&token=5f28b8af-998c-4080-9cde-39d4a7e8aaa5',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Adobe XD',
            'hours': 6,
            'certificationdate': 'Mar 17, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-xd-349e5d51-5cda-4449-abe4-647abae5af0c.webp?alt=media&token=3c5d2e66-1cd5-4221-8684-a004474cc411',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-adobe-xd%20(1)_page-0001.jpg?alt=media&token=1347828e-e562-408d-bd3c-b3a452d1441b',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Introducción a la Terminal y Línea de Comandos',
            'hours': 6,
            'certificationdate': 'Mar 4, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Introducci%C3%B3n%20a%20la%20Terminal%20y%20L%C3%ADnea%20de%20Comandos.webp?alt=media&token=cb7ce42b-b2bb-42aa-8cba-10a39ce9a7f6',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-terminal%20(1)_page-0001%20(1).jpg?alt=media&token=6acdb2cc-a85d-4197-bf72-2934c24110f7',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Unit Testing con Jest en React',
            'hours': 6,
            'certificationdate': 'Mar 2, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/jest.webp?alt=media&token=d5e72146-4412-4d99-8c9f-cd0b99250fe0',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-jest%20(1)_page-0001.jpg?alt=media&token=63e88d2a-83e8-49e4-9fee-8a135c5660a9',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },

          {
            'name': 'Curso de Preprocesadores CSS',
            'hours': 6,
            'certificationdate': 'Feb 27, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Introducci%C3%B3n%20al%20Dise%C3%B1o%20(1).webp?alt=media&token=0f5f1213-55aa-49c2-abec-2bf8c879f08e',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-fundamentos-diseno_page-0001%20(1).jpg?alt=media&token=5481adc8-7de2-43d5-9a50-6f08fbf98c87',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Webpack',
            'hours': 6,
            'certificationdate': 'Feb 7, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-webpack-e9f63293-1e52-4bd1-90b7-82740c8131a9.webp?alt=media&token=c20e1da0-1893-4456-ae91-c912c9a5f93e',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-webpack%20(1)_page-0001.jpg?alt=media&token=869eeea6-1cfc-4180-8e65-f7bb5b0641e3',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Fundamentos de Docker',
            'hours': 6,
            'certificationdate': 'Jen 5, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badges-fundamentos-docker-ef085173-492c-4076-b457-78af9155f8c0.webp?alt=media&token=807d6271-1277-4e27-a305-8e26d360b029',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-docker%20(1)_page-0001.jpg?alt=media&token=be825702-5d70-4f9e-b0a4-549eff0b4b90',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Node.js',
            'hours': 6,
            'certificationdate': 'Oct 24, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Node.js.webp?alt=media&token=54b7eb6a-9a65-4f9c-826a-0fb90ae11c7f',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-backend-js%20(1)_page-0001%20(1).jpg?alt=media&token=da96fcd7-9d7a-4e72-aefc-2018dcef4ba9',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Preprocesadores CSS',
            'hours': 6,
            'certificationdate': 'Oct 24, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Preprocesadores%20CSS%20(1).webp?alt=media&token=ad529548-3b3e-4e5e-afce-b030df8d9ec1',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-preprocesadores%20(1)_page-0001%20(1).jpg?alt=media&token=f5d71ae5-03a0-4f24-9b81-cbc5addcff51',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },

          {
            'name': 'Curso de React.js',
            'hours': 6,
            'certificationdate': 'Sep 11, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/react.webp?alt=media&token=471e0ec1-9b8a-4d30-8557-f43f8bc6575f',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-react%20(1)_page-0001.jpg?alt=media&token=4ccb857d-22e5-46ba-8982-8599de3f2364',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de HTML y CSS',
            'hours': 6,
            'certificationdate': 'Jul 28, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20HTML%20y%20CSS%20(1).webp?alt=media&token=f849a7b4-156e-420b-a181-aa93c43f3167',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-html-css_page-0001%20(1).jpg?alt=media&token=407deb0b-684d-400e-8d72-7425172fe4a2',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso Profesional de Git y GitHub',
            'hours': 6,
            'certificationdate': 'Jul 12, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-github-0b729570-934d-47d8-ba6b-610d7f15e0ec.webp?alt=media&token=f0a9c71e-0d9b-4582-830c-dd765ce4c481',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-git-github%20(1)_page-0001.jpg?alt=media&token=3370fdf3-bf4e-4510-a06e-f9583d16e773',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Animaciones para la Web',
            'hours': 6,
            'certificationdate': 'Jul 9, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/frontend%20(1).webp?alt=media&token=81775118-ad3b-45af-99b8-72d4ddf5134d',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-animaciones-web%20(1)_page-0001%20(1).jpg?alt=media&token=c40f3834-ee27-4fad-9fe7-db704882d40a',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Responsive Design',
            'hours': 6,
            'certificationdate': 'May 23, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/responsive.webp?alt=media&token=0e555fd9-7c0f-4722-8b25-c0785f483bcf',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-responsive-design%20(1)_page-0001.jpg?alt=media&token=1558c1a0-6425-4fb7-a9b4-8b7ee1e3db73',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de CSS Grid Layout',
            'hours': 6,
            'certificationdate': 'Abr 19, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20CSS%20Grid%20Layout%20(1).webp?alt=media&token=061b9ea4-5d08-487c-bf52-2e8370980c87',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-css-grid-layout%20(1)_page-0001%20(1).jpg?alt=media&token=848fb0d4-7b08-4608-8084-30e3cd92fc7a',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Desarrollo Web Online',
            'hours': 6,
            'certificationdate': 'Abr 7, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20Desarrollo%20Web%20Online%20(1).webp?alt=media&token=9a073f8f-e248-4fd9-ac70-ac4bba679ee8',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-html5-css3%20(1)_page-0001%20(1).jpg?alt=media&token=ba304087-91e0-4b67-90d6-a7046123e4d2',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
        ],
      },
      {
        'areaname': 'Professional Growth',
        'description': 'Professional Development refers to all areas of knowledge that add value and versatility as a professional.',
        'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badges-Crecimiento.webp?alt=media&token=2ee2c643-3f55-49e7-85ca-1883ed78200c',
        'courses': [
          {
            'name': 'Curso de Creación de Portafolio y CV',
            'hours': 6,
            'certificationdate': 'Abr 1, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-portafolio-cv-309acfd7-4c85-4efc-81b7-6b3b3488cf74.webp?alt=media&token=62fa21c8-55e4-4129-a096-217c02e2980a',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-portafolios_page-0001.jpg?alt=media&token=e57d846e-29e6-4025-b656-ae2c51158950',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso para Desbloquear tu Creatividad',
            'hours': 6,
            'certificationdate': 'Jen 31, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/mesa-de-trabajo-38-33c261c4-28ea-4541-8ed9-3a7376ea0f6f.webp?alt=media&token=7fb36244-4a7e-4a97-9c5a-abc8ad958553',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-desbloquea-creatividad_page-0001.jpg?alt=media&token=f8e99604-dd0a-4d8a-a9b8-ef349042553d',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Técnicas de Formación Efectiva',
            'hours': 6,
            'certificationdate': 'Jen 31, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-tecnicas-formacion-efectiva-53fb03d8-0ff0-4052-b35e-d7ec2a5f418c.webp?alt=media&token=e5a47f95-c995-4235-b3f3-a2a80843d23d',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-formacion_page-0001.jpg?alt=media&token=6f499dbd-81cd-4acd-93e8-64a7eb49431a',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Gestión Efectiva del Tiempo',
            'hours': 6,
            'certificationdate': 'Jen 31, 2020',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-gestion-tiempo-5368aa24-4418-4e10-b6c3-c8775b849bf9.webp?alt=media&token=ed1000d9-a152-4014-8c13-a837f4aa0e35',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-gestion-tiempo_page-0001.jpg?alt=media&token=f1c1a6c1-23f4-4556-af10-094c033cc8bc',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },

          {
            'name': 'Curso de Escritura en Inglés',
            'hours': 6,
            'certificationdate': 'Jul 28, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/1279-7f312ce2-8e15-41ce-b8e0-99ec325010ca.webp?alt=media&token=6a75447d-58c3-48db-9c55-fdff5a96009f',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-escritura-ingles_page-0001.jpg?alt=media&token=f7c020be-eef3-4664-9d75-db19a73d25f5',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Inglés Práctico: Fundamentos',
            'hours': 6,
            'certificationdate': 'Jul 28, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-ingles-practico-fundamentos-507e913f-7aba-4017-9251-035a517c44fd.webp?alt=media&token=496df838-6992-4a4f-8f02-2eba4394975c',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-ingles-1_page-0001.jpg?alt=media&token=3d888b89-404f-41d8-9afa-dd97032676d8',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Inglés Básico: Conversación',
            'hours': 6,
            'certificationdate': 'Jul 27, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/1371-db5ea3c7-4ac9-4b61-b786-9346ebb3fc7f.webp?alt=media&token=182dc94a-d7bf-47bf-bad5-09c7beb901c9',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-ingles-conversacion_page-0001.jpg?alt=media&token=f9918fde-904a-4372-a52f-a950bc1725d1',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Inglés Básico: Gramática',
            'hours': 6,
            'certificationdate': 'Jul 27, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/1370-836f01ea-6748-4c9f-a8e0-ce51c7c28d0b.webp?alt=media&token=e61c04eb-0e2a-427d-9bd4-23f4c0e1519c',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-ingles-gramatica_page-0001.jpg?alt=media&token=8f8a2981-b903-4026-a693-3261f5e17c45',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Curso de Inglés Básico: Fundamentos',
            'hours': 6,
            'certificationdate': 'Jul 27, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-basico-ingles-e073f711-763d-4129-badc-5e4baa78b225.webp?alt=media&token=f832fa72-aa2c-4dc5-a0ee-99adec849ba9',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-ingles-basico_page-0001.jpg?alt=media&token=01fa47a8-4728-4830-9ff7-b2f017cd1436',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
          {
            'name': 'Estrategias para Aprender en Línea Efectivamente',
            'hours': 6,
            'certificationdate': 'Jul 11, 2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/badge-estrategias-aprender-enlinea-df2bec85-990c-4afb-964c-8fb2dfbd1c2e.webp?alt=media&token=b3783f0e-e0bf-4ada-8200-d40baedaf041',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-aprender_page-0001.jpg?alt=media&token=5bcec060-cae0-4aa2-ac38-9316eec00a31',
            'diplomdrive': 'https://drive.google.com/file/d/1z78s-J59VR7KZzMuehTqvjUJUJkhAg2x/view',
          },
        ],
      },
    ],
  },
  project: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER/SET_PROJECT': {
      return {
        ...state,
        project: action.payload.project,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
