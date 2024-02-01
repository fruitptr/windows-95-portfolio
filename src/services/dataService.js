export default class DataService {
    _data = {
        items: [
            { 
                id: 'about-me', 
                name: 'aboutme.txt', 
                icon: 'FileText',
                content: 
                {
                    paragraphs: [
                        "Hi, my name is Muhammad Shaheer Ahmad and I'm a Software Engineer based in Islamabad Pakistan. I have a passion for web development and love to create for web and mobile devices.",
                        "I'm currently in my final semester at Bahria University Islamabad, pursuing a degree in Software Engineering. I have experience working with React, React Native, Node.js, Express.js, and MongoDB. I'm also familiar with Python, C++, and Java.",
                        "When I'm not coding, you'll find me either watching or playing football, or playing Rocket League, Valorant or Stardew Valley. I also love to watch movies and TV shows. These are my favorites:",
                    ],
                    images: [
                        {
                            src: 'https://media.licdn.com/dms/image/D4E03AQE9kvBR1NeL2w/profile-displayphoto-shrink_800_800/0/1684607323287?e=1712188800&v=beta&t=poWR_tRGZbNrykwq_BayYu9fhDA166f5Dj2YfbtLhW0',
                            alt: 'Muhammad Shaheer Ahmad'
                        },
                    ],
                    movies: [
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
                    ]
                } 
            },
            { 
                id: 'projects', 
                name: 'Projects', 
                icon: 'FolderFile',
                content:
                {
                    projects: [
                        {
                            id: "1",
                            icon: "Progman29",
                            name: "Wurdle",
                            description: "A Wordle clone with a newspaper-like theme.",
                            website: "https://wurdle-u88k.onrender.com",
                            githubLink: "https://github.com/fruitptr/wurdle"
                        },
                        {
                            id: "2",
                            icon: "FlyingWindows100",
                            name: "SVM Fruits Classifier",
                            description: "A streamlit app that allows users to upload photos of different fruits, and the SVM classifier predicts the class of the fruit. After prediction, it generates a cocktail recipe from those fruits.",
                            website: "https://cocktailrecipegenerator.streamlit.app/",
                            githubLink: "https://github.com/fruitptr/svm_fruits_classifier",
                        },
                    ],
                },
            },
            { 
                id: 'contact', 
                name: 'contact.txt', 
                icon: 'McmPhone',
                content: 
                {
                    contacts: [
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
                            icon: "Mail",
                        },
                    ],
                },
            },
        ],
    };

    getProjects() {
        const projects = this._data.items
            .filter(item => item.id === 'projects')
            .map(projectItem => projectItem.content.projects);
        return projects.length > 0 ? projects[0] : [];
    }

    getProject(id) {
        const projectsItem = this._data.items.find(item => item.id === 'projects');
        if (projectsItem && projectsItem.content.projects) {
            return projectsItem.content.projects.find(project => project.id === id);
        }
        return null;
    }
  
    getItems() {
      return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
    }
  
    getItem(id) {
      return this._data.items.find((x) => x.id === id);
    }
  
    getProjectInfo() {
      return {
        projectRepo: this._data.projectRepo,
        react95Repo: this._data.react95Repo,
      };
    }
  }