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
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://images.unsplash.com/photo-1581092918484-8313ada2183a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Viraj Nikam",
    designation: "React Developer",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://images.unsplash.com/photo-1581090123319-511acf578fe9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Atharva Shaha",
    designation: "SDE-1",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://images.unsplash.com/photo-1581090465237-2215893ba918?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Ankush",
    designation: "AI Engineer",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://images.unsplash.com/photo-1580983555975-05bc6e99eb6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Karan Shinde",
    designation: "SDE-1",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1683134146828-af5c1a0d2953?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Sham Sharma",
    designation: "Python Dev",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://images.unsplash.com/photo-1617397303021-f68bae9f29d6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Swati Naik",
    designation: "SDE-2",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1664299935896-8b7638a6f105?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Kastuk naik",
    designation: "Fresher",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1682141009894-957650ccc3d5?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Shweta pandit",
    designation: "UX Dev",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://images.unsplash.com/photo-1553484771-898ed465e931?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Sanket Jaha",
    designation: "Fresher",
  },
  {
    _id: Math.random().toString(28).substring(3),
    photoUrl:
      "https://images.unsplash.com/photo-1597436684771-9c1c4a4adce2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Shantanu",
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
    question:
      "Which operator is used to assign a value to a variable in JavaScript?",
    options: [
      { answer: "=", isCorrect: true },
      { answer: "==", isCorrect: false },
      { answer: "===", isCorrect: false },
      { answer: "*", isCorrect: false },
    ],
  },
  {
    question: "What is the output of `2 + '2'` in JavaScript?",
    options: [
      { answer: "'22'", isCorrect: true },
      { answer: "4", isCorrect: false },
      { answer: "'4'", isCorrect: false },
      { answer: "NaN", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    options: [
      { answer: "String", isCorrect: true },
      { answer: "Array", isCorrect: false },
      { answer: "Function", isCorrect: false },
      { answer: "Object", isCorrect: false },
    ],
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: [
      { answer: "// This is a comment", isCorrect: true },
      { answer: "<!-- This is a comment -->", isCorrect: false },
      { answer: "/* This is a comment */", isCorrect: false },
      { answer: "# This is a comment", isCorrect: false },
    ],
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    options: [
      { answer: "pop()", isCorrect: true },
      { answer: "shift()", isCorrect: false },
      { answer: "splice()", isCorrect: false },
      { answer: "slice()", isCorrect: false },
    ],
  },
  {
    question: "What does the `isNaN()` function do in JavaScript?",
    options: [
      { answer: "Checks if a value is Not-A-Number", isCorrect: true },
      { answer: "Converts a value to a number", isCorrect: false },
      { answer: "Returns a number's absolute value", isCorrect: false },
      { answer: "Returns true for numbers", isCorrect: false },
    ],
  },
];

const htmlQuiz = [
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: [
      { answer: "<a>", isCorrect: true },
      { answer: "<link>", isCorrect: false },
      { answer: "<href>", isCorrect: false },
      { answer: "<nav>", isCorrect: false },
    ],
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: [
      { answer: "style", isCorrect: true },
      { answer: "class", isCorrect: false },
      { answer: "id", isCorrect: false },
      { answer: "src", isCorrect: false },
    ],
  },
  {
    question: "Which tag is used to display an image in HTML?",
    options: [
      { answer: "<img>", isCorrect: true },
      { answer: "<src>", isCorrect: false },
      { answer: "<picture>", isCorrect: false },
      { answer: "<figure>", isCorrect: false },
    ],
  },
  {
    question: "What is the correct way to create a comment in HTML?",
    options: [
      { answer: "<!-- comment -->", isCorrect: true },
      { answer: "// comment", isCorrect: false },
      { answer: "/* comment */", isCorrect: false },
      { answer: "# comment", isCorrect: false },
    ],
  },
  {
    question: "Which tag is used to create a numbered list in HTML?",
    options: [
      { answer: "<ol>", isCorrect: true },
      { answer: "<ul>", isCorrect: false },
      { answer: "<li>", isCorrect: false },
      { answer: "<list>", isCorrect: false },
    ],
  },
  {
    question:
      "Which attribute is used to specify a unique identifier for an HTML element?",
    options: [
      { answer: "id", isCorrect: true },
      { answer: "class", isCorrect: false },
      { answer: "name", isCorrect: false },
      { answer: "key", isCorrect: false },
    ],
  },
];

const reactQuiz = [
  {
    question:
      "Which hook should you use to fetch data when a component mounts?",
    options: [
      { answer: "useEffect()", isCorrect: true },
      { answer: "useState()", isCorrect: false },
      { answer: "useRef()", isCorrect: false },
      { answer: "useMemo()", isCorrect: false },
    ],
  },
  {
    question: "What does lifting state up mean in React?",
    options: [
      {
        answer: "Moving state to a common ancestor component",
        isCorrect: true,
      },
      { answer: "Creating a higher-order component", isCorrect: false },
      {
        answer: "Passing state as props to child components",
        isCorrect: false,
      },
      { answer: "Using Redux for state management", isCorrect: false },
    ],
  },
  {
    question: "What is the significance of keys in React?",
    options: [
      {
        answer: "To help React identify which items have changed",
        isCorrect: true,
      },
      { answer: "To handle form inputs", isCorrect: false },
      { answer: "To trigger re-rendering of components", isCorrect: false },
      { answer: "To manage state updates", isCorrect: false },
    ],
  },
  {
    question: "How do you prevent unnecessary re-renders in React?",
    options: [
      { answer: "By using React.memo()", isCorrect: true },
      { answer: "By using useEffect()", isCorrect: false },
      { answer: "By using useRef()", isCorrect: false },
      { answer: "By using useReducer()", isCorrect: false },
    ],
  },
  {
    question: "What does the useReducer hook do?",
    options: [
      { answer: "Manages complex state logic in a component", isCorrect: true },
      { answer: "Handles side effects", isCorrect: false },
      { answer: "Replaces the useState hook", isCorrect: false },
      { answer: "Renders multiple child components", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following is a valid way to conditionally render elements in React?",
    options: [
      { answer: "Using ternary operators", isCorrect: true },
      { answer: "Using for loops", isCorrect: false },
      { answer: "Using setTimeout", isCorrect: false },
      { answer: "Using switch statements", isCorrect: false },
    ],
  },
];

const Quiz_Data = {
  javascript: jsQuiz,
  html: htmlQuiz,
  react: reactQuiz,
};

export { Blog_Data, Card_Data, Accordian_Data, Quiz_Data };
