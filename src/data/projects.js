import solarImg from "../img/p_solar-system-min.png";
import tryunfoImg from "../img/p_tryunfo-min.png";
import walletImg from "../img/p_trybewallet-min.png";
import tunesImg from "../img/p_trybetunes-min.png";
import shoppingImg from "../img/p_shopping-cart-min.png";

const projects = [
  {
    name: "Solar System",
    description:
      "My first React application! A Solar System with missions related to the planets.",
    img: solarImg,
    techs: ["React", "Javascript", "CSS", "HTML"],
    deployLink: "https://solarsystem-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/solar-system-trybe-project",
  },
  {
    name: "Tryunfo",
    description: " This project creates a custom deck to a trunfo game!",
    img: tryunfoImg,
    techs: ["React", "Javascript", "CSS", "HTML"],
    deployLink: "https://tryunfo-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/tryunfo-trybe-project",
  },
  {
    name: "Trybewallet",
    description:
      "Expenses tracker application. Exchange values are calculated based on an API.",
    img: walletImg,
    techs: ["React", "Redux", "React Router", "Javascript", "Jest", "RTL"],
    deployLink: "https://trybewallet-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/trybewallet-trybe-project",
  },
  {
    name: "Trybetunes",
    description:
      "A music application! The user can search for artists listed on the 'iTunes API'.",
    img: tunesImg,
    techs: ["React", "React Router", "Javascript", "Jest", "RTL"],
    deployLink: "https://trybetunes-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/trybewallet-trybe-project",
  },
  {
    name: "Shopping Cart",
    description:
      "This project is an exercise where I develop a simple shopping cart. The idea is to fetch data from Mercado Libre's API to show results from a search for the key word 'computer'.",
    img: shoppingImg,
    techs: ["Javascript", "Jest"],
    deployLink: "https://shoppingcart-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/trybewallet-trybe-project",
  },
];

export default projects;
