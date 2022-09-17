const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

let startup = true;

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  // text_speak.rate = 0.8;
  // text_speak.pitch = 0.8;
  text_speak.rate = 0.9;
  text_speak.pitch = 0.1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hr = day.getHours();

  if (hr >= 0 && hr < 12) {
    speak("Good Morning");
  } else if (hr > 12 && hr < 17) {
    speak("Good Afternoon");
  } else {
    speak("Goodevening");
  }
}

window.addEventListener("click", (e) => {
  if (startup === false) return;
  e.preventDefault();
  speak("Activating ooh mee");
  wishMe();
  setTimeout(function () {
    startup = false;
  }, 1500);

  // startup = false;
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  speakThis(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
});

function speakThis(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I did not understand, please try again";

  if (message.includes("hey") || message.includes("hello") || message.includes("hi")) {
    const finalText = "good day Chris";
    speech.text = finalText;
  } else if (message.includes("how are you")) {
    const finalText = "I'm great thank you, how may i help you";
    speech.text = finalText;
  } else if (message.includes("your name")) {
    const finalText = "My name is You me";
    speech.text = finalText;
  } else if (message.includes("my name")) {
    const finalText = "you are Chris, of course";
    speech.text = finalText;
    //////////////////////////
  } else if (message.includes("google maps")) {
    window.open(`https://www.google.com/maps`, "_blank");
    const finalText = "opening google maps";
    speech.text = finalText;
  } else if (message.includes("open google")) {
    window.open(`https://google.com`, "_blank");
    const finalText = "opening Google";
    speech.text = finalText;
  } else if (message.includes("who are you")) {
    const finalText = "my name is you me, inspired by Charles";
    speech.text = finalText;
  } else if (message.includes("who am i")) {
    const finalText = "You are Chris";
    speech.text = finalText;
  } else if (message.includes("open instagram")) {
    window.open(`https://instagram.com`, "_blank");
    const finalText = "opening Instagram";
    speech.text = finalText;
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
    const finalText = time;
    speech.text = finalText;
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
    const finalText = date;
    speech.text = finalText;
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "opening calculator";
    speech.text = finalText;

    /////////////////
  } else if (message.includes("what is") || message.includes("who is") || message.includes("what are")) {
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    const finalText = "This is what I found regarding " + message;
    speech.text = finalText;
  } else if (message.includes("wikipedia")) {
    window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
    const finalText = "This is what I found on wikipedia regarding " + message;
    speech.text = finalText;

    //////////////////////////////////////////////////////////
  } else {
    window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    const finalText = "Opening page for " + message;
    speech.text = finalText;
  }
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}
