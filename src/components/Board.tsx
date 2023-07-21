import { useEffect, useState } from "react";
import "./Board.css";

interface Props {
  tiles: any[];
}

const Board = ({ tiles }: Props) => {
  useEffect(() => {
    const board = document.querySelector(".Board");
    const card = document.querySelector(".flip-card");

    board?.addEventListener("click", (e: any) => {
      console.dir(e.target);

      if (e.target.classList.contains("flip-card-front")) {
        e.target.parentNode.classList.add("flip");
      }
    });
  }, []);
  return (
    <ul className="Board">
      {tiles.map((tiles: any) => {
        return tiles.questions.map((question: any, index: any) => (
          <li className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-back">{tiles.answers[index]}</div>
              <div className="flip-card-front"> {question}</div>
            </div>
          </li>
        ));
      })}
    </ul>
  );
};

export default Board;
