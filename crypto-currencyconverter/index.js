"use strict";

const entryField = document.querySelector(".entryField");
const outputField = document.querySelector(".outputField");
const form = document.querySelector("#conversion-form");
const input = document.querySelector("#cryptoInput");
const output = document.querySelector("#cryptoOutput");
const inputAmount = document.querySelector("#cryptoInput");

const registerEvents = async () => {
  try {
    let response = await fetch(
      `https://api.coinconvert.net/convert/${entryField.value}/${outputField.value}?amount=${input.value}`
    );
    let data = await response.json();
    console.log(data);

    // get e.g. EUR value dynamically from object
    output.value = data[outputField.value.toUpperCase()];
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  registerEvents();
});