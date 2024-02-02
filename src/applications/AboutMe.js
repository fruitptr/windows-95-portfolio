import { FileText } from "@react95/icons";

const AboutMe = {
    id: "about-me",
    title: "about-me.txt",
    icon: <FileText variant="32x32_4"/>,
    type: "notepad",
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
        link: "mailto:shaheerahmaddev@gmail.com",
        icon: "./assets/icons/gmail.png",
      },
    ],
  
    content: [
      {
        contentType: "header",
        content: "M. Shaheer Ahmad",
      },
      {
        contentType: "paragraph",
        content: [
          "Hi, my name is Muhammad Shaheer Ahmad and I'm a Software Engineer based in Islamabad Pakistan. I have a passion for web development and love to create for web and mobile devices.",
          "I'm currently in my final semester at Bahria University Islamabad, pursuing a degree in Software Engineering. I have experience working with React, React Native, Node.js, Express.js, and MongoDB. I'm also familiar with Python, C++, and Java.",
          "When I'm not coding, you'll find me either watching or playing football, or playing Rocket League, Valorant or Stardew Valley. I also love to watch movies and TV shows. These are my favorites:",
        ],
      },
      {
        contentType: "image",
        content: [
            {
                src: "https://media.licdn.com/dms/image/D4E03AQE9kvBR1NeL2w/profile-displayphoto-shrink_800_800/0/1684607323287?e=1712188800&v=beta&t=poWR_tRGZbNrykwq_BayYu9fhDA166f5Dj2YfbtLhW0",
                alt: "Muhammad Shaheer Ahmad",
            },
            {
                src: "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
                alt: "Marriage Story"
            },
            {
                src: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                alt: "Goodfellas"
            },
            {
                src: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
                alt: "La La Land"
            },
        ],
      }
    ],
  };
  
  export default AboutMe;