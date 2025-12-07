const journalbuttons = document.querySelectorAll("#button-journal-group .journalbutton");
const journalMainDivs = document.querySelectorAll("#journalMain .journalMainContent");

const newEntryDiv = document.getElementById("newEntry");
const moodHistoryDiv = document.getElementById("moodHistory");
const reflectionsAndPromptsDiv = document.getElementById("reflectionsAndPrompts");

const moodHistoryData = [
  {
    mood: "😀",
    emotion: "Happy",
    date: "December 8, 2025",
    thought: "Had a lot on my mind today. Feeling good about the progress I’m making."
  },
  
    {
    mood: "😀",
    emotion: "Happy",
    date: "December 7, 2025",
    thought: "Had a really productive day. Feeling good about the progress I’m making."
  },
  {
    mood: "😌",
    emotion: "Calm",
    date: "December 6, 2025",
    thought: "Went for a walk in the evening. The fresh air helped clear my mind."
  },
  {
    mood: "😐",
    emotion: "Neutral",
    date: "December 5, 2025",
    thought: "Nothing special today. Just a normal routine."
  },
  {
    mood: "😞",
    emotion: "Anxious",
    date: "December 4, 2025",
    thought: "I’ve been overthinking things lately… trying to stay grounded."
  },
  {
    mood: "😢",
    emotion: "Sad",
    date: "December 3, 2025",
    thought: "Feeling a bit lonely today. Hoping tomorrow feels better."
  },
  {
    mood: "😤",
    emotion: "Stressed",
    date: "December 2, 2025",
    thought: "Work has been overwhelming. I need a proper break."
  },
  {
    mood: "😴",
    emotion: "Tired",
    date: "December 1, 2026",
    thought: "Didn’t sleep well last night. Energy is low today."
  }
];


// Journal buttons functionality
journalbuttons.forEach(button => {
  button.addEventListener("click", () => {

    journalbuttons.forEach(button => button.classList.remove("bg-lime-400"));
    journalbuttons.forEach(button => button.classList.add("bg-lime-300"));
    journalbuttons.forEach(button => button.classList.remove("scale-105"));
    
    button.classList.add("bg-lime-400");
    button.classList.add("scale-105");

    const label = button.getAttribute("data-label");
    journalMainDivs.forEach(div => div.classList.add("hidden"));
    if (label === "New Entry") {
        newEntryDiv.classList.remove("hidden");
    } else if (label === "Mood History") {
        moodHistoryDiv.classList.remove("hidden");
    } else if (label === "Reflections & Prompts") {
        reflectionsAndPromptsDiv.classList.remove("hidden");
    }

  
  });
});



const moodHistoryList = document.getElementById("moodHistory");

function renderMoodHistory() {
  moodHistoryList.innerHTML = "";
  
  moodHistoryData.forEach(entry => {
    const div = document.createElement("div");
    div.className = "bg-white rounded-xl p-4 shadow-md";

    div.innerHTML = `
      <div class="flex items-center gap-3 mb-1">
        <span class="text-3xl">${entry.mood}</span>
        <div>
          <p class="font-bold text-lg">${entry.emotion}</p>
          <p class="text-sm text-gray-500">${entry.date}</p>
        </div>
      </div>
      <p class="text-gray-700 italic">${entry.thought}</p>
    `;

    moodHistoryList.appendChild(div);
  });
}

renderMoodHistory();
