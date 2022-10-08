import portfoliImg from "../img/p_portfolio.png";
import walletImg from "../img/p_trybewallet-min.png";
import tunesImg from "../img/p_trybetunes-min.png";
import tryunfoImg from "../img/p_tryunfo-min.png";
import solarImg from "../img/p_solar-system-min.png";
import shoppingImg from "../img/p_shopping-cart-min.png";

const projects = [
  {
    nameEN: "Portfolio (this page)",
    descriptionEN: "Portfolio with my projects!",
    namePT: "Portfólio (essa página)",
    descriptionPT: "Portfólio com meus projetos!",
    img: portfoliImg,
    techs: ["React", "Javascript"],
    deployLink: "https://erikyamamoto.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/portfolio",
  },
  {
    nameEN: "Trybewallet",
    descriptionEN:
      "Expenses tracker application. Exchange values are calculated based on an API.",
    namePT: "Trybewallet",
    descriptionPT:
      "Aplicação de gerenciamento de despesas. Os valores de câmbio são calculados através de uma API",
    img: walletImg,
    techs: ["React", "Redux", "React Router", "Javascript", "Jest", "RTL"],
    deployLink: "https://trybewallet-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/trybewallet-trybe-project",
  },
  {
    nameEN: "Trybetunes",
    descriptionEN:
      "A music application! The user can search for artists listed on the 'iTunes API'.",
    namePT: "Trybetunes",
    descriptionPT:
      "Uma aplicação de música! O usuário pode procurar por artistas listados na 'iTunes API'.",
    img: tunesImg,
    techs: ["React", "React Router", "Javascript", "Jest", "RTL"],
    deployLink: "https://trybetunes-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/trybewallet-trybe-project",
  },
  {
    nameEN: "Tryunfo",
    descriptionEN: " This project creates a custom deck to a trunfo game!",
    namePT: "Tryunfo",
    descriptionPT:
      "Esse projeto cria um deck de cartas inspirado no jogo super trunfo!",
    img: tryunfoImg,
    techs: ["React", "Javascript", "CSS", "HTML"],
    deployLink: "https://tryunfo-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/tryunfo-trybe-project",
  },
  {
    nameEN: "Solar System",
    descriptionEN:
      "My first React application! A Solar System with missions related to the planets.",
    namePT: "Sistema Solar",
    descriptionPT:
      "Meu primeiro projeto em React! Um Sistema Solar com missões relacionadas aos planetas",
    img: solarImg,
    techs: ["React", "Javascript", "CSS", "HTML"],
    deployLink: "https://solarsystem-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/solar-system-trybe-project",
  },
  {
    nameEN: "Shopping Cart",
    descriptionEN:
      "The aplication fetches data related to 'computers' from Mercado Libre's API.",
    namePT: "Carrinho de Compras",
    descriptionPT:
      "A aplicação busca resultados relacionados a 'computadores' na API do Mercado Livre.",
    img: shoppingImg,
    techs: ["Javascript", "Jest"],
    deployLink: "https://shoppingcart-erik.netlify.app/",
    repositoryLink: "https://github.com/erik-ymmt/trybewallet-trybe-project",
  },
];

export default projects;
