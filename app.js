const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  // text_speak.rate = 0.8;
  // text_speak.pitch = 0.8;
  text_speak.rate = 0.7;
  text_speak.pitch = 0.1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hr = day.getHours();

  if (hr >= 0 && hr < 12) {
    speak("Good Morning sir");
  } else if (hr > 12 && hr < 17) {
    speak("Good Afternoon sir");
  } else {
    speak("Goodevening sir");
  }
}

window.addEventListener("load", () => {
  speak("Activating Inertia");
  // speak("One button to rule them all");

  // wishMe();
  // speak("going online");
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

  if (message.includes("hey") || message.includes("hello")) {
    const finalText = "good day Chris";
    speech.text = finalText;
  } else if (message.includes("how are you")) {
    const finalText = "I'm great thank you, how may i help you";
    speech.text = finalText;
  } else if (message.includes("your name")) {
    const finalText = "My name is Inertia";
    speech.text = finalText;
  } else if (message.includes("my name")) {
    const finalText = "you are Chris, of course";
    speech.text = finalText;
  } else if (message.includes("open google")) {
    window.open(`https://www.google.com`, "_blank");
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