const key = 3;
const form = document.querySelector("form");

const array = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = document.querySelector("textarea");
  //   console.log(message.value);
  ceaserCipher(message.value.toLocaleLowerCase());
  message.value = "";
});

const ceaserCipher = (value) => {
  const plainText = value.replaceAll(" ", "").split("");
  //   console.log(plainText);
  let alphaInNum = [];
  plainText.forEach((strValue) => {
    array.filter((arrValue, index) => {
      if (strValue == arrValue) {
        alphaInNum.push(index);
        // console.log(index);
      }
    });
  });

  const keyAddedArray = alphaInNum.map((value) => {
    return (value + key) % 26;
  });

  //   console.log(keyAddedArray);

  let decryptedArray = [];

  keyAddedArray.forEach((value, index) => {
    array.filter((alphaValue, alphaIndex) => {
      if (alphaIndex == value) {
        decryptedArray.push(array[alphaIndex]);
      }
    });
  });

  const cipherText = decryptedArray.join("");

  const div = document.createElement("div");
  div.classList.add("textContainer")
  div.innerHTML = `<p id="cipherText">Your encrypted message for "<i><b>${value}</i></b>" is: "<i><b>${cipherText}</i></b>"</p>`;
  form.append(div);
};
