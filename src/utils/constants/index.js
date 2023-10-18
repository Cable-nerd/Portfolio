import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    firebase,
    git,
    eShop,
    gamelogo,
    iCoderlogo,
    quizlogo,
    quizApp,
    tenzies,
    threejs,
    bootstrap,
    eShopPic,
  } from "./../../assets/";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Firebase auth + DB",
      icon: backend,
    },
    {
      title: "3D visuals",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Bootstrap, CSS",
      company_name: "iCoder Blog ",
      icon: iCoderlogo,
      iconBg: "#383E56",
      date: "1st March 2022 - 2nd March 2022",
      points: [
        "A great blog that tells great information about diferent technologies",
        "Builded using HTML, CSS and Bootstrap.",
        "Fully responsive on all devices",
        "It contains Home page, About us page and contact page",
      ],
    },
    {
      title: "React.js",
      company_name: "Tenzies Game",
      icon: gamelogo,
      iconBg: "#E6DEDD",
      date: "12th March 2022 - May 2022",
      points: [
        "A Game of multiple dices.",
        "A user selects similar dices, containing same number.",
        "A user keeps rollin the dices until all dices are set equal",
        "Finally it displays a confetti message that that the user has won!",
      ],
    },
    {
      title: "React.js, API from open trivia DB",
      company_name: "Quizzical App",
      icon: quizlogo,
      iconBg: "#383E56",
      date: "11th July 2022 - 21st Septemeber 2022",
      points: [
        "This is a Quiz App that fetches 5 Questions(API) from open Trivia DB of random genre",
        "It also Fetches and displays 4 answers(API) for each question from open trivia DB",
        "The user Selects the given answers and checks the answers by clicking the Check answer button",
        "It then tells the user how many did the user get correct out of 5, it is responsive",
      ],
    },
    {
      title: "React.js, Redux-Toolkit, Firebase v9+, Node.js etc",
      company_name: "Full Stack eShop e-commerce application",
      icon: eShop,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - July 2023",
      points: [
        "It is a real life example of e-commerce web application, that includes all sorts of things, Builded using HTML, CSS3, Bootstrap, JavaScript, React.js, Redux toolkit, Firebase, Node.js, express.js",
        "A user can purchase an item, go to cart, click on checkout, enter it's shipping details and go to stripe payment checkout for checkout",
        "The Products are stored in Firebase database and Storage aswell, User authentication, login, register is all done by Firebase auth",
        "It includes an admin panel that is accessed only by a specific user(admin user), it can add products to it's tore, check monthly sales total products taht have been shipped or are remaining etc, can also edit or delete products from the store, can observe orders and can cahnge their status.",
        "The user can contact the store's owner by sending them the email from contact us page"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "A good motivated and a creative developer, a great team player, loves making creative stuff and a good friend",
      name: "Jameel Haider",
      designation: "Laraval dev",
      company: "Abiding Tech",
      image: "https://i.postimg.cc/VkZrjWPM/jameel.png",
    },
    {
      testimonial:
        "It's quite amazing that he started an year ago and now he's gotten really ahead, i wish Huzaifa all the best",
      name: "Saad Mughal",
      designation: "owner",
      company: "software house",
      image: "https://i.postimg.cc/Qxyhm4VX/saad.png",
    },
    {
      testimonial:
        "Have seen some of his projects, nice work i would say",
      name: "Abdullah Mazhar",
      designation: "General manager",
      company: "Souq Dahab",
      image: "https://i.postimg.cc/63bQ2WYR/abdullah.png",
    },
  ];
  
  const projects = [
    {
      name: "eShop Store",
      description:
        "Web-based e-commerce application that allows users to buy products, give reviews, contact the owner. It has an admin panel aswell for adding/editing/deleting and calculating stuff in the application ",
      tags: [
        {
          name: "React",
          color: "bg-gradient-to-r from-blue via-blue to-blue",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
        {
          name: "bootstrap",
          color: "voilet-text-gradient",
        },
      ],
      image: eShopPic,
      source_code_link: "https://e-shop-topaz.vercel.app/",
    },
    {
      name: "Tenzies Game",
      description:
        "A game where a person roll the dice and can freeeze the similar dices, when all dices of same value are freezed, then you win the game, above is the link check it out yourself",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "CSS3",
          color: "lightBlue-text-gradient",
        },
      ],
      image: tenzies,
      source_code_link: "https://github.com/Cable-nerd/tenzies-game",
    },
    {
      name: "Quizzical App",
      description:
        "responsive quiz app that feteches the data from open trivai database and diwsplays the questions and their answers, the user selects answers and checks how much has he scored",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "HTML5",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: quizApp,
      source_code_link: "https://github.com/Cable-nerd/Quizzical_App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  