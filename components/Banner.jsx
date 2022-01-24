import React from "react";
import styles from "./banner.module.css";
export default function Banner() {
  return (
    <div
      className={`m-8 h-24 text-3xl text-white flex items-center px-8 rounded-xl font-bold ${styles.animate}`}>
      {" "}
      Create Collection
    </div>
  );
}
