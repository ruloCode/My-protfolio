export const initialState = {
  user: null,
  portfolio: [
    {
      name: 'kaizen',
      id: 1,
      preview: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/login.png?alt=media&token=d59f92d1-dc0d-4b08-b653-510d6dde36c3',
      description: 'description 1',
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
      ],
    },
    {
      name: 'My portfolio',
      id: 2,
      preview: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/iMac%20-%202.png?alt=media&token=56ba4b84-737c-4f65-ae5f-55cd2f1f9c8e',
      description: 'description 2',
      gallery: [
        {
          type: 'image',
          url: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/iMac%20-%202.png?alt=media&token=56ba4b84-737c-4f65-ae5f-55cd2f1f9c8e',
        },
      ],
      liveurl: 'https://kaizen-web-client.herokuapp.com/login',
      repository: 'https://github.com/Sphinx-Society/kaizen-web-client',
      technologies: [
        {
          name: 'react',
          icon: 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/react.png?alt=media&token=6f53f9b3-bdc7-43d6-af3c-16b189a522dd',
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
        'cover': 'https://static.platzi.com/media/avatars/Platzi-f730e65b-e92b-44d3-81c0-5c59c4dc4658.png',
        'role': 'Master Student',
        'contract': 'Contrato de prácticas',
        'startDate': '01/01/2019',
        'endDate': 'Actually',
        'description': "Actually I design User interfaces for then make magic with Node and React.js also I am a part of the biggest latinoamerican developer community, where constantly I improve my skills and at the same time I have the opportunity to teach what I've learned",
      },
    ],
    'education': [
      {
        'areaname': 'JavaScript School',
        'description': 'Desarrolla con el Stack MERN con expertos de la industria y el equipo de Ingeniería de Platzi. Sé un Desarrollador FullStack JavaScript.',
        'cover': 'https://drive.google.com/file/d/1ukyc-qxw1sAypQK1RrOf9OJ-n126nkIo/view?usp=sharing',
        'courses': [
          {
            'name': 'Curso de Fundamentos de Pruebas de Software',
            'hours': 6,
            'certificationdate': '19/8/2019',
            'link': 'https://platzi.com/clases/pruebas-software/',
            'cover': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/Curso%20de%20jQuery%20a%20JavaScript%20(1).webp?alt=media&token=7a8f6868-4ca3-433f-b841-23ac0c9770b7',
            'diplom': 'https://firebasestorage.googleapis.com/v0/b/pepe-code.appspot.com/o/diploma-jquery-js_page-0001%20(1).jpg?alt=media&token=293bf3e2-bc22-41ad-a77e-442e382cd030',
            'diplomdrive': 'https://drive.google.com/file/d/1kMmCHb8Y4MwMzK57d8qAe4ossFsUNPhX/view?usp=sharing',
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
