import React from "react";
import styles from "./ButtonsContainer.module.css";

export const ButtonsContainer = ({onButtonClick}) => {
  const buttonsNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonsNames) => (
        <button className={styles.buttons} onClick={()=>onButtonClick(buttonsNames)}>{buttonsNames}</button>
      ))}
    </div>
  );
};