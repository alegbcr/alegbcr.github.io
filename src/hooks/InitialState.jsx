import React, { useState } from "react";
// Custom Hooks
import useWindowSize from "./useWindowSize";

// URL images from postimage
const photosURL = "https://i.postimg.cc/";
const driveURL = "http://drive.google.com/uc?export=view&id=ID-IMAGE"; // ID-IMAGE = 1iF0tVJqlcZ4a3Qb0W_Q1A8twUmvJXR5m

// Icons
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa6";

// Logo Branding
import logo from "../../public/images/logo.png";

const initialState = {
  // MENU
  info: {
    logo: logo,
    cv: "https://drive.google.com/file/d/1XrbycOZOUoZn3x3YTMRI4ofOp7SL75es/view?usp=share_link",
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
        id: 4,
        name: "Contacto",
        path: "/contact",
      },
    ],
    socialMedia: [
      {
        id: 1,
        name: "LinkedIn",
        reference:
          "https://www.linkedin.com/in/alexander-gonz%C3%A1lez-blanco-56a474ba/",
        iconName: <FaLinkedinIn />,
      },
      // {
      //   id: 2,

      //   reference: "mailto:alexgbcr@proton.me",
      //   iconName: <FaEnvelope />,
      // },
      {
        id: 3,
        name: "WhatsApp",
        reference: "https://wa.me/50670264835",
        iconName: <FaWhatsapp />,
      },
      {
        id: 4,
        name: "Telegram",
        reference: "https://t.me/alexgbcr",
        iconName: <FaTelegram />,
      },
    ],
  },

  // ABOUT-ME
  intro: {
    greeting: "Alexander González",
    description:
      "Soy un Tico que construye products en la web tanto en frontend como en backend.",
    picture: `${photosURL}T1MBNLTt/me.png`,
    detail: "imagen de Alexander",
  },
  about: {
    paragraphs: [
      {
        id: 1,
        paragraph:
          "Ayudo a las marcas en destacar en este mundo digitalizado. Juntos, podemos crear algo maravilloso.",
      },
      {
        id: 2,
        paragraph:
          "Mi experiencia en el diseño y en la programación hace que sea un excelente aliado para el mundo web.",
      },
      {
        id: 3,
        paragraph:
          "Como diseñador gráfico, me he especializo en la creación de contenido visual para redes sociales, artes gráficos como también animaciones. Estoy familiarizado con herramientas como Photoshop, Illustrator y After Effects. También tengo experiencia en el diseño de interfaces de usuario, así como en la creación de prototipos interactivos con la herramienta Figma.",
      },
      {
        id: 4,
        paragraph:
          "Además, soy desarrollador full-stack con el stack MERN. Estoy capacitado para construir aplicaciones web completas utilizando JavaScript, HTML5, CSS3 y React. También tengo experiencia en el uso de herramientas como Node.js, Express.js y MongoDB para crear APIs robustas que se pueden utilizar en aplicaciones web modernas.",
      },
      {
        id: 5,
        paragraph:
          "Actualemte, estoy explorando el mundo descentralizado de  Blockchain con Solidity para formar parte de este mundo tan apasionante, además, ayudar a seguir construyendo los nuevos ecosistemas de la web.",
      },
      {
        id: 6,
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

  porfolioCategories: ["Web Development", "Diseño Gráfico"],

  // PORTFOLIO
  portfolio: {
    graphicDesign: {
      logos: [
        {
          name: "meentes creativas",
          image: `${photosURL}zBfSTcJF/meentes-creativas.png`,
        },
        {
          name: "limon vibes",
          image: `${photosURL}mgxwKjwT/limon-vibes.png`,
        },
        {
          name: "iclean",
          image: `${photosURL}nVPTGp9j/i-clean.png`,
        },
        {
          name: "jam",
          image: `${photosURL}SKdf2hpK/jam.png`,
        },
        {
          name: "dogzilla",
          image: `${photosURL}K4Xqvd1Q/dogzilla.png`,
        },
        {
          name: "gallo_loco",
          image: `${photosURL}GmkQRD7G/gallo-loco.png`,
        },
        {
          name: "diamond",
          image: `${photosURL}hG1pLmVc/diamond-property.png`,
        },
        {
          name: "mind world",
          image: `${photosURL}TPfc3PFS/mind-world.png`,
        },
        {
          name: "Isrra Music",
          image: `${photosURL}sgrK5Nkt/isrra.png`,
        },
      ],
      arts: [
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
    webDevelopment: {
      works: [
        {
          id: 1,
          company: "Estación Gourmet",
          work: "Diseño Gráfico - Desarrollo web",
          age: "2021",
          companyLogo: `${photosURL}yxPcQ3pp/logo-estacion-gourmet.png`,
          imagePreview: `${photosURL}gjHtMgS0/estacion-gourmet.png`,
          descriptionRRSS:
            "Creación de artes digitales para compratirse en las redes sociales.",
          imageRRSS: `${photosURL}fR7H6sB6/disen-o-de-rrss-estacion-gourmet.png`,
          descriptionWeb:
            "Creación de Landing Page básica para mostrar información de la marca.",
          image: `${photosURL}gjHtMgS0/estacion-gourmet.png`,
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
          work: "Diseño Gráfico",
          age: "2020 - 2022",
          companyLogo: `${photosURL}K4Xqvd1Q/dogzilla.png`,
          imagePreview: `${photosURL}63RmZWCn/dogzilla-design.png`,
          descriptionRRSS:
            "Creación de artes gráficos para el interior del restaurante, menú y redes sociales.",
          imageRRSS: `${photosURL}63RmZWCn/dogzilla-design.png`,
          descriptionWeb: null,
          image: null,
          links: null,
        },
        {
          id: 3,
          company: "Mk Innovations",
          work: "Diseño Gráfico - Desarrollo web",
          age: "2019 - 2022",
          companyLogo: `${photosURL}XvRLYcnB/logo-mk.png`,
          imagePreview: `${photosURL}QMvzV9Kj/mkinnovations.png`,
          descriptionRRSS:
            "Creación de piezas gráficas tanto para uso digital como para formato fisico tanto para la marca como para los diferentes clientes de la marca.",
          imageRRSS: null,
          descriptionWeb: "Demo de landing page para la marca",
          image: `${photosURL}QMvzV9Kj/mkinnovations.png`,
          links: [
            {
              name: "demo",
              link: "https://alegbcr.github.io/mkinnovations_page/",
            },
            {
              name: "repositorio",
              link: "https://github.com/alegbcr/mkinnovations_page",
            },
          ],
        },
      ],
      myProjects: [
        {
          id: 1,
          work: "alegbcr movies",
          imagePreview: `${photosURL}WbsvsK8p/Screenshot-2023-12-09-114631.png`,
          description: [
            {
              paragraph:
                "Este proyecto fue construido con React para comprender la interacción con la API de MovieBD y Axios.",
            },
            {
              paragraph:
                "El proyecto actualmente se encuentra con carácteristicas básicos, sin embargo, aún se está trabajando en carácteristicas más avanzados para ser una Web App más completa.",
            },
          ],
          technologies: [
            {
              name: "Figma",
              logo: "https://www.svgrepo.com/show/303210/figma-1-logo.svg",
            },
            {
              name: "React",
              logo: "https://www.svgrepo.com/show/452092/react.svg",
            },
            {
              name: "CSS",
              logo: "https://www.svgrepo.com/show/452185/css-3.svg",
            },
            {
              name: "Bootstrap",
              logo: "https://www.svgrepo.com/show/353498/bootstrap.svg",
            },
          ],
          links: [
            {
              name: "demo",
              link: "https://cute-ganache-d8a3b5.netlify.app/#/",
            },
            {
              name: "repositorio",
              link: "https://github.com/alegbcr/movies-app",
            },
          ],
        },
        {
          id: 2,
          work: "Todo Machine",
          imagePreview: `${photosURL}/x83VKyfS/Screenshot-2023-12-09-114730.png`,
          description: [
            {
              paragraph:
                "Todo Machine es un proyecto constrido con React para crear un TO DOs o una listas de tareas.",
            },
            {
              paragraph:
                "Cada TO DO o tarea es almacenada en el localStorage de los dispositivos y se sincroniza en cada conexión, además es una WEB-APP que puedes instalar en tu dispositivo sin necesidad de Play Store.",
            },
            {
              paragraph:
                "Tomando en cuenta que la privacidad es importante, TODO Machine no almacena ningún dato de los usuarios.",
            },
          ],
          technologies: [
            {
              name: "Figma",
              logo: "https://www.svgrepo.com/show/303210/figma-1-logo.svg",
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
              name: "CSS",
              logo: "https://www.svgrepo.com/show/452185/css-3.svg",
            },
            {
              name: "Tailwind",
              logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
            },
          ],
          links: [
            {
              name: "demo",
              link: "https://todo-app-eight-azure-32.vercel.app/",
            },
            {
              name: "repositorio",
              link: "https://github.com/alegbcr/todo-app",
            },
          ],
        },
        {
          id: 3,
          work: "My Restaurant API-REST",
          imagePreview: `${photosURL}kGmd6hdc/Screenshot-2023-12-09-114801.png`,
          companyLogo: `${photosURL}XvRLYcnB/logo-mk.png`,
          image: `${photosURL}QMvzV9Kj/mkinnovations.png`,
          imageRRSS: `${photosURL}QMvzV9Kj/mkinnovations.png`,
          description: [
            {
              paragraph:
                "My Restaurant es una API que está pensada en ser consumida para aquellos desarrolladores que desean crear productos digitales para restaurantes.",
            },
            {
              paragraph:
                "Las tecnologías que se están empleando son Node.js con Express.js, además, Docker, PostgreSQL como base de datos.",
            },
            {
              paragraph: "Actualmente, aún está siendo contruida.",
            },
          ],
          technologies: [
            {
              name: "Node",
              logo: "https://www.svgrepo.com/show/452075/node-js.svg",
            },
            {
              name: "Postgres",
              logo: "https://www.postgresql.org/media/img/about/press/elephant.png",
            },
          ],
          links: [
            {
              name: "demo",
              link: "https://my-store-blue.vercel.app/",
            },
            {
              name: "repositorio",
              link: "https://github.com/alegbcr/my-store",
            },
          ],
        },
      ],
    },
  },
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const widthSize = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return { state, widthSize, isOpen, setIsOpen };
};

export default useInitialState;
