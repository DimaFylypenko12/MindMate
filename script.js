const buttons = document.querySelectorAll("#button-group .emoButton");

const responseText = document.getElementById("responseText");
const responseTextGeneral = document.getElementById("responseTextGeneral");
const responseTextAffirmation = document.getElementById("responseTextAffirmation");
const responseTextActivitySuggestion = document.getElementById("responseTextActivitySuggestion");
const responseTextReflectionPrompt = document.getElementById("responseTextReflectionPrompt");
const responseTextDateSection = document.getElementById("responseTextDateSection");
const currentDateText = document.getElementById("currentDateText");

const objEmoResponses = {
    Happy: {
        Affirmation : "You deserve to feel good today",
        ActivitySuggestion : "Share your joy in Forum or write one gratitude note.",
        ReflectionPrompt : "What’s one thing that made you smile?"
    },
    Calm: {
        Affirmation : "Peace is a quiet form of strength.",
        ActivitySuggestion : "Listen to a 5-min mindfulness playlist.",
        ReflectionPrompt : "How can you protect your calm today?"
    },
    Neutral: {
        Affirmation : "It’s okay to just exist — you don’t need to fix anything",
        ActivitySuggestion : "Try a 10-minute mindful stretch. ",
        ReflectionPrompt : "What do you need right now?"
    }, 
    Anxious: {
        Affirmation : "You don’t need to carry it all at once",
        ActivitySuggestion : "Try box-breathing for 2 mins. ",
        ReflectionPrompt : "What can you control in this moment?"
    },
    Sad: {
        Affirmation : "You are allowed to rest and feel.",    
        ActivitySuggestion : "Journal or draw what’s weighing on you. ",
        ReflectionPrompt : "What’s something kind you can tell yourself?"
    },
    Stressed: {
        Affirmation : "You’re doing your best, and that’s enough.", 
        ActivitySuggestion : "Go for a 5-min walk or declutter your desk.",
        ReflectionPrompt : "What’s one small task you can finish now?"
    },
    Tired: {
        Affirmation : "Rest is productive too.",
        ActivitySuggestion : "Try 5-min power nap or yoga. ",
        ReflectionPrompt : "How can you give yourself rest tonight?"
    }
}
buttons.forEach(button => {
  button.addEventListener("click", () => {
    responseText.classList.remove("invisible");

    buttons.forEach(btn => btn.classList.remove("bg-lime-400"));
    buttons.forEach(btn => btn.classList.add("bg-lime-300"));
    buttons.forEach(btn => btn.classList.remove("scale-125"));
    
    button.classList.add("bg-lime-400");
    button.classList.add("scale-125");
    
    const label = button.getAttribute("data-label");
    responseTextGeneral.textContent = `💬 Thanks for checking in.`;
    responseTextAffirmation.textContent = `🌟 Affirmation: ${objEmoResponses[label].Affirmation}`;
    responseTextActivitySuggestion.textContent = `🎯 Activity Suggestion: ${objEmoResponses[label].ActivitySuggestion}`;
    responseTextReflectionPrompt.textContent = `🤔 Reflection Prompt: ${objEmoResponses[label].ReflectionPrompt}`;

  });
});


// Save to Journal button functionality

const savetoJournalButton = document.getElementById("savetoJournalButton");
let isSavedSavetoJournalButton = false;

savetoJournalButton.addEventListener("click", () => {
  isSavedSavetoJournalButton = !isSavedSavetoJournalButton; 

  if (isSavedSavetoJournalButton) {
 
    savetoJournalButton.textContent = "Saved ✓";
    savetoJournalButton.classList.remove("bg-lime-50", "text-gray-800");
    savetoJournalButton.classList.add("bg-lime-500", "text-white", "scale-105");
  } else {
 
    savetoJournalButton.textContent = "Save to Journal";
    savetoJournalButton.classList.remove("bg-lime-500", "text-white", "scale-105");
    savetoJournalButton.classList.add("bg-lime-50", "text-gray-800");
  }
});

//Date dispaly

const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);
currentDateText.textContent = `📅 Today is ${formattedDate}`;
