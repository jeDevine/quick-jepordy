import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [tiles, setTiles] = useState<any[]>([
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
  return (
    <div className="App">
      <ul className="topics">
        <li>Variables and functions</li>
        <li>if/else</li>
        <li>loops</li>
        <li>objects</li>
        <li>arrays</li>
        <li>array methods</li>
      </ul>
      <div className="table">
        <ul className="points">
          <li>100</li>
          <li>200</li>
          <li>300</li>
          <li>400</li>
        </ul>
        <Board tiles={tiles} />
      </div>
    </div>
  );
}

export default App;
