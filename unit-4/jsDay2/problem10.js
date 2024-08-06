// Reduce Functions

// UniqueString
function UniqueString(strings) {
    return strings.reduce((acc, string) => {
      acc[string] = (acc[string] || 0) + 1;
      return acc;
    }, {});
  }
  
  const strings = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "pear",
    "apple",
  ];
  console.log(UniqueString(strings)); // Output: { apple: 3, banana: 2, orange: 1, pear: 1 }
  
  // ProductOfMultipleOfThreeOrFive
  function ProductOfMultipleOfThreeOrFive(numbers) {
    return numbers.reduce(
      (acc, num) => (num % 3 === 0 || num % 5 === 0 ? acc + num : acc),
      0
    );
  }
  
  const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];
  console.log(ProductOfMultipleOfThreeOrFive(numbers)); // Output: 1817
  
  // Filter Functions
  
  // palindromesString
  function palindromesString(words) {
    return words.filter((word) => word === word.split("").reverse().join(""));
  }
  
  const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];
  console.log(palindromesString(words)); // Output: ["racecar", "deified", "level", "radar", "civic"]
  
  // findImage
  function findImage(filePaths) {
    return filePaths.filter(
      (filePath) => filePath.endsWith(".png") || filePath.endsWith(".jpg")
    );
  }
  
  const filePaths = [
    "/images/pic1.jpg",
    "/images/pic2.png",
    "/assets/img/background.jpg",
    "/assets/img/logo.png",
    "/downloads/document.pdf",
    "/downloads/image.png",
    "/downloads/image.jpg",
  ];
  console.log(findImage(filePaths)); // Output: ["/images/pic1.jpg", "/images/pic2.png", "/assets/img/background.jpg", "/assets/img/logo.png", "/downloads/image.png", "/downloads/image.jpg"]
  
  // Map Functions
  
  // swapStrings
  function swapStrings(strings) {
    return strings.map((string) =>
      string.length > 1
        ? string[string.length - 1] + string.slice(1, -1) + string[0]
        : string
    );
  }
  
  const stringsSwap = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  console.log(swapStrings(stringsSwap)); // Output: ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"]
  
  // ForEach Functions
  
  // countWords
  function countWords(sentences) {
    sentences.forEach((sentence, index) => {
      const words = sentence.split(" ").filter((word) => word !== ""); // Split the sentence into words and remove empty strings
      console.log(`Sentence ${index + 1} contains ${words.length} words.`);
    });
  }
  
  const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "She sells seashells by the seashore.",
    "I have a dream that one day this nation will rise up.",
    "To be or not to be, that is the question.",
    "In the beginning, God created the heavens and the earth.",
  ];
  countWords(sentences); // Output: Sentence 1 contains 9 words. ...
  
  // Combination of all functions
  
  // sumOfSquaresOfOddNumbers
  function sumOfSquaresOfOddNumbers(numbers) {
    return numbers
      .filter((num) => num % 2 !== 0)
      .map((num) => num * num)
      .reduce((acc, num) => acc + num, 0);
  }
  
  const numbersCombo = [1, 2, 3, 4, 5, 7];
  console.log(sumOfSquaresOfOddNumbers(numbersCombo)); // Output: 84
  
  // massageArray
  function massageArray(exampleInputArray) {
    return exampleInputArray.map((course) => {
      const techTools = Object.keys(course.techTools)
        .filter((key) => course.techTools[key])
        .map((key) => ({
          language: course.techTools[key],
          details: course.techdetails[key] || "",
        }));
  
      return {
        courseName: course.courseName,
        courseDuration: CourseDurationDirectory[course.courseDuration],
        Category: Category[course.Category],
        type: typeOfCourse.find((type) => type.id === course.type).name,
        techTools,
      };
    });
  }
  
  let typeOfCourse = [
    { id: 1, name: "Developer" },
    { id: 2, name: "Tester" },
  ];
  let CourseDurationDirectory = {
    1: `6 month`,
    2: `1 year`,
    3: `2 year`,
  };
  let Category = {
    3: "Fullstack",
    4: "manual tester",
    5: "automation tester",
  };
  let exampleInputArray = [
    {
      courseName: "masai frontend web26",
      courseDuration: 2,
      Category: 3,
      type: 1,
      techTools: {
        1: "HTML",
        2: "CSS",
        3: "javaScript",
        4: "React",
        5: "Redux",
        6: "Node.js",
        7: "Express",
        8: "MongoDB",
        9: "Bootstrap",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
      },
      techdetails: {
        1: "HTML is the standard markup language for Web pages.",
        2: "CSS is the language we use to style an HTML document. ",
        3: "JavaScript is the programming language of the Web. JavaScript is easy to learn.",
        4: "React is a JavaScript library for building user interfaces.",
        5: "Redux is an open-source JavaScript library for managing and centralizing application state.",
        6: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        7: "Express is a minimal and flexible Node.js web application framework .",
        8: "MongoDB is a document database. It stores data in a type of JSON format called BSON.",
        9: "Bootstrap utilizes Sass for a modular and customizable architecture. ",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
      },
    },
    {
      courseName: "foundation batch",
      courseDuration: 2,
      Category: 4,
      type: 2,
      techTools: {
        1: "aptitude",
        2: "GitHub",
        3: "C",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
      },
      techdetails: {
        1: "1. a natural ability or skill: 2. a natural ability or skill:",
        2: "The open source community is the heart of GitHub and fundamental to how we build software today.",
        3: "C is a general-purpose programming language, developed in 1972",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
      },
    },
    {
      courseName: "Java batch",
      courseDuration: 1,
      Category: 5,
      type: 1,
      techTools: {
        1: "ETL",
        2: "Perl",
        3: "C#",
        4: "Python",
        5: "PHP",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
      },
      techdetails: {
        1: "ETL is used to replicate data from various sources.",
        2: "Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.",
        3: "C# is a general-purpose, modern and object-oriented programming language pronounced as C sharp.",
        4: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.",
        5: "PHP is a popular general-purpose scripting language that is especially suited to web development.",
        6: "",
        7: "",
        8: "",
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: "",
        15: "",
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
      },
    },
  ];
  
  console.log(massageArray(exampleInputArray));
  /*
  Output:
  [
    {
      courseName: 'masai frontend web26',
      courseDuration: '1 year',
      Category: 'Fullstack',
      type: 'Developer',
      techTools: [
        { language: 'HTML', details: 'HTML is the standard markup language for Web pages.' },
        { language: 'CSS', details: 'CSS is the language we use to style an HTML document. ' },
        { language: 'javaScript', details: 'JavaScript is the programming language of the Web. JavaScript is easy to learn.' },
        { language: 'React', details: 'React is a JavaScript library for building user interfaces.' },
        { language: 'Redux', details: 'Redux is an open-source JavaScript library for managing and centralizing application state.' },
        { language: 'Node.js', details: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine." },
        { language: 'Express', details: 'Express is a minimal and flexible Node.js web application framework .' },
        { language: 'MongoDB', details: 'MongoDB is a document database. It stores data in a type of JSON format called BSON.' },
        { language: 'Bootstrap', details: 'Bootstrap utilizes Sass for a modular and customizable architecture. ' }
      ]
    },
    {
      courseName: 'foundation batch',
      courseDuration: '1 year',
      Category: 'manual tester',
      type: 'Tester',
      techTools: [
        { language: 'aptitude', details: '1. a natural ability or skill: 2. a natural ability or skill:' },
        { language: 'GitHub', details: 'The open source community is the heart of GitHub and fundamental to how we build software today.' },
        { language: 'C', details: 'C is a general-purpose programming language, developed in 1972' }
      ]
    },
    {
      courseName: 'Java batch',
      courseDuration: '6 month',
      Category: 'automation tester',
      type: 'Developer',
      techTools: [
        { language: 'ETL', details: 'ETL is used to replicate data from various sources.' },
        { language: 'Perl', details: 'Perl is a family of two high-level, general-purpose, interpreted, dynamic programming languages.' },
        { language: 'C#', details: 'C# is a general-purpose, modern and object-oriented programming language pronounced as C sharp.' },
        { language: 'Python', details: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.' },
        { language: 'PHP', details: 'PHP is a popular general-purpose scripting language that is especially suited to web development.' }
      ]
    }
  ]
  */
  