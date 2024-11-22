
# Javascript

## [JavaScript](https://simple.wikipedia.org/wiki/JavaScript) is a high-level programming language that follows the ECMAScript standard. It was originally designed as a scripting language for websites but became widely adopted as a general-purpose programming language, and is currently the most popular programming language in use. JavaScript is usually found running in a web browser as interactive or automated content, ranging from popup messages and live clocks to large web applications. JavaScript is also commonly used in server-side programming through platforms like Node.js, or "embedded" in non-JavaScript applications where the base programming language lacks the high-level functionality that JavaScript offers
![](Unofficial_JavaScript_logo_2.svg.png)

# Use
## JavaScript is typically inserted into [HTML](https://simple.wikipedia.org/wiki/HTML) when used on the web, either directly in the file in an HTML tag, or linked to a separate file containing the script.

## JavaScript, as a full featured scripting language, can be used to provide functionality to a website. Examples include:
+ Using [AJAX](https://simple.wikipedia.org/wiki/Ajax_(programming)) in order to load content without refreshing the website.
+ Changing HTML through the Document Object Model
+ Changing [CSS](https://simple.wikipedia.org/wiki/CSS)
+ [Validating](https://simple.wikipedia.org/wiki/Data_validation) inputs of forms and sending them.
+ Tracking users as they move throughout the website.
 ____
# Frameworks
## A majority of websites use what is known as a [framework](https://simple.wikipedia.org/wiki/Framework). Frameworks may allow programming to be easier as more predefined procedures are defined within it. Such a library is [jQuery](https://simple.wikipedia.org/wiki/JQuery).
___
# Video Games
## JavaScript can be used to create and run video games in the browser. The modern web has quickly become a viable platform for creating and distributing high-quality games. With modern web technologies and a recent browser, it’s entirely possible to make stunning, top-notch games for the web. JavaScript is blazing fast in modern browsers and getting faster all the time. You can use its power to write the code for your game or look at using technologies like Emscripten or Asm.js to easily port your existing games.
## There are also many widely adopted game engines that you can use to develop games with JavaScript and HTML5. Some popular ones include Three.js, Pixi.js, Phaser, Babylon.js, Matter.js, and PlayCanvas. These game engines provide a range of features and tools to help you create sophisticated 2D and 3D graphics without relying on third-party plugins
___
# Beyond web browsers
## JavaScript is also used outside of web browsers. As a scripting language, JavaScript can be used to define the behaviour of applications such as extensions in [GNOME Shell](https://simple.wikipedia.org/wiki/GNOME).
## In addition, there are [runtime](https://simple.wikipedia.org/wiki/Runtime) environments for running JavaScript as a server side programming language. Such an environment is [Node.js](https://simple.wikipedia.org/wiki/Node.js).
___
# Syntax
## A JavaScript [program](https://simple.wikipedia.org/wiki/Computer_program) is made of a collection of instructions called "statements". A [semicolon](https://simple.wikipedia.org/wiki/Semicolon) marks the end of a statement, and allows multiple statements to be placed on the same line. However, it is typical to write each statement on its own line to keep a program file readable.
## Variables can be defined in several ways. In an older version named "ES5", variables are defined using the var keyword. In the newer versions after ES5, variables can be defined using const for constant variables and let for local variables. The value of constant variables cannot be re-declared or reassigned. Variables assigned using const or let are contained within blocks, while variables assigned using var are contained within functions.
```javascript
// ES5
var x = 1;

// ES6+
const y = 10; // Cannot be reassigned
let t = 5; // Can be reassigned
```
___
# Examples
## The script below prints "Example" on the screen. The lines that start with "//" are comments, which are used to describe the actions of the program.
```javascript
function sayHi() {
    let name = prompt("What's your name?"); 
    // This name is saved to a variable
    
    alert("Hello " + name);
    // Whatever the name is, the browser alerts "Hello (name)"
}

sayHi(); // Runs the function sayHi

/*  This is also a comment,
    but it can span multiple lines.
*/
```
___
# The code above alerts ""Hello " + name"
## If you want to put JavaScript in your HTML, you put it between an opening <script> and closing </script> tag. These tags mean that whatever is between them is a script and not text to be put onto the web page. The script below inserts the numbers 1 through 10 at the bottom of a [webpage](https://simple.wikipedia.org/wiki/Webpage):
```html
<!DOCTYPE html>
<head>
    <title>Example page</title>
    <script> // This is the script tag

    for (let counter = 1; counter <= 10; counter++) {
        document.body.innerHTML = document.body.innerHTML + counter + "<br>";
        
        /*
            This puts the number, then a new line element (<br>),
            at the end of the web page.
        */
        
    }

    // End javascript:
    </script>
</head>
<body></body>
```
___
## The for() loop makes whatever code is between the { and the } happen more than one time. In this case, it keeps looping until numOfTimesAround is equal to 10, then it stops. This means it equals ten. It's a bit confusing at first, but it works.
___
# Differences between Java and Javascript
+ In Java, to define a [variable](https://simple.wikipedia.org/wiki/Variable), you have to say what type of variable it is: a number, a word, a letter, or more. In JavaScript, this is not necessary.
+ In JavaScript, functions are stored as variables (unlike Java). This makes the following code okay in JavaScript
```javascript
function sayHi() {
    alert("Hi!");
}

sayBye = function() {
    alert("Bye!");
}

sayHi();
sayBye();
```
+ JavaScript is interpreted, but Java, in most cases, must be compiled. This means that JavaScript needs to be run by another computer program (an interpreter), but finished Java can be run as its own program.
___

# Related pages
+ [HTML](https://simple.wikipedia.org/wiki/HTML)
+ [Ajax programming](https://simple.wikipedia.org/wiki/Ajax_(programming))
+ [Java programming language](https://simple.wikipedia.org/wiki/Java_(programming_language))
+ [TypeScript](https://simple.wikipedia.org/wiki/TypeScript)
_____
____
___
# __"THE END"__