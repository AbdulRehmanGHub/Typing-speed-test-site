const typing_area = document.querySelector("#textarea");
const btn = document.querySelector("#btn");
const score = document.querySelector("#score");
const show_sentence = document.querySelector("#showSentence");

let startTime, endTime, totalTimeTaken;

const sentences = [
  "Because of the laboriousness of the translation process, since the 1940s efforts have been made, with varying degrees of success, to automate translation or to mechanically aid the human translator. More recently, the rise of the Internet has fostered a world-wide market for translation services and has facilitated language localization. Ideally, the translator must know both languages.",
  
  "Quotation marks do exactly what their name suggests -- they quote! They enclose the exact words someone spoke or wrote, ensuring accuracy and attribution. Whether it's dialogue in a novel, a quote in a research paper, or a snippet of song lyrics, quotation marks give credit where it's due and add authenticity to your writing.",

  "At the age of 35, David felt unfulfilled in his corporate job. He had spent the last 10 years climbing the ladder in finance, but his heart wasn't in it. He decided to take a leap of faith and pursue his passion for cooking. He enrolled in culinary school, worked as a line cook at a local restaurant, and eventually opened his own food truck. The first year was challenging, with long hours and razor-thin profit margins.",

  "When Tom's grandmother passed away, he inherited $50,000. Unsure of what to do with the money, he sought advice from a financial advisor. Together, they devised a plan. Tom invested 60% of the money in a diversified portfolio of stocks and bonds, put 20% into a high-yield savings account for emergencies, and used the remaining 20% to pay off his student loan debt.",

  "When Tom's grandmother passed away, he inherited $50,000. Unsure of what to do with the money, he sought advice from a financial advisor. Together, they devised a plan. Tom invested 60% of the money in a diversified portfolio of stocks and bonds, put 20% into a high-yield savings account for emergencies",

  "Learning keyboard shortcuts for common commands can significantly improve your typing efficiency. Practice using shortcuts for actions like copying, pasting, saving, and formatting text. Over time, these shortcuts will become second nature and save you valuable time.",
];

// Disable copy-paste and cut in the textarea
typing_area.addEventListener("copy", (event) => {
  event.preventDefault();
});
typing_area.addEventListener("paste", (event) => {
  event.preventDefault();
});
typing_area.addEventListener("cut", (event) => {
  event.preventDefault();
});

// step 5
const calculateTypingSpeed = (time_taken) => {
  let totalWords = typing_area.value.trim();
  let actualWords = totalWords === "" ? 0 : totalWords.split(" ").length;

  if (actualWords !== 0) {
    let typing_speed = (actualWords / time_taken) * 60;
    typing_speed = Math.round(typing_speed);
    score.innerHTML = `Typing speed is ${typing_speed} words per minutes <br> You wrote ${actualWords} words & Time Taken ${time_taken} sec`;
  } else {
    score.innerHTML = `Typing speed is 0 words per minutes & time taken ${time_taken} sec`;
  }
};

// step 4
const endTypingTest = () => {
  btn.innerText = "Start";

  let date = new Date();
  endTime = date.getTime();

  totalTimeTaken = (endTime - startTime) / 1000;

  calculateTypingSpeed(totalTimeTaken);

  show_sentence.innerHTML = "";
  typing_area.value = "";
};

// step 3
const startTyping = () => {
  let randomNumber = Math.floor(Math.random() * sentences.length);
  show_sentence.innerHTML = sentences[randomNumber];

  let date = new Date();
  startTime = date.getTime();

  btn.innerText = "Done";
};

// step 2
btn.addEventListener("click", () => {
  switch (btn.innerText.toLowerCase()) {
    case "start":
      typing_area.removeAttribute("disabled");
      startTyping();
      break;

    case "done":
      typing_area.setAttribute("disabled", "true");
      endTypingTest();
      break;
  }
});
