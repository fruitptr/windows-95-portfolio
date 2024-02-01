import { Progman29 } from "@react95/icons";

const Wurdle = {
    id: "wurdle",
    title: "wurdle.exe",
    icon: <Progman29 variant="32x32_4"/>,
    type: "wurdle",
    menu: [
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/muhammadshaheerahmad/",
        icon: "./assets/icons/linkedin.png",
      },
      {
        name: "Github",
        link: "https://github.com/fruitptr",
        icon: "./assets/icons/github.png",
      },
      {
        name: "Email",
        link: "shaheerahmaddev@gmail.com",
        icon: "./assets/icons/gmail.png",
      },
    ],
  
    content: [
      {
        contentType: "header",
        content: "Wurdle",
      },
      {
        contentType: "paragraph",
        content: [
          "Wurdle is a web-based word-guessing game inspired by the popular game Wordle. In Wurdle, players aim to guess a hidden 5-letter word within 5 attempts. The game features a newspaper-like user interface, creating an immersive environment with accompanying news stories.",
          "Features:",
          "\u2022 Word Guessing: Players attempt to guess a 5-letter word within 5 tries.\n \u2022 Newspaper UI: Wurdle's unique interface resembles a newspaper, enhancing the gaming experience with a touch of storytelling. \n \u2022 Immersive News Stories: The application includes fictional news stories to add depth and context, making the gameplay more engaging.",
          "Website: ",
          "GitHub repository: ",
        ],
      },
      {
        contentType: "image",
        content: [
            {
                src: "../assets/images/wurdle-image.png",
                alt: "Wurdle Image",
            },
        ],
      },
      {
        contentType: "link",
        content: [
            "https://wurdle-u88k.onrender.com",
            "https://github.com/fruitptr/wurdle",
        ],
      },
    ],
  };
  
  export default Wurdle;