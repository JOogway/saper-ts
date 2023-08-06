import React, { Component } from "react";
import { Field } from "./field";

export type GameBoard = {
  xSize: number;
  ySize: number;
  mineDensity: number;
  fields: Field[];
};

export class GameBoardObj extends Component<{}, GameBoard> {
  xSize: number;
  ySize: number;
  mineDensity: number;
  constructor(xSize: number, ySize: number, mineDensity: number) {
    super(GameBoardObj);
    this.xSize = xSize;
    this.ySize = ySize;
    this.mineDensity = mineDensity;
  }
}
function createFieldGrid(board: GameBoard): Field[] {
  let FieldsGrid: Field[] = [];
  for (let y = 0; y < board.ySize; y++) {
    for (let x = 0; x < board.xSize; x++) {
      let f: Field = {
        id: "f" + y + x,
        xPos: x,
        yPos: y,
        isBomb: false, //dokonczyc
        isFlagged: false,
        isRevealed: false,
        board: board,
      };
      FieldsGrid.push(f);
    }
  }
  return FieldsGrid;
}

function countMinesAround(fieldClicked: Field, board: Field[]): number {
  if (fieldClicked.isBomb != false) {
    let bombCount = 0;
    for (let y = -1; y <= 1; y++) {
      for (let x = -1; x <= 1; x++) {
        if (y === 0 && y === 0) {
          continue;
        }
        if (
          board.find(
            (f) =>
              f.id === "f" + (fieldClicked.yPos + y) + (fieldClicked.xPos + x)
          ) != undefined
        ) {
          if (board.find((f) => f.isBomb === true)) {
            bombCount++;
          }
        }
      }
    }
    return bombCount;
  } else {
    return 0;
  }
}
