"use strict";

{
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const results = ["＜＜大吉＞＞（仮免許）", "ちょっとだけいい", "悪くない", "勢いはある","やばい","がんばれ"];
    const n = Math.floor(Math.random() * results.length);
    result.textContent = results[n];
  });
}