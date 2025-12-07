const activitiesButtons = document.querySelectorAll("#button-activities-group .activitiesButton");
const activitiesSections = document.querySelectorAll(".activitiesContent");

const soloActivitiesDiv = document.getElementById("soloActivities");
const groupActivitiesDiv = document.getElementById("groupActivities");
const sustainableMindfulnessDiv = document.getElementById("sustainableMindfulness");

activitiesButtons.forEach(button => {
    button.addEventListener("click", () => {

        activitiesButtons.forEach(btn => {
            btn.classList.remove("bg-lime-400", "scale-105");
            btn.classList.add("bg-lime-300");
        });

        button.classList.add("bg-lime-400", "scale-105");
        activitiesSections.forEach(div => div.classList.add("hidden"));

        const label = button.getAttribute("data-label");

        if (label === "Solo Activities") {
            soloActivitiesDiv.classList.remove("hidden");
        } 
        else if (label === "Group Activities") {
            groupActivitiesDiv.classList.remove("hidden");
        } 
        else if (label === "Sustainable Mindfulness") {
            sustainableMindfulnessDiv.classList.remove("hidden");
        }
    });
});
