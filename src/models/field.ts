import React, { Component } from "react";
import { GameBoard } from "./board";

export type Field = {
  id: string;
  xPos: number;
  yPos: number;
  isBomb: boolean;
  isFlagged: boolean;
  isRevealed: boolean;
  board: GameBoard;
};

function Field(props: Field) {
  props.id;
  props.xPos;
  props.yPos;
  props.isBomb;
  props.isFlagged;
  props.isRevealed;
  props.id = "f" + props.yPos.toString + props.xPos.toString;
  props.isBomb =
    Math.floor(Math.random() * props.board.mineDensity) >
    props.board.xSize * props.board.ySize
      ? true
      : false;
  props.isRevealed = false;
  props.isFlagged = false;
}

function checkIfBoom(field: Field): boolean {
  return field.isBomb && field.isRevealed ? true : false;
}
function revealFieldfieldect(field: Field): void {
  if (!checkIfBoom(field)) {
    field.isRevealed = true;
  } else {
    gameOver();
  }
}

function gameOver(): void {
  console.log("GameOver!");
}

//export const Field = ({id}: F)
