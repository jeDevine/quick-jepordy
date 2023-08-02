import { useEffect, useState } from "react";
import "./Main.css";
import Board from "./Board";

interface Props {
  unit: string;
}

const Main = ({ unit }: Props) => {
  const [unitThree, setUnitThree] = useState<any[]>([
    {
      topic: "variables and functions",
      questions: [
        "What two declarative words do we use?",
        "What is the difference between let and const",
        "What are the placeholders that a function needs to do it's job?",
        "How do we call/envoke a function with parameters?",
      ],
      answers: [
        "let and const",
        "let allows reassignment const does not",
        "Parameters",
        "function name followed by () with arguments for each parameter",
      ],
    },
    {
      topic: "if/else",
      questions: [
        "In an if statement, what would go: if(here){}?",
        `In this if/else what would return? let x = false; if(x){return 1} else {return 2};`,
        "In this if/else what would return? let x=true; let y = false; if(x && y){return 1} else if (x === false || y === false){return 2} else {return 3}",
        "in this if/else what would return? x = true; y=true if (!x === false && y === false) {return 1} else if(!x !== true && y !== true) {return 2} else {return 3}",
      ],
      answers: ["The condidtion", "2", "2", "3"],
    },
    {
      topic: "loops",
      questions: [
        "What loop is best for a known start and end?",
        "what is the best loop for going through an array all the way?",
        "what loop will go until your condition is false or a break?",
        "Name these things in the for loop: for(let 1; 2; 3;){}",
      ],
      answers: [
        "for loop",
        "for...of loop",
        "while loop",
        "initializer, condition, step/afterthought",
      ],
    },
    {
      topic: "objects",
      questions: [
        "What brackets signify an object?",
        "What are the sets of propertys in an object called?",
        "what is the way we access a property inside an object?",
        "How do we modify an object's key/value pairs?",
      ],
      answers: [
        "curly brackets {}",
        "key/value pairs",
        "dot notation/bracket notation",
        "dot notation/bracket notation with an = to set the value",
      ],
    },
    {
      topic: "arrays",
      questions: [
        "what brackets signify arrays?",
        "how do we access a particular spot in an array?",
        "how do we modify an array?",
        "how do we access the name of the second dog? let pets = [{name: 'harry'}, {name: 'larry'}, {name: 'jerry'}]",
      ],
      answers: [
        "square brackets []",
        "index",
        "using the index and = sign array[index] = to the value that you want that spot to be",
        "pets[1].name",
      ],
    },
    {
      topic: "array methods",
      questions: [
        "name the best array method to add to an array",
        "what array method is synonymous with delete?",
        "what array method loops through the whole array allowing you to do something to each element in the array?",
        "what array method will go through an array and return the first element to pass it's condition?",
      ],
      answers: [
        "array.push()/array.unshift()",
        "array.spilce()",
        "array.forEach()/array.map()",
        "array.find()",
      ],
    },
  ]);
  const [unitFour, setUnitFour] = useState<any[]>([
    {
      topic: "Objects, Arrays, functions",
      questions: [
        "How do we access properties of an object?",
        "How do we access a particular element of an array?",
        "How do we call/envoke a function with parameters?",
        "What array method returns a new array of objects that meet the condition?",
      ],
      answers: [
        "dot/bracket notation",
        "using the index in []",
        "function name followed by () with arguments for each parameter",
        "array.filter()",
      ],
    },
    {
      topic: "DOM Selectors",
      questions: [
        "What are the two selectors that we use?",
        `What is the difference between selecting using element, class, or ID?`,
        "How do we select inputs in a form to gather their data?",
        "What does querySelector, and querySelectorAll return?",
      ],
      answers: [
        "querySelector and querySelectorAll",
        "element is tag name, class is using dot, ID is using #. The same as CSS selectors",
        "adding .value at the end. Adding .checked if it's a checkbox",
        "A Node, and NodeList",
      ],
    },
    {
      topic: "Modifying Styles",
      questions: [
        "How do we add or remove a class from an element?",
        "How do we add an attribute on to an element?",
        "How do we change/add/remove a style from an element?",
        "How do we get rid of an element from the DOM?",
      ],
      answers: [
        "element.classList.add() or element.classList.remove()",
        "element.setAttribute('attribute', value)",
        "element.style.styleName = value/inital",
        "element.remove()",
      ],
    },
    {
      topic: "Modifying HTML",
      questions: [
        "How do we add a new element to the DOM?",
        "How do we change the text inside of an element?",
        "How do we add a new attribute to an element?",
        "What is the difference between display: none; and element.remove()?",
      ],
      answers: [
        "document.createElement()",
        "element.innerText = value",
        "element.setAttribute('attribute', 'value')",
        "display: none; will hide the element while element.remove() will remove it from the DOM entirely",
      ],
    },
    {
      topic: "Event Listeners",
      questions: [
        "How do we add/remove event listeners?",
        "What event listener do we use on a form?",
        "what do we console.log to see 'the thing we clicked' in a click event?",
        "What is event delegation and why do we use it?",
      ],
      answers: [
        "addEventListener() or removeEventListener()",
        "type submit event BONUS JEPORDY: How do we stop a form submit event from refreshing the page?",
        "event.target/e.target",
        "Event delegation is using one broader eventListener in place of many smaller ones. This saves processing power for our application.",
      ],
    },
  ]);
  const [unitFive, setUnitFive] = useState<any[]>([
    {
      topic: "Exports and Imports!",
      questions: [
        "How do we export our functions?",
        "What do we use to import our modules?",
        "What is it called when we break apart our export as an object?",
        "How can we export more than one function at a time?",
      ],
      answers: [
        "moduls.export = {function}",
        "const {} = require('./filePath')",
        "destructuring",
        "using destructuring on both the export and import",
      ],
    },
    {
      topic: "Jest Tests",
      questions: [
        "What is the first block that we use to say which function we are testing?",
        `What are the blocks we use for each case we want to check?`,
        "What do we put in the test block that allows us to check our tests?",
        "What is the difference between toBe() and toEqual()?",
      ],
      answers: [
        "describe block",
        "test block",
        "expect().toBe()",
        "toBe() for simple data types toEqual() for objects and arrays",
      ],
    },
    {
      topic: "Fill in the blank",
      questions: [
        "Describe('function', _____);",
        "test('testing blah',()=>{ ______(results).toBe(4); });",
        "const {function} = ______('./fileName');",
        "____.____ = {function1, function2} const {function1, function2} = require('./blah');",
      ],
      answers: [
        "()=>{} callback function",
        "expect",
        "require",
        "module.exports",
      ],
    },
    {
      topic: "Name 'This'!",
      questions: [
        "const function = (this!) => {}",
        "functionName(this!)",
        "const {} = require(this!)",
        "expect(result).toBe(this!)",
      ],
      answers: [
        "parameters",
        "arguments",
        "file path",
        "what we expect result's value to be",
      ],
    },
  ]);
  const [chosenUnit, setChosenUnit] = useState<any[]>([]);
  useEffect(() => {
    setChosenUnit(
      unit === "3"
        ? unitThree
        : unit === "4"
        ? unitFour
        : unit === "5"
        ? unitFive
        : []
    );
  }, [unit]);
  return (
    <div className="Main">
      <ul className="topics">
        {chosenUnit?.map((tile) => (
          <li>{tile.topic}</li>
        ))}
      </ul>
      <div className="table">
        <ul className="points">
          <li>100</li>
          <li>200</li>
          <li>300</li>
          <li>400</li>
        </ul>
        <Board tilesArray={chosenUnit} />
      </div>
    </div>
  );
};

export default Main;
