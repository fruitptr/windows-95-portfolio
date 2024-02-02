import { FlyingWindows100 } from "@react95/icons";

const FruitClassifier = {
    id: "fruit-classifier",
    title: "fruit-classifier.exe",
    icon: <FlyingWindows100 variant="32x32_4"/>,
    type: "fruit-classifier",
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
        content: "Fruit Classifier",
      },
      {
        contentType: "paragraph",
        content: [
          "Fruit Classifier is a web-based application that uses a Support Vector Machine (SVM) model to classify images of fruits. The model was trained on a dataset of 4 types of fruits; Banana, Coconut, Pineapple, Peach. The application allows users to upload images of fruits, and generates a cocktail recipe from the upoloaded fruit images",
          "Features:",
          "\u2022 Machine Learning Process: Users are guided through the whole process of Exploratory Data Analysis, Preprocessing and Training.",
          "\u2022 Multiple Fruits: User can upload multiple images, allowing batch processing of the images.",
          "\u2022 Background Removal: If the user uploads an image with a background, the application removes the background and only keeps the fruit.",
          "\u2022 Cocktail Recipe: After the classification, the application generates a cocktail recipe from the fruits.",
          "Website: ",
          "GitHub repository: ",
        ],
      },
      {
        contentType: "image",
        content: [
            {
                src: "https://i.imgur.com/Txdks1T.png",
                alt: "Fruit Classifier Image",
            },
        ],
      },
      {
        contentType: "link",
        content: [
            "https://cocktailrecipegenerator.streamlit.app/",
            "https://github.com/fruitptr/svm_fruits_classifier",
        ],
      },
    ],
  };
  
  export default FruitClassifier;