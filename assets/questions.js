// Adding question and answer arrays for the quiz

const allQuestions=["Of the following if statements, which one correctly executes three instructions if the condition is true?",
                    "Which of the sets of statements below will add 1 to x if x is positive and subtract 1 from x if x is negative but leave x alone if x is 0?",
                    "Jim currently runs a car rental dealership and wishes to write a program that allows the user to enter the temperature of the location they plan to visit and then recommend a car based on the data. Temp greater than 80, a Convertible should be selected. Temp greater than 60 and less than 80, an SUV should be selected. Temp less than 60, a truck should be selected. Jim gets stuck when he arrives at the second line of code which reads 'Temp greater than 60 and less than 80 for an SUV'. What type of operator should Jim use?",
                    "_______ is the process of finding errors and fixing them within a program.",
                    "Sal needs to execute a section of code ten times within a program. Compare the selection structures below and select which one best meets the needs identified.",
                    "Which of the following is not a required part of a for loop?",
                    "Which of the following is correct about JavaScript?",
                    "Will the following JavaScript code work? \nvar js = (function(x) {return x*x;}(10));",
                    "Which of the following is not javascript data types?",
                    "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
                    "Which of the following can be used to call a JavaScript Code Snippet?",
                    "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
                    "Which of the following scoping type does JavaScript use?",
                    "What will be the result or type of error if p is not defined in the following JavaScript code snippet?\nconsole.log(p)",
                    "Why are event handlers needed in JavaScript?",
                    "Which of the following is not an error in JavaScript?",
                    "The type that specifies what kind of event occurred is ____________",
                    "Which is the object on which the event occurred or with which the event is associated?",
                    "When will the browser invoke the event handler?",
                    "The process by which the browser decides which objects to trigger event handlers on is ____________"];
const allChoices = [["If (x < 0) a = b * 2; y = x; z = a – y;","{ if (x < 0) a = b * 2; y = x; z = a – y; }","If{ (x < 0) a = b * 2; y = x; z = a – y ; }","If (x < 0) { a = b * 2; y = x; z = a – y; }"],
                    ["If (x > 0) x++; else x--;","If (x > 0) x++; else if (x < 0) x--;","If (x == 0) x = 0; else x++; x--;","x++; x--;"],
                    ["&&","||","!=","=="],
                    ["Compiling","Executing","Debugging","Scanning"],
                    ["If-Else","For","While","If"],
                    ["Initialization","Condition","Variable","Increment"],
                    ["JavaScript is an Object-Based language","JavaScript is Assembly-language","JavaScript is an Object-Oriented language","JavaScript is a High-level language"],
                    ["Exception will be thrown","Memory leak","Error","Yes, perfectly"],
                    ["Null type","Undefined type","Number type","All of the above"],
                    ["Position","Window","Standard","Location"],
                    ["Function/Module","Preprocessor","Triggering Event","DNA"],
                    ["will be displayed as JavaScript text on the browser","will throw errors and exceptions","will work perfectly well on a Windows Machine","must be restricted to a Unix Machine only"],
                    ["Sequential","Segmental","Lexical","Literal"],
                    ["Value not found Error","Reference Error","Null","Zero"],
                    ["Allows JavaScript code to alter the behaviour of windows","Adds innerHTML page to the code","Change the server location","Performs handling of exceptions and occurrences"],
                    ["Missing of bracket","Syntax Error","Missing of semicolons","Division by zero"],
                    ["event type","event target","both event type and event target","interface"],
                    ["event type","event target","both event type and event target","interface"],
                    ["When the program begins","When any event occurs","When the specified event occurs","When the webpage loads"],
                    ["Event Triggering","Event Listening","Event Handling","Event propagation"]];
const allResults = ["D",
                    "B",
                    "A",
                    "C",
                    "B",
                    "C",
                    "A",
                    "D",
                    "D",
                    "B",
                    "A",
                    "C",
                    "C",
                    "B",
                    "A",
                    "D",
                    "A",
                    "B",
                    "C",
                    "D"];
