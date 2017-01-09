let dataList = [
  "I should just tell her what she wants to hear.",
  "I also have security flaws. I don't like being outside. I liked morphine too much.",
  "I only need to press one key to run the exploit. Or, I can press another and disable the entire plan.",
  "I don't know what I'm supposed to do.",
  "We live in a kingdom of bullshit.",
  "I'm only supposed to be your prophet. You're supposed to be my God.",
  "Hackers. We inherently trust no one, including each other.",
  "There, that's the look I was looking for.",
  "I'm just playing my best move.",
  "Trust yourself. You'll do what's right.",
  "Unfortunately, we're all human. Except me. of course.",
  "I made my move. You make yours",
  "Life is so much easier when you're numb"
];

function randomQuote() {
  let index = Math.floor(Math.random() * (dataList.length - 1));
  return dataList[index];
}

function showQuote() {
  var quoteEl = document.getElementById("quote-body");
  quoteEl.innerHTML = randomQuote();
}

document
  .getElementById("quote-btn")
  .addEventListener("click", function(e) {
    e.preventDefault();
    showQuote();
  })
