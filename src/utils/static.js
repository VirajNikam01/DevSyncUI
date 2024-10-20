const Blog_Data = [
  {
    id: "kj45d64d",
    title:
      "Streamlining Your Development Process With An Efficient React File Structure",
    profile:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ketki Shinde",
    designation: "SDE-1",
    updatedAt: "Last updated on Sep 15, 2023",
    paraOne:
      "As I began my journey into the world of React, I quickly realized the importance of a well-structured project. It is the backbone of any React project, and understanding it is crucial for any developer, regardless of their level of experience.",
    paraTwo:
      "It is made up of multiple folders, each with a specific purpose. For instance, the src folder is where all the logic for the application resides. This includes JS files, CSS files, and even test files.",
    paraThree:
      "Within the src folder, you'll find the components folder, which contains all the React components that make up the application. Each component folder typically contains a JS file (the component's file), a CSS file for styling, and a test file for unit tests.",
  },
  {
    id: "kj45d5fg64d",
    title: "React Design Patterns",
    profile:
      "https://plus.unsplash.com/premium_photo-1692241091499-d247dbc58b6b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amar Jadhav",
    designation: "React Dev",
    updatedAt: "Last updated on Aug 10, 2023",
    paraOne:
      "In the realm of frontend development with React, utilizing design patterns is an essential practice. These patterns have evolved to meet the unique requirements of React, providing elegant solutions to recurring challenges developers encounter when creating robust components and applications.",
    paraTwo:
      "The primary goal of these patterns is to address specific issues in component development by simplifying the management of state, logic, and element composition. By offering predefined structures and proven methodologies, React design patterns promote consistency, modularity, and scalability within the codebase.",
    paraThree:
      "These patterns not only solve technical problems but also enhance code efficiency, readability, and maintainability. By adopting standardized practices and well-defined concepts, development teams can collaborate more effectively and build resilient, adaptable React applications for the long term.",
  },
];

const Card_Data = [
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://images.unsplash.com/photo-1581092918484-8313ada2183a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Viraj Nikam",
    designation: "React Developer",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://images.unsplash.com/photo-1581090123319-511acf578fe9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Atharva Shaha",
    designation: "SDE-1",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://images.unsplash.com/photo-1581090465237-2215893ba918?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ankush",
    designation: "AI Engineer",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://images.unsplash.com/photo-1580983555975-05bc6e99eb6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Karan Shinde",
    designation: "SDE-1",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://plus.unsplash.com/premium_photo-1683134146828-af5c1a0d2953?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sham Sharma",
    designation: "Python Dev",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://images.unsplash.com/photo-1617397303021-f68bae9f29d6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Swati Naik",
    designation: "SDE-2",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://plus.unsplash.com/premium_photo-1664299935896-8b7638a6f105?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Kastuk naik",
    designation: "Fresher",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://plus.unsplash.com/premium_photo-1682141009894-957650ccc3d5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Shweta pandit",
    designation: "UX Dev",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://images.unsplash.com/photo-1553484771-898ed465e931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sanket Jaha",
    designation: "Fresher",
  },
  {
    id: Math.random().toString(28).substring(3),
    profile:
      "https://images.unsplash.com/photo-1597436684771-9c1c4a4adce2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Shantanu",
    designation: "SDE-3",
  },
];

const Accordian_Data = [
  {
    id: Math.random().toString(28).substring(3),
    title: "Is this a paid Platform?",
    body: "No. we are not a paid platform at this moment. In future we might introduce some paid features, but the current features will remain free forever.",
  },
  {
    id: Math.random().toString(28).substring(3),
    title: "Can i use this platform from Phone without Laptop",
    body: "Yes, you can use decsyncui platform on the phone, but we highly recommend you to use on laptop and practice the interview questions. Practicing on your own is really important if you want to make the best out of this platform.",
  },
  {
    id: Math.random().toString(28).substring(3),
    title: "Do we get access to code editor to solve problems?",
    body: "No. at this point we do not provide access to the compilars, but soon we are planning to do that. till than you can practice the questions on your vs code or any another code editor.",
  },
  {
    id: Math.random().toString(28).substring(3),
    title: "If I have more questions, how can I reach out to you",
    body: "Drop us mail at support@devsyncui.com",
  },
];

const jsQuiz = [
  {
    question: "What is the result of `typeof NaN` in JavaScript?",
    options: [
      { answer: "Number", isCorrect: true },
      { answer: "String", isCorrect: false },
      { answer: "Object", isCorrect: false },
      { answer: "Undefined", isCorrect: false }
    ]
  },
  {
    question: "Which of the following is used to declare a constant in JavaScript?",
    options: [
      { answer: "const", isCorrect: true },
      { answer: "let", isCorrect: false },
      { answer: "var", isCorrect: false },
      { answer: "function", isCorrect: false }
    ]
  },
  {
    question: "Which method is used to convert JSON into a JavaScript object?",
    options: [
      { answer: "JSON.stringify()", isCorrect: false },
      { answer: "JSON.parse()", isCorrect: true },
      { answer: "JSON.objectify()", isCorrect: false },
      { answer: "JSON.toObject()", isCorrect: false }
    ]
  }
];

const htmlQuiz = [
  {
    question: "Which HTML element is used for the largest heading?",
    options: [
      { answer: "<h1>", isCorrect: true },
      { answer: "<h6>", isCorrect: false },
      { answer: "<header>", isCorrect: false },
      { answer: "<h3>", isCorrect: false }
    ]
  },
  {
    question: "Which attribute is used to link an external stylesheet?",
    options: [
      { answer: "href", isCorrect: true },
      { answer: "src", isCorrect: false },
      { answer: "link", isCorrect: false },
      { answer: "rel", isCorrect: false }
    ]
  },
  {
    question: "What does the `<br>` tag do?",
    options: [
      { answer: "Creates a break in text", isCorrect: true },
      { answer: "Creates a horizontal line", isCorrect: false },
      { answer: "Boldens the text", isCorrect: false },
      { answer: "Inserts an image", isCorrect: false }
    ]
  }
];

const reactQuiz = [
  {
    question: "What is the correct way to create a component in React?",
    options: [
      { answer: "function MyComponent() {}", isCorrect: true },
      { answer: "component MyComponent() {}", isCorrect: false },
      { answer: "function my_component() {}", isCorrect: false },
      { answer: "create MyComponent() {}", isCorrect: false }
    ]
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: [
      { answer: "useState()", isCorrect: true },
      { answer: "useEffect()", isCorrect: false },
      { answer: "useContext()", isCorrect: false },
      { answer: "useReducer()", isCorrect: false }
    ]
  },
  {
    question: "What is JSX?",
    options: [
      { answer: "A syntax extension for JavaScript", isCorrect: true },
      { answer: "A server-side language", isCorrect: false },
      { answer: "A library for styling components", isCorrect: false },
      { answer: "A templating engine", isCorrect: false }
    ]
  }
];

const Quiz_Data = {
  javascript: jsQuiz,
  html: htmlQuiz,
  react: reactQuiz
};





export { Blog_Data, Card_Data, Accordian_Data, Quiz_Data };
