import blogsImg from "../img/p_be_blogs-min.png";
import storeImg from "../img/p_be_store-min.png";
import trybesmithImg from "../img/p_be_trybesmith-min.png";
import rpgImg from "../img/p_be_rpg-min.png";

const projectsBack = [
  {
    nameEN: "Blogs API",
    descriptionEN: "RESTful API for a blog with CRUD operations. Documentation with Swagger. Deploy in an AWS EC2 instance",
    namePT: "API de Blogs",
    descriptionPT: "API RESTful para um blog com as operações CRUD. Documentação com Swagger. Deply em uma instância AWS EC2",
    img: blogsImg,
    techs: ["NodeJS", "Express", "Sequelize", "MySQL", "Docker", "Swagger", "AWS EC2"],
    deployLink: "http://ec2-18-228-39-56.sa-east-1.compute.amazonaws.com:3000/documentation/",
    repositoryLink: "https://github.com/erik-ymmt/blogs-api-trybe-project",
  },
  {
    nameEN: "Store Manager API",
    descriptionEN:
      "RESTful API for a store management with MSC architecture.",
    namePT: "API de gerenciamento de loja",
    descriptionPT:
      "API RESTful para gerenciamento de loja com arquitetura MSC.",
    img: storeImg,
    techs: ["NodeJS", "Express", "MySQL", "Sinon", "Chai", "Docker"],
    deployLink: "",
    repositoryLink: "https://github.com/erik-ymmt/store-manager-trybe-project",
  },
  {
    nameEN: "Trybesmith API",
    descriptionEN:
      "RESTful API for a medieval store management with MSC architecture.",
    namePT: "Trybesmith API",
    descriptionPT:
      "API RESTful para gerenciamento de loja medieval com typescript.",
    img: trybesmithImg,
    techs: ["Typescript", "Express", "MySQL", "Docker"],
    deployLink: "",
    repositoryLink: "https://github.com/erik-ymmt/trybesmith-trybe-project",
  },
  {
    nameEN: "Trybers and Dragons RPG",
    descriptionEN:
      "Object-oriented programming project that simulates an RPG game.",
    namePT: "Trybesmith API",
    descriptionPT:
      "Projeto com Programação orientada a objetos que simula um jogo de RPG.",
    img: rpgImg,
    techs: ["Typescript", "POO"],
    deployLink: "",
    repositoryLink: "https://github.com/erik-ymmt/dragons-trybe-project",
  }
];

export default projectsBack;
