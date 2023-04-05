import React, { useState } from "react";
// URL images from postimage
const photosURL = "https://i.postimg.cc/";
// Icons
import {
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
} from "react-icons/fa";

// Logo Branding
import logo from "../../public/imagotipo.svg";

import useWindowSize from "./useWindowSize";

const initialState = {
  // MENU
  info: {
    logo: logo,
    categories: [
      {
        id: 1,
        name: "Sobre mí",
        path: "/",
      },
      {
        id: 2,
        name: "Portfolio",
        path: "/portfolio",
      },
      {
        id: 3,
        name: "Mis proyectos",
        path: "/my-projects",
      },
      {
        id: 4,
        name: "Contacto",
        path: "/contact",
      },
    ],
    socialMedia: [
      {
        id: 1,
        reference:
          "https://www.linkedin.com/in/alexander-gonz%C3%A1lez-blanco-56a474ba/",
        iconName: <FaLinkedinIn />,
      },
      {
        id: 2,
        reference: "https://www.behance.net/alexandgonzale33",
        iconName: <FaBehance />,
      },
      {
        id: 3,
        reference: "mailto:alexgbcr@proton.me",
        iconName: <FaEnvelope />,
      },
      {
        id: 4,
        reference: "https://t.me/alexgbcr",
        iconName: <FaTelegramPlane />,
      },
      {
        id: 5,
        reference: "https://www.instagram.com/alegbcr/",
        iconName: <FaInstagram />,
      },
    ],
  },

  // ABOUT-ME
  intro: {
    greeting: "Hola, mi nombre es",
    name: "Alexander G.",
    description:
      "Soy un freelance con habilidades tanto en diseño gráfico como en desarrollo web.",
    picture: `${photosURL}T1MBNLTt/me.png`,
    detail: "imagen de Alexander",
  },
  about: {
    paragraphs: [
      {
        paragraph:
          "Como diseñador gráfico, me he especializo en la creación de contenido visual redes sociales, materiales gráficos y piezas para mi colección de arte gráfico. Estoy familiarizado con herramientas como Adobe Photoshop, Illustrator y After Effects. También tengo experiencia en el diseño de interfaces de usuario, así como en la creación de prototipos interactivos con la herramienta Figma.",
      },
      {
        paragraph:
          "Además, soy un desarrollador full-stack con React. Estoy capacitado para construir aplicaciones web completas utilizando JavaScript, HTML5, CSS3 y React. También tengo experiencia en el uso de herramientas como Node.js, Express.js y MongoDB para crear APIs robustas que se pueden utilizar en aplicaciones web modernas.",
      },
      {
        paragraph:
          "Actualemte, estoy explorando el mundo descentralizado de la Web3 en las Blockchain de Solidity y Solana para formar parte de este mundo tan apasionante y ayudar a seguir construyendo los nuevos ecosistemas de la web.",
      },
      {
        paragraph:
          "Si están buscando alguien que pueda ofrecer soluciones creativas e innovadoras para sus proyectos digitales, no dude en contactarme.",
      },
      {
        paragraph: "¡Estoy listo para ayudarlos!",
      },
    ],

    books: [
      {
        id: 1,
        title: "The Business Blockchain",
        author: "William Mougayar",
        image:
          "https://m.media-amazon.com/images/P/B01EIGP8HG.01._SCLZZZZZZZ_SX500_.jpg",
      },
      {
        id: 2,
        title: "Psicología de las masas",
        author: "Gustave Le Bon",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51CDRFFBCDL._SX331_BO1,204,203,200_.jpg",
      },
      {
        id: 3,
        title: "Designing for emotion",
        author: "Aarron Walter",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/31jmLLi9E1L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      },
      {
        id: 4,
        title: "DeFi and the Future of Finance",
        author: "Campbell R. Harvey, Ashwin Ramachandran, Joey Santoro",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41dKXZi614L._SX339_BO1,204,203,200_.jpg",
      },
    ],
  },
  computerSkills: [
    {
      id: 1,
      name: "Graphic Design",
      data: [
        {
          name: "Figma",
          logo: "https://www.svgrepo.com/show/303210/figma-1-logo.svg",
        },
        {
          name: "Adobe Ilustrator",
          logo: "https://www.svgrepo.com/show/53799/illustrator.svg",
        },
        {
          name: "Adobe Photoshop",
          logo: "https://www.svgrepo.com/show/167746/photoshop.svg",
        },
        {
          name: "Adobe After Effects",
          logo: "https://www.svgrepo.com/show/29736/after-effects.svg",
        },
        {
          name: "Adobe Premiere",
          logo: "https://www.svgrepo.com/show/29749/premiere.svg",
        },
      ],
    },
    {
      id: 2,
      name: "Frontend",
      data: [
        {
          name: "JS",
          logo: "https://www.svgrepo.com/show/349419/javascript.svg",
        },
        {
          name: "React",
          logo: "https://www.svgrepo.com/show/452092/react.svg",
        },
        { name: "CSS", logo: "https://www.svgrepo.com/show/452185/css-3.svg" },
        { name: "Sass", logo: "https://www.svgrepo.com/show/374061/sass.svg" },
        {
          name: "Styled-components",
          logo: "https://styled-components.com/logo.png",
        },
        {
          name: "Bootstrap",
          logo: "https://www.svgrepo.com/show/353498/bootstrap.svg",
        },
        {
          name: "Tailwind",
          logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
        },
        {
          name: "Material UI",
          logo: "https://www.svgrepo.com/show/354048/material-ui.svg",
        },
      ],
    },
    {
      id: 3,
      name: "Backend",
      data: [
        {
          name: "Node",
          logo: "https://www.svgrepo.com/show/452075/node-js.svg",
        },
        {
          name: "Python",
          logo: "https://www.svgrepo.com/show/452091/python.svg",
        },
      ],
    },
    {
      id: 4,
      name: "Databases",
      data: [
        {
          name: "SQLite",
          logo: "https://www.svgrepo.com/show/374094/sqlite.svg",
        },
        {
          name: "MySQL",
          logo: "https://www.svgrepo.com/show/373848/mysql.svg",
        },
        {
          name: "Postgres",
          logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
        },
        {
          name: "Mongo DB",
          logo: "https://www.svgrepo.com/show/373845/mongo.svg",
        },
      ],
    },
    {
      id: 5,
      name: "Analysis Data",
      data: [
        {
          name: "Tableau",
          logo: "https://www.svgrepo.com/show/354427/tableau.svg",
        },
        {
          name: "Excel",
          logo: "https://www.svgrepo.com/show/373589/excel.svg",
        },
      ],
    },
  ],
  experienceTimeline: {
    titleExperience: "Un pequeño recorrido",
    companies: [
      {
        position: "Full Stack Developer",
        name: "Freelance",
        description:
          "Diseñado Gráfico | Desarrollado Web | Consultoría Transformación Digital",
        years: "2021 ~",
      },
      {
        position: "Diseñador Gráfico",
        name: "Dogzilla",
        description:
          "Diseñador Gráfico para el contenido digital de su redes sociales y diseños visuales para el restaurante.",
        years: "2019 - 2022",
      },
      {
        position: "Diseñador Gráfico & Frontend Developer",
        name: "Mk Innovations",
        description:
          "Diseñador Gráfico para la cartera de la marca y creador de contenido visual para las redes sociales.",
        years: "2018 - 2021",
      },
    ],
  },

  // PORTFOLIO
  portfolio: {
    title: "Colaboración Freelance",
    description: "Estos son algunos de los proyectos con los que he trabajado",
    works: [
      {
        id: 1,
        company: "Estación Gourmet",
        profesion: "Diseño Gráfico",
        work: "Desarrollo web",
        image: `${photosURL}gjHtMgS0/estacion-gourmet.png`,
        linkPage: "https://estaciongourmet.net/index.php",
        description:
          "Creación de landing page y creación de artes digitales para mostrarse en diferentes redes sociales de interes para la marca",
        works: [
          {
            name: "Landing Page Web",
            images: [
              {
                id: 1,
                image: `${photosURL}XY4mw6mf/Screen-Shot-2023-04-04-at-10-45-23-AM-min.png`,
              },
              {
                id: 2,
                image: `${photosURL}dtMzVy9S/Screen-Shot-2023-04-04-at-10-45-38-AM-min.png`,
              },
              {
                id: 3,
                image: `${photosURL}ryRBTJ5r/Screen-Shot-2023-04-04-at-10-45-59-AM-min.png`,
              },
              {
                id: 4,
                image: `${photosURL}76dj7Grh/Screen-Shot-2023-04-04-at-10-46-13-AM-min.png`,
              },
              {
                id: 5,
                image: `${photosURL}CLj9BxPM/Screen-Shot-2023-04-04-at-10-46-24-AM-min.png`,
              },
            ],
            repository: "https://github.com/alegbcr/estacion-gourmet",
            demo: "",
          },
        ],
      },
      {
        id: 2,
        company: "Dogzilla",
        profesion: "Diseño Gráfico",
        age: "2020",
        work: "Transformación Digital",
        image: `${photosURL}63RmZWCn/dogzilla-design.png`,
        description:
          "Creación de artes y animaciones digitales para mostrarse en diferentes redes sociales de interes para la marca, además de consultoria para las mejores prácticas para la transformación digital y branding de la marca.",
      },
      {
        id: 3,
        company: "Mk Innovations",
        profesion: "Diseño Gráfico",
        work: "Desarrollo web",
        image: `${photosURL}QMvzV9Kj/mkinnovations.png`,
        linkPage: "https://alegbcr.github.io/mkinnovations_page/",
        description:
          "Creación de piezas gráficas tanto para uso digital como para formato fisico tanto para la marca como para los diferentes clientes de la marca.",
      },
      {
        id: 4,
        company: "Mind World",
        profesion: "Diseño Gráfico",
        work: "Transformación Digital",
        image: `${photosURL}HngP4qtK/mind-world.png`,
        description:
          "Desarrollo Javascript Full-Stack para el desarrollo de su producto digital.",
      },
    ],
  },
  logos: {
    title: "Logos",
    description: "Creación o renovación de los identidad visual.",
    works: [
      {
        id: 1,
        name: "logo meentes creativas",
        image: `${photosURL}zBfSTcJF/meentes-creativas.png`,
      },
      {
        id: 2,
        name: "logo limon vibes",
        image: `${photosURL}mgxwKjwT/limon-vibes.png`,
      },
      {
        id: 3,
        name: "logo iclean",
        image: `${photosURL}nVPTGp9j/i-clean.png`,
      },
      {
        id: 4,
        name: "logo jam",
        image: `${photosURL}SKdf2hpK/jam.png`,
      },
      {
        id: 5,
        name: "logo dogzilla",
        image: `${photosURL}K4Xqvd1Q/dogzilla.png`,
      },
      {
        id: 6,
        name: "logo gallo_loco",
        image: `${photosURL}GmkQRD7G/gallo-loco.png`,
      },
      {
        id: 7,
        name: "logo diamond",
        image: `${photosURL}hG1pLmVc/diamond-property.png`,
      },
      {
        id: 8,
        name: "logo mind world",
        image: `${photosURL}TPfc3PFS/mind-world.png`,
      },
      {
        id: 9,
        name: "logo Isrra Music",
        image: `${photosURL}sgrK5Nkt/isrra.png`,
      },
    ],
  },
  designs: {
    title: "Artes Gráficos",
    description: "Algunas de mis creaciones",
    works: [
      {
        id: 1,
        image: `${photosURL}j2ZpZ9Nq/phrase.png`,
        size: null,
      },
      {
        id: 2,
        image: `${photosURL}Hk5SLRxJ/01.png`,
        size: true,
      },
      {
        id: 3,
        image: `${photosURL}xdCFTGsk/missbo.png`,
        size: null,
      },
      {
        id: 4,
        image: `${photosURL}vm28czbC/12.png`,
        size: null,
      },
      {
        id: 5,
        image: `${photosURL}28Gsk5zK/ale.png`,
        size: true,
      },
      {
        id: 6,
        image: `${photosURL}J4s6fGC5/04.png`,
        size: null,
      },
      {
        id: 7,
        image: `${photosURL}NfZJBBgq/06.png`,
        size: true,
      },
      {
        id: 8,
        image: `${photosURL}6qmH7NnZ/03.png`,
        size: null,
      },
      {
        id: 9,
        image: `${photosURL}RhNdxbyZ/11.png`,
        size: true,
      },
      {
        id: 10,
        image: `${photosURL}J0vqr5Cc/10.png`,
        size: true,
      },
      {
        id: 11,
        image: `${photosURL}nznSg2nX/02.png`,
        size: null,
      },
      {
        id: 12,
        image: `${photosURL}qBbDD2S7/05.png`,
        size: true,
      },
      {
        id: 13,
        image: `${photosURL}pTkcHjdq/07.png`,
        size: true,
      },
      {
        id: 14,
        image: `${photosURL}4ydLN37Z/08.png`,
        size: null,
      },
      {
        id: 15,
        image: `${photosURL}cJSFthgF/09.png`,
        size: true,
      },
    ],
  },

  // MY PROJECTS
  myTools: {
    title: "Mis proyectos",
    description:
      "Estos son algunos de mis proyectos que he realizado para aprender las tecnologias y especializarme en el stack de Javascript.",
    works: [
      {
        title: "Generador de contraseña",
        description:
          "Este proyecto está construido en React que permite crear contraseñas aletorimente. Guarda las contraseñas en la memoria de tu dispositivo.",
        reference: "",
        buttonText: "Crear una contraseña",
      },
      {
        title: "Todo Machine",
        description:
          "Este proyecto está construido en React que permite crear contraseñas aletorimente. Guarda las contraseñas en la memoria de tu dispositivo.",
        reference: "https://alegbcr.github.io/todo-machine/#/",
        buttonText: "Crear un To DO",
      },
      {
        title: "Messenger App",
        description:
          "Este proyecto está construido en React que permite crear contraseñas aletorimente. Guarda las contraseñas en la memoria de tu dispositivo.",
        reference: "",
        buttonText: "Ir al Messenger App",
      },
      {
        title: "alegbcr movies",
        description:
          "Este proyecto está construido con JS Vanilla y es para comprender la interacción con una API y en especifico con la API de MovieBD y Axios. El proyecto actualmente se encuentra con Features básicos, sin embargo aún se está trabajando en Features más avanzados para que las personas puedan tener una experiencia más amplia con ella.",
        reference: "https://cute-ganache-d8a3b5.netlify.app/#/",
        buttonText: "Visitar alegbcr movies",
      },
      {
        title: "Landing Page",
        description:
          "Se construyó una landing page de un Catering Service con React. Este proyecto fue pensado para motivar a los emprendedores a empezar con sus proyectos tropicalizando este proyecto.",
        reference: "",
        buttonText: "Estación Gourmet DEMO",
      },
      {
        title: "Menu Digital",
        description:
          "Wep Application constrida con React para el frontend y Node con express para el backend. Esta aplicación es completamente funcional.",
        reference: "",
        buttonText: "Digital Menu DEMO",
      },
    ],
  },
};

const useInitialState = () => {
  const widthSize = useWindowSize();
  const [state, setState] = useState(initialState);
  return { state, widthSize };
};

export default useInitialState;
