import React, { useState } from "react";
// Custom Hooks
import useWindowSize from "./useWindowSize";

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
        reference: "https://www.instagram.com/alexgbcr.dev/",
        iconName: <FaInstagram />,
      },
    ],
  },

  // ABOUT-ME
  intro: {
    greeting: "Hola, mi nombre es",
    name: "Alexander G.",
    description:
      "Soy un costarricense con habilidades tanto en diseño gráfico como en desarrollo web.",
    picture: `${photosURL}T1MBNLTt/me.png`,
    detail: "imagen de Alexander",
  },
  about: {
    paragraphs: [
      {
        paragraph:
          "Como diseñador gráfico, me he especializo en la creación de contenido visual para redes sociales, artes gráficos como también animaciones. Estoy familiarizado con herramientas como Photoshop, Illustrator y After Effects. También tengo experiencia en el diseño de interfaces de usuario, así como en la creación de prototipos interactivos con la herramienta Figma.",
      },
      {
        paragraph:
          "Además, soy desarrollador full-stack con el stack MERN. Estoy capacitado para construir aplicaciones web completas utilizando JavaScript, HTML5, CSS3 y React. También tengo experiencia en el uso de herramientas como Node.js, Express.js y MongoDB para crear APIs robustas que se pueden utilizar en aplicaciones web modernas.",
      },
      {
        paragraph:
          "Actualemte, estoy explorando el mundo descentralizado de  Blockchain con Solidity para formar parte de este mundo tan apasionante, además, ayudar a seguir construyendo los nuevos ecosistemas de la web.",
      },
      {
        paragraph:
          "Si están buscando alguien que pueda ofrecer soluciones creativas e innovadoras para sus proyectos digitales, no dude en contactarme. ¡Estoy listo para ayudarlos!",
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
        {
          name: "Next js",
          logo: "https://www.svgrepo.com/show/342062/next-js.svg",
        },
        {
          name: "Typescript",
          logo: "https://www.svgrepo.com/show/374146/typescript-official.svg",
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
        {
          name: "Solidity",
          logo: "https://www.svgrepo.com/show/374088/solidity.svg",
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
    companies: [
      {
        position: "Full Stack Web Developer",
        name: "Freelance",
        description: "Diseñado Gráfico | Desarrollado Web",
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
    works: [
      {
        id: 1,
        company: "Estación Gourmet",
        profesion: "Diseño Gráfico",
        work: "Desarrollo web",
        age: 2021,
        companyLogo: `${photosURL}yxPcQ3pp/logo-estacion-gourmet.png`,
        image: `${photosURL}gjHtMgS0/estacion-gourmet.png`,
        imageRRSS: `${photosURL}fR7H6sB6/disen-o-de-rrss-estacion-gourmet.png`,
        linkPage: "https://estaciongourmet.net/index.php",
        description: [
          {
            paragraph:
              "Creación de artes digitales para compratirse en las redes sociales.",
          },
          {
            paragraph:
              "Creación de Landing Page básica para mostrar información de la marca.",
          },
        ],
        links: [
          {
            name: "demo",
            link: "https://alegbcr.github.io/estacion-gourmet/",
          },
          {
            name: "repositorio",
            link: "https://github.com/alegbcr/estacion-gourmet",
          },
        ],
      },
      {
        id: 2,
        company: "Dogzilla",
        profesion: "Diseño Gráfico",
        age: 2020,
        work: "Transformación Digital",
        companyLogo: `${photosURL}K4Xqvd1Q/dogzilla.png`,
        imageRRSS: `${photosURL}63RmZWCn/dogzilla-design.png`,
        description: [
          {
            paragraph:
              "Creación de artes y animaciones digitales para mostrarse en diferentes redes sociales de interes para la marca, además de consultoria para las mejores prácticas para la transformación digital y branding de la marca.",
          },
        ],
        links: null,
      },
      {
        id: 3,
        company: "Mk Innovations",
        profesion: "Diseño Gráfico",
        work: "Desarrollo web",
        companyLogo: `${photosURL}XvRLYcnB/logo-mk.png`,
        imageRRSS: `${photosURL}QMvzV9Kj/mkinnovations.png`,
        linkPage: "https://alegbcr.github.io/mkinnovations_page/",
        description: [
          {
            paragraph:
              "Creación de piezas gráficas tanto para uso digital como para formato fisico tanto para la marca como para los diferentes clientes de la marca.",
          },
        ],
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
        title: "alegbcr movies",
        description: [
          {
            id: 1,
            paragraph:
              "Este proyecto fue construido con React para comprender la interacción con una API-REST con la API de MovieBD y Axios.",
          },
          {
            id: 2,
            paragraph:
              "El proyecto actualmente se encuentra con carácteristicas básicos, sin embargo, aún se estoy trabajando en carácteristicas más avanzados para que las personas puedan tener una experiencia más amplia con ella.",
          },
          {
            id: 3,
            paragraph:
              "Este proyecto está pensado para un mejorar la interfaces y la experiencia de usuario.",
          },
        ],

        reference: "https://cute-ganache-d8a3b5.netlify.app/#/",
        buttonText: "Visitar alegbcr movies",
      },
      {
        title: "Todo Machine",
        description: [
          {
            id: 1,
            paragraph:
              "Todo Machine es un proyecto constrido con React para crear un TO DOs o una listas de tareas.",
          },
          {
            id: 2,
            paragraph:
              "Cada TO DO o tarea es almacenada en el localStorage de los dispositivos y se sincroniza en cada conexión, además es una WEB-APP que puedes instalar en tu dispositivo sin necesidad de Play Store.",
          },
          {
            id: 3,
            paragraph:
              "Tomando en cuenta que la privacidad es importante, TODO Machine no almacena ningún dato de los usuarios.",
          },
        ],
        reference: "https://alegbcr.github.io/todo-machine/#/",
        buttonText: "Crear un To DO",
      },
      {
        title: "My Restaurant API-REST",
        description: [
          {
            id: 1,
            paragraph:
              "My Restaurant es una API que está pensada en ser consumida para aquellos desarrolladores que desean crear productos digitales para restaurantes.",
          },
          {
            id: 2,
            paragraph:
              "Las tecnologías que se están empleando son Node.js con Express.js, además, Docker, PostgreSQL como base de datos.",
          },
          {
            id: 3,
            paragraph: "Actualmente, aún está siendo contruida.",
          },
        ],
        reference: "https://my-store-blue.vercel.app/",
        buttonText: "Visitar API My Store",
      },
      {
        title: "Generador de contraseña",
        description: [
          {
            id: 1,
            paragraph:
              "Este proyecto está construido en React que permite crear contraseñas aletorimente. Guarda las contraseñas en la memoria de tu dispositivo.",
          },
        ],
        reference: null,
        buttonText: "Crear una contraseña",
      },
      {
        title: "Messenger App",
        description: [
          {
            id: 1,
            paragraph:
              "Este proyecto está construido en React que permite crear contraseñas aletorimente. Guarda las contraseñas en la memoria de tu dispositivo.",
          },
        ],
        reference: null,
        buttonText: "Ir al Messenger App",
      },

      {
        title: "Menu Digital",
        description: [
          {
            id: 1,
            paragraph:
              "Este proyecto está construido en React que permite crear contraseñas aletorimente. Guarda las contraseñas en la memoria de tu dispositivo.",
          },
        ],
        reference: null,
        buttonText: "Digital Menu DEMO",
      },
    ],
  },
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const widthSize = useWindowSize();

  return { state, widthSize };
};

export default useInitialState;
