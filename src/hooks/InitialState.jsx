import React, { useState } from "react";
// URL images from postimage
const photosURL = "https://i.postimg.cc/";
// Icons
import {
  FaLinkedinIn,
  FaBehance,
  FaInstagram,
  FaTelegramPlane,
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
        reference: "https://www.instagram.com/alegbcr/",
        iconName: <FaInstagram />,
      },
      {
        id: 4,
        reference: "https://t.me/alexgbcr",
        iconName: <FaTelegramPlane />,
      },
    ],
  },

  // ABOUT-ME
  intro: {
    greeting: "Hola,",
    name: "soy Alex",
    description:
      "Soy un freelance versátil con habilidades tanto en diseño gráfico como en desarrollo web.",
    picture: `${photosURL}T1MBNLTt/me.png`,
    detail: "imagen de Alexander",
  },
  about: {
    paragraphs: [
      {
        paragraph:
          "Como diseñador gráfico, me especializo en la creación de contenido visual para sitios web, aplicaciones móviles y redes sociales. Estoy familiarizado con herramientas como Adobe Photoshop, Illustrator y After Effects. También tengo experiencia en el diseño de interfaces de usuario, así como en la creación de prototipos interactivos con la herramienta Figma.",
      },
      {
        paragraph:
          "Además, soy un desarrollador full-stack con React. Estoy capacitado para construir aplicaciones web completas utilizando JavaScript, HTML5, CSS3 y React. También tengo experiencia en el uso de herramientas como Node.js, Express.js y MongoDB para crear APIs robustas que se pueden utilizar en aplicaciones web modernas.",
      },
      {
        paragraph:
          "Cuando no estoy en mi oficina, paso mi tiempo con mi hijo jugando o bien paso mi tiempo leyendo.",
      },
      {
        paragraph:
          "Creo que la posibilidad de estar constantemente aprendiendo diferentes habilidades y formas de pensar son la riqueza que podremos heredar a nuestras nuevas generaciones en un mundo tan cambiante como es el actual.",
      },
    ],
    LastParagraph:
      "Si están buscando alguien que pueda ofrecer soluciones creativas e innovadoras para sus proyectos digitales, no dude en contactarme. ¡Estoy listo para ayudarlos!",

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
        name: "Freelance",
        description:
          "Diseñado Gráfico | Desarrollado Web | Consultoría Transformación Digital",
        years: "2021 ~",
      },
      {
        name: "Mk Innovations",
        description: "Diseñador Gráfico",
        years: 2018,
      },
    ],
  },

  // PORTFOLIO
  logos: {
    title: "Logos",
    description: "Creación o renovación de los identidad visual.",
    works: [
      {
        name: "logo meentes creativas",
        image: `${photosURL}zBfSTcJF/meentes-creativas.png`,
      },
      {
        name: "logo limon vibes",
        image: `${photosURL}mgxwKjwT/limon-vibes.png`,
      },
      {
        name: "logo iclean",
        image: `${photosURL}nVPTGp9j/i-clean.png`,
      },
      {
        name: "logo jam",
        image: `${photosURL}SKdf2hpK/jam.png`,
      },
      {
        name: "logo dogzilla",
        image: `${photosURL}K4Xqvd1Q/dogzilla.png`,
      },
      {
        name: "logo gallo_loco",
        image: `${photosURL}GmkQRD7G/gallo-loco.png`,
      },
      {
        name: "logo diamond",
        image: `${photosURL}hG1pLmVc/diamond-property.png`,
      },
      {
        name: "logo mind world",
        image: `${photosURL}TPfc3PFS/mind-world.png`,
      },
      {
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
      },
      {
        id: 2,
        image: `${photosURL}Hk5SLRxJ/01.png`,
      },
      {
        id: 3,
        image: `${photosURL}xdCFTGsk/missbo.png`,
      },
      {
        id: 4,
        image: `${photosURL}vm28czbC/12.png`,
      },
      {
        id: 5,
        image: `${photosURL}28Gsk5zK/ale.png`,
      },
      {
        id: 6,
        image: `${photosURL}J4s6fGC5/04.png`,
      },
      {
        id: 7,
        image: `${photosURL}NfZJBBgq/06.png`,
      },
      {
        id: 8,
        image: `${photosURL}6qmH7NnZ/03.png`,
      },
      {
        id: 9,
        image: `${photosURL}RhNdxbyZ/11.png`,
      },
      {
        id: 10,
        image: `${photosURL}J0vqr5Cc/10.png`,
      },
      {
        id: 11,
        image: `${photosURL}nznSg2nX/02.png`,
      },
      {
        id: 12,
        image: `${photosURL}qBbDD2S7/05.png`,
      },
      {
        id: 13,
        image: `${photosURL}pTkcHjdq/07.png`,
      },
      {
        id: 14,
        image: `${photosURL}4ydLN37Z/08.png`,
      },
      {
        id: 15,
        image: `${photosURL}cJSFthgF/09.png`,
      },
    ],
  },
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
      },
      {
        id: 2,
        company: "Dogzilla",
        profesion: "Diseño Gráfico",
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
        // image: art1,
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
        // image: art1,
        description:
          "Desarrollo Javascript Full-Stack para el desarrollo de su producto digital.",
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

  // Contact
  contact: {
    title: "Estemos en contacto",
    description: "Si crees que puedo servir siendo parte de tu proyecto",
    // image: contactImage,
    image: `${photosURL}5QQKtsnD`,
  },
};

const useInitialState = () => {
  const widthSize = useWindowSize();
  const [state, setState] = useState(initialState);
  return { state, widthSize };
};

export default useInitialState;