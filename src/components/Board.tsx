import { useEffect, useState } from "react";
import "./Board.css";

interface Props {
  tilesArray: any[];
}

const Board = ({ tilesArray }: Props) => {
  useEffect(() => {
    const board = document.querySelector(".Board");

    board?.addEventListener("click", (e: any) => {
      console.dir(e.target);

      if (e.target.classList.contains("flip-card-front")) {
        e.target.parentNode.classList.add("flip");
      } else if (e.target.classList.contains("cover")) {
        e.target.classList.add("shrink");
      } else if (e.target.classList.contains("flip-card-back")) {
        e.target.innerHTML = "";
      }
    });
  }, []);
  return (
    <ul className="Board">
      {tilesArray.map((tiles: any) => {
        return tiles.questions.map((question: any, index: any) => (
          <li className="flip-card">
            <div className="flip-card-inner">
              <div className="cover"></div>
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
