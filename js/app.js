let dataList = [
  {
    quote: "I should just tell her what she wants to hear.",
    image: "id-1.jpg"
  },
  {
    quote: "I also have security flaws. I don’t like being outside. I liked morphine too much.",
    image: "id-2.jpg"
  },
  {
    quote: "I only need to press one key to run the exploit. Or, I can press another and disable the entire plan.",
    image: "id-3.jpg"
  },
  {
    quote: "I don't know what I'm supposed to do.",
    image: "id-4.jpg"
  },
  {
    quote: "We live in a kingdom of bullshit.",
    image: "id-5.jpg"
  },
  {
    quote: "I'm only supposed to be your prophet. You're supposed to be my God.",
    image: "id-6.jpg"
  },
  {
    quote: "I'm just playing my best move.",
    image: "id-7.jpg"
  },
  {
    quote: "Trust yourself. You'll do what's right.",
    image: "id-8.jpg"
  },
  {
    quote: "Unfortunately, we're all human. Except me. of course.",
    image: "id-9.jpg"
  },
  {
    quote: "I made my move. You make yours",
    image: "id-10.jpg"
  },
  {
    quote: "Hackers. We inherently trust no one, including each other.",
    image: "id-11.jpg"
  },
  {
    quote: "Life is so much easier when you’re numb.",
    image: "id-12.jpg"
  },
  {
    quote: "Power belongs to the people who take it.",
    image: "id-13.jpg"
  },
  {
    quote: "Bonsoir Elliot.",
    image: "id-14.jpg"
  },
  {
    quote: "You cheated on your wife with seven different women. I’ve got digital proof of all of it.",
    image: "id-15.jpg"
  },
  {
    quote: "Think about it. What if you could take it down one conglomerate?",
    image: "id-16.jpg"
  },
  {
    quote: "So I see you’re running Gnome! You know I’m actually on KDE myself.",
    image: "id-17.jpg"
  }
];

let quoteEl = document.getElementById("quote-body");
let imageEl = document.getElementById("quote-image");
let randomQuoteBtnEl = document.getElementById("quote-btn");

function randomData() {
  let newData = dataList[index(0, dataList.length - 1)];

  quoteEl.innerHTML = newData.quote;
  imageEl.setAttribute('src', 'img/' + newData.image);

  function index(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

randomQuoteBtnEl.addEventListener("click", function(e) {
    randomData(dataList, quoteEl, imageEl);
});
