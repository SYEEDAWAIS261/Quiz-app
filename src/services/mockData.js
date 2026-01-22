export const mockQuestions = [
 // ==========================
// WEB DEVELOPMENT (15 Questions)
// ==========================

// --- EASY (5 Questions) ---
{ id: 1, questionText: "Which hook is used for side effects in React?", options: ["useAction", "useEffect", "useEvent", "useState"], correctAnswer: "useEffect", category: "Web Dev", difficulty: "Easy" },
{ id: 2, questionText: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Main Language", "Home Tool Markup Language"], correctAnswer: "Hyper Text Markup Language", category: "Web Dev", difficulty: "Easy" },
{ id: 3, questionText: "Which CSS property changes text color?", options: ["background-color", "text-style", "color", "font-weight"], correctAnswer: "color", category: "Web Dev", difficulty: "Easy" },
{ id: 4, questionText: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<script>", "<style>", "<link>"], correctAnswer: "<style>", category: "Web Dev", difficulty: "Easy" },
{ id: 5, questionText: "In JavaScript, how do you create a function?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "new.function()"], correctAnswer: "function myFunction()", category: "Web Dev", difficulty: "Easy" },

// --- MEDIUM (5 Questions) ---
{ id: 6, questionText: "What is the purpose of 'props' in React?", options: ["To store internal state", "To pass data between components", "To handle API calls", "To style components"], correctAnswer: "To pass data between components", category: "Web Dev", difficulty: "Medium" },
{ id: 7, questionText: "What is the difference between '==' and '===' in JS?", options: ["No difference", "== checks value, === checks value and type", "=== is for strings only", "== is faster"], correctAnswer: "== checks value, === checks value and type", category: "Web Dev", difficulty: "Medium" },
{ id: 8, questionText: "Which command is used to create a new React app?", options: ["npm install react", "npx create-react-app", "npm start", "npx start-app"], correctAnswer: "npx create-react-app", category: "Web Dev", difficulty: "Medium" },
{ id: 9, questionText: "Which array method is used to create a new array by filtering out elements?", options: ["map()", "forEach()", "filter()", "reduce()"], correctAnswer: "filter()", category: "Web Dev", difficulty: "Medium" },
{ id: 10, questionText: "What is the correct syntax for a Fat Arrow function?", options: ["() => {}", "=> () {}", "function => {}", "arrow => {}"], correctAnswer: "() => {}", category: "Web Dev", difficulty: "Medium" },

// --- HARD (5 Questions) ---
{ id: 11, questionText: "What is the 'Virtual DOM' in React?", options: ["A direct copy of the real DOM", "A lightweight representation of the real DOM in memory", "A browser extension", "A styling engine"], correctAnswer: "A lightweight representation of the real DOM in memory", category: "Web Dev", difficulty: "Hard" },
{ id: 12, questionText: "Which of the following is NOT a Pure Component trait?", options: ["Same input gives same output", "It can modify global variables", "No side effects", "Relies only on props/state"], correctAnswer: "It can modify global variables", category: "Web Dev", difficulty: "Hard" },
{ id: 13, questionText: "What is 'Closure' in JavaScript?", options: ["Closing a browser tab", "A function with access to its outer scope", "Ending a loop", "Private class variables"], correctAnswer: "A function with access to its outer scope", category: "Web Dev", difficulty: "Hard" },
{ id: 14, questionText: "In React, what is 'Lifting State Up'?", options: ["Moving state to a child", "Moving state to a parent to share it", "Deleting state", "Using Redux"], correctAnswer: "Moving state to a parent to share it", category: "Web Dev", difficulty: "Hard" },
{ id: 15, questionText: "What is the purpose of 'useMemo' hook in React?", options: ["To memoize functions", "To memoize expensive calculations", "To update the state", "To create a reference to a DOM element"], correctAnswer: "To memoize expensive calculations", category: "Web Dev", difficulty: "Hard" },
  // ==========================
  // --- EASY (5 Questions) ---
{ id: 16, questionText: "What is 2 + 2 * 2?", options: ["8", "6", "4", "10"], correctAnswer: "6", category: "Math", difficulty: "Easy" },
{ id: 17, questionText: "What is the square root of 144?", options: ["10", "11", "12", "14"], correctAnswer: "12", category: "Math", difficulty: "Easy" },
{ id: 18, questionText: "What is 15% of 200?", options: ["20", "25", "30", "35"], correctAnswer: "30", category: "Math", difficulty: "Easy" },
{ id: 19, questionText: "What is the next number in the sequence: 2, 4, 8, 16, ...?", options: ["24", "32", "20", "30"], correctAnswer: "32", category: "Math", difficulty: "Easy" },
{ id: 20, questionText: "How many sides does a Hexagon have?", options: ["5", "6", "7", "8"], correctAnswer: "6", category: "Math", difficulty: "Easy" },

// --- MEDIUM (5 Questions) ---
{ id: 21, questionText: "A triangle has angles 90° and 45°, what is the third?", options: ["45°", "90°", "60°", "30°"], correctAnswer: "45°", category: "Math", difficulty: "Medium" },
{ id: 22, questionText: "What is the value of Pi (π) to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: "3.14", category: "Math", difficulty: "Medium" },
{ id: 23, questionText: "Solve: 5x = 25. What is x?", options: ["2", "5", "10", "15"], correctAnswer: "5", category: "Math", difficulty: "Medium" },
{ id: 24, questionText: "What is the perimeter of a square with side 5cm?", options: ["20cm", "25cm", "15cm", "10cm"], correctAnswer: "20cm", category: "Math", difficulty: "Medium" },
{ id: 25, questionText: "What is the cube root of 27?", options: ["3", "9", "6", "2"], correctAnswer: "3", category: "Math", difficulty: "Medium" },

// --- HARD (5 Questions) ---
{ id: 26, questionText: "Solve for x: 2x + 5 = 15", options: ["x = 10", "x = 5", "x = 2", "x = 7"], correctAnswer: "x = 5", category: "Math", difficulty: "Hard" },
{ id: 27, questionText: "Sides are 3 and 4 in a right triangle, hypotenuse is?", options: ["5", "6", "7", "8"], correctAnswer: "5", category: "Math", difficulty: "Hard" },
{ id: 28, questionText: "What is the area of a circle with radius 7? (Area = πr²)", options: ["153.86", "144.50", "49.00", "150.00"], correctAnswer: "153.86", category: "Math", difficulty: "Hard" },
{ id: 29, questionText: "What is the value of 5 factorial (5!)?", options: ["60", "100", "120", "150"], correctAnswer: "120", category: "Math", difficulty: "Hard" },
{ id: 30, questionText: "What is the sum of angles in a Quadrilateral?", options: ["180°", "270°", "360°", "450°"], correctAnswer: "360°", category: "Math", difficulty: "Hard" },
  // ==========================
  // --- EASY (5 Questions) ---
{ id: 31, questionText: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars", category: "GK", difficulty: "Easy" },
{ id: 32, questionText: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: "Pacific", category: "GK", difficulty: "Easy" },
{ id: 33, questionText: "How many continents are there in the world?", options: ["5", "6", "7", "8"], correctAnswer: "7", category: "GK", difficulty: "Easy" },
{ id: 34, questionText: "Which is the smallest prime number?", options: ["0", "1", "2", "3"], correctAnswer: "2", category: "GK", difficulty: "Easy" },
{ id: 35, questionText: "What color are Smurfs?", options: ["Green", "Blue", "Red", "Yellow"], correctAnswer: "Blue", category: "GK", difficulty: "Easy" },

// --- MEDIUM (5 Questions) ---
{ id: 36, questionText: "Which country is home to the Kangaroo?", options: ["India", "South Africa", "Australia", "Brazil"], correctAnswer: "Australia", category: "GK", difficulty: "Medium" },
{ id: 37, questionText: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correctAnswer: "1945", category: "GK", difficulty: "Medium" },
{ id: 38, questionText: "Who painted the Mona Lisa?", options: ["Picasso", "Van Gogh", "Da Vinci", "Michelangelo"], correctAnswer: "Da Vinci", category: "GK", difficulty: "Medium" },
{ id: 39, questionText: "What is the currency of Japan?", options: ["Dollar", "Yuan", "Euro", "Yen"], correctAnswer: "Yen", category: "GK", difficulty: "Medium" },
{ id: 40, questionText: "Which is the tallest mountain in the world?", options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"], correctAnswer: "Mount Everest", category: "GK", difficulty: "Medium" },

// --- HARD (5 Questions) ---
{ id: 41, questionText: "Who developed the theory of General Relativity?", options: ["Newton", "Tesla", "Einstein", "Hawking"], correctAnswer: "Albert Einstein", category: "GK", difficulty: "Hard" },
{ id: 42, questionText: "Smallest country in the world by land area?", options: ["Monaco", "Maldives", "Vatican City", "San Marino"], correctAnswer: "Vatican City", category: "GK", difficulty: "Hard" },
{ id: 43, questionText: "What is the chemical symbol for Gold?", options: ["Gd", "Go", "Ag", "Au"], correctAnswer: "Au", category: "GK", difficulty: "Hard" },
{ id: 44, questionText: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Nitrogen", category: "GK", difficulty: "Hard" },
{ id: 45, questionText: "Who is known as the 'Father of Computers'?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], correctAnswer: "Charles Babbage", category: "GK", difficulty: "Hard" },
];