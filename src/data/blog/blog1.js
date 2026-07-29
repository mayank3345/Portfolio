export const blogPosts = [
  {
    id: 1,
    slug: "react-js-interview-questions",
    title: "Top 100 React JS Interview Questions & Answers",
    excerpt: "Prepare for your React interview...",
    category: "React",
    image: "/blog/react.jpg",
    featured: true,
    readTime: "15 min read",
    date: "July 2025",

    content: `
## Introduction

React.js is one of the most popular JavaScript libraries.

## What is React?

React is an open-source JavaScript library developed by Facebook.

## Why React?

- Component Based
- Virtual DOM
- Fast Rendering
- Large Community

## Conclusion

Mastering React interview questions increases your chances of getting hired.
`,
  },
  {
    id: 2,
    slug: "javascript-interview-questions",
    title:
      "Top JavaScript Interview Questions & Answers for Freshers and Experienced",
    excerpt:
      "Prepare for your JavaScript interview with the most frequently asked JavaScript interview questions and detailed answers. Covers variables, scope, closures, promises, async/await, ES6, DOM, and more.",

    category: "JavaScript",

    image: "/blog/javascript.jpg",

    featured: false,

    date: "July 12, 2025",

    readTime: "20 min read",

    author: "Aditya Singh",

    tags: [
      "JavaScript",
      "Interview",
      "Frontend",
      "React",
      "Web Development",
      "Programming",
    ],

    content: `
# Top JavaScript Interview Questions & Answers

JavaScript is one of the most popular programming languages used for web development. If you're preparing for a Frontend or Full Stack Developer interview, these JavaScript interview questions will help you build a strong foundation.

---

## 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language used to create interactive web applications. It runs in the browser and can also run on the server using Node.js.

---

## 2. What are the features of JavaScript?

• Lightweight
• Interpreted
• Object-Oriented
• Dynamic Typing
• Event Driven
• Prototype Based
• Cross Platform
• Supports Functional Programming

---

## 3. Difference between var, let and const?

var
- Function scoped
- Can be redeclared
- Can be updated

let
- Block scoped
- Cannot be redeclared
- Can be updated

const
- Block scoped
- Cannot be redeclared
- Cannot be updated

---

## 4. What is Hoisting?

Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope before execution.

---

## 5. What is Scope?

Scope determines where variables are accessible.

Types:
- Global Scope
- Function Scope
- Block Scope

---

## 6. What is Closure?

A closure allows a function to access variables from its outer function even after the outer function has returned.

---

## 7. What is the DOM?

DOM (Document Object Model) represents an HTML document as a tree structure so JavaScript can manipulate web pages.

---

## 8. Difference between == and ===?

== compares values after type conversion.

=== compares both value and data type.

Example:

5 == "5" // true

5 === "5" // false

---

## 9. What is Event Bubbling?

Event Bubbling means events propagate from child elements to parent elements.

---

## 10. What are Promises?

Promises are used to handle asynchronous operations.

States:
- Pending
- Fulfilled
- Rejected

---

## 11. What is async/await?

Async/Await provides a cleaner syntax for working with asynchronous JavaScript.

---

## 12. What is Callback?

A callback is a function passed as an argument to another function.

---

## 13. What is Arrow Function?

Arrow functions provide shorter syntax and do not have their own 'this'.

---

## 14. What is Destructuring?

Destructuring extracts values from arrays or objects.

Example:

const {name, age} = user;

---

## 15. What is Spread Operator?

The spread operator (...) expands arrays or objects.

Example:

const arr2 = [...arr1];

---

## 16. What is Rest Operator?

The rest operator (...) collects multiple values into one variable.

---

## 17. What is Event Delegation?

Event Delegation attaches a single event listener to a parent element instead of multiple child elements.

---

## 18. Difference between null and undefined?

undefined
- Variable declared but not assigned.

null
- Intentional empty value.

---

## 19. What is Local Storage?

Local Storage stores data permanently in the browser until manually cleared.

---

## 20. What is Session Storage?

Session Storage stores data only for the current browser session.

---

## Conclusion

Mastering JavaScript fundamentals is essential for Frontend, React, Next.js, and Full Stack MERN interviews. Practice these questions regularly and build small projects to strengthen your understanding.
`,
  },
  // other posts...
];
