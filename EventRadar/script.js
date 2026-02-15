const events = [

    // MUJ EVENTS (From Academic Calendar)
    { name: "Oneiros - Annual Cultural Fest", type: "Fest", location: "MUJ", date: "March 2026", level: "College", link: "https://jaipur.manipal.edu" },
    { name: "Leadership Summit", type: "Workshop", location: "MUJ", date: "February 2026", level: "College", link: "https://jaipur.manipal.edu" },
    { name: "MTE & ETE Academic Events", type: "Workshop", location: "MUJ", date: "April 2026", level: "College", link: "https://jaipur.manipal.edu" },

    // GOVERNMENT HACKATHONS
    { name: "Smart India Hackathon 2026", type: "Hackathon", location: "India", date: "2026", level: "National", link: "https://www.sih.gov.in" },
    { name: "India-AI Impact Summit 2026", type: "Hackathon", location: "India", date: "2026", level: "National", link: "https://www.meity.gov.in" },
    { name: "UIDAI Data Hackathon 2026", type: "Hackathon", location: "India", date: "2026", level: "National", link: "https://uidai.gov.in" },
    { name: "AI for Bharat Hackathon", type: "Hackathon", location: "India", date: "2026", level: "National", link: "https://www.meity.gov.in" },
    { name: "Bhashini AksharDrishti Hackathon", type: "Hackathon", location: "India", date: "2026", level: "National", link: "https://bhashini.gov.in" },
    { name: "HACK IITK 2026", type: "Hackathon", location: "IIT Kanpur", date: "Feb 2026", level: "National", link: "https://c3ihub.org" },

    // CORPORATE
    { name: "Flipkart GRiD 8.0", type: "Corporate", location: "India", date: "2026", level: "National", link: "https://dare2compete.com" },
    { name: "L&T CreaTech 2026", type: "Corporate", location: "India", date: "2026", level: "National", link: "https://larsentoubro.com" },
    { name: "Deloitte Hacksplosion", type: "Corporate", location: "India", date: "2026", level: "National", link: "https://www2.deloitte.com" },

    // INSTITUTIONAL
    { name: "Codeversity 2026 (IIT Gandhinagar)", type: "Hackathon", location: "IIT GN", date: "2026", level: "National", link: "https://iitgn.ac.in" },
    { name: "DevQuest (IIT Jodhpur)", type: "Hackathon", location: "IIT Jodhpur", date: "2026", level: "National", link: "https://iitj.ac.in" },
    { name: "Blockchain Hackathon IIT Hyderabad", type: "Hackathon", location: "IIT Hyderabad", date: "2026", level: "National", link: "https://iith.ac.in" }

];

const container = document.getElementById("eventsContainer");
const totalEvents = document.getElementById("totalEvents");
const collegeCount = document.getElementById("collegeCount");
const nationalCount = document.getElementById("nationalCount");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const levelFilter = document.getElementById("levelFilter");

function scrollToEvents() {
    document.getElementById("eventsContainer").scrollIntoView({ behavior: "smooth" });
}

function updateStats() {
    totalEvents.textContent = events.length;
    collegeCount.textContent = events.filter(e => e.level === "College").length;
    nationalCount.textContent = events.filter(e => e.level === "National").length;
}

function displayEvents(eventList) {
    container.innerHTML = "";

    eventList.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("card");

        const badgeClass = event.level === "College" ? "college" : "national";

        card.innerHTML = `
            <span class="badge ${badgeClass}">${event.level}</span>
            <h3>${event.name}</h3>
            <p><strong>Type:</strong> ${event.type}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <a href="${event.link}" target="_blank">Register</a>
        `;

        container.appendChild(card);
    });
}

function filterAndSearch() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedLevel = levelFilter.value;

    const filtered = events.filter(event =>
        event.name.toLowerCase().includes(searchText) &&
        (selectedCategory === "All" || event.type === selectedCategory) &&
        (selectedLevel === "All" || event.level === selectedLevel)
    );

    displayEvents(filtered);
}

searchInput.addEventListener("input", filterAndSearch);
categoryFilter.addEventListener("change", filterAndSearch);
levelFilter.addEventListener("change", filterAndSearch);

updateStats();
displayEvents(events);
