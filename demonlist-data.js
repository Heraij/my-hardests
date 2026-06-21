const DATA = {
    profileName: "Creator+",
    description: "I spent the past 4-5 years of my life playing this silly cube game. :3",
    
    // Added this link parameter for the GD Browser API to fetch your data
    gdUsername: "CreatorPLUS100",

    latestVideo: "https://www.youtube.com/watch?v=Fsy7RC4VagU",
    // YOUR TIME MACHINE LOG: Add entries here whenever you want to lock in a memory!
    statsHistory: [
        {
            date: "Live (Current)",
            isLive: true // This tells the script to fetch the actual live server API data
        },
        {
            date: "Jan 2026 - The Grind Begins",
            stars: 120, moons: 15, demons: 1, cp: 0, coins: 5, userCoins: 12,
            post: "Just beat my first demon layout!! Let's go!"
        },
        {
            date: "June 2025 - Legacy Era",
            stars: 45, moons: 0, demons: 0, cp: 0, coins: 2, userCoins: 3,
            post: "Workin' on a secret project level."
        }
    ],
    
    goals: [
        { text: "Have 10 subscribers on YT", completed: false },
        { text: "Beat Future funk", completed: false },
        { text: "Get a Creator point", completed: false }
    ],

    demonlist: [
        { "level": "Sakupen Egg", "creator": "Sivlol", "difficulty": "Medium Demon", "video": "https://www.youtube.com/watch?v=M61Vqi6ryj8" },
        { "level": "Reanimation", "creator": "Terron", "difficulty": "Medium Demon", "video": "https://www.youtube.com/watch?v=RB8g4CZLik4&list=RDRB8g4CZLik4&start_radio=1" },
        { "level": "Decode", "creator": "Rek3dge", "difficulty": "Easy Demon", "video": "https://www.youtube.com/watch?v=IRTQZZ502J0&list=RDIRTQZZ502J0&start_radio=1" },
        { "level": "Deadlocked", "creator": "RobTop", "difficulty": "Easy Demon", "video": "https://www.youtube.com/watch?v=I3LFTGTIWoI" },
        { "level": "X", "creator": "Triaxis", "difficulty": "Easy Demon", "video": "https://www.youtube.com/watch?v=t_2qpQGNS3A" },
        { "level": "Platinum Adventure", "creator": "Jerry4", "difficulty": "Easy Demon", "video": "https://www.youtube.com/watch?v=DWGGjNnU4CA" },  
        { "level": "Clubstep", "creator": "Robtop", "difficulty": "Easy Demon", "video": "https://www.youtube.com/watch?v=VInQkeec188" },
        { "level": "Speed Racer", "creator": "ZenthicAlpha", "difficulty": "Easy Demon", "video": "https://www.youtube.com/watch?v=R8RsJVKKd8w" },
        { "level": "THE LIGHTNING ROAD", "creator": "timeless real", "difficulty": "Easy Demon", "video": "https://www.youtube.com/watch?v=smwunc7UiHk" },
        { "level": "The Nightmare", "creator": "Jax", "difficulty": "Easy Demon", "video": "https://www.youtube.com/watch?v=i0dlZgqA8ds" }
    ]
};

// Layout setup handler
function initGlobalLayout() {
    document.getElementById('user-name').textContent = DATA.profileName;
    document.getElementById('user-desc').textContent = DATA.description;
    
    const goalsContainer = document.getElementById('goals-container');
    if(goalsContainer) {
        goalsContainer.innerHTML = '';
        DATA.goals.forEach(goal => {
            const statusClass = goal.completed ? 'completed' : 'in-progress';
            const badgeText = goal.completed ? 'Done' : 'Grinding';
            goalsContainer.innerHTML += `
                <div class="goal-item ${statusClass}">
                    <span>${goal.text}</span>
                    <div class="status-badge">${badgeText}</div>
                </div>`;
        });
    }
}

function getYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}
// Layout setup handler
function initGlobalLayout() {
    document.getElementById('user-name').textContent = DATA.profileName;
    document.getElementById('user-desc').textContent = DATA.description;
    
    const goalsContainer = document.getElementById('goals-container');
    if(goalsContainer) {
        goalsContainer.innerHTML = '';
        DATA.goals.forEach(goal => {
            const statusClass = goal.completed ? 'completed' : 'in-progress';
            const badgeText = goal.completed ? 'Done' : 'Grinding';
            goalsContainer.innerHTML += `
                <div class="goal-item ${statusClass}">
                    <span>${goal.text}</span>
                    <div class="status-badge">${badgeText}</div>
                </div>`;
        });
    }

    // Dynamic View Counter Integration
    const counterDiv = document.createElement('div');
    counterDiv.className = 'visitor-counter-badge';
    counterDiv.innerHTML = `Views: <span id="visit-count">...</span>`;
    document.body.appendChild(counterDiv);

    // Creates a unique registry namespace for your site based on your chosen user profile name
    const siteKey = encodeURIComponent(DATA.profileName.replace(/\s+/g, '-').toLowerCase());
    
    fetch(`https://api.countapi.xyz/hit/creator-plus-hub/${siteKey}`)
        .then(res => res.json())
        .then(data => {
            const countEl = document.getElementById('visit-count');
            if(countEl && data.value) {
                countEl.textContent = data.value.toLocaleString();
            }
        })
        .catch(() => {
            // Invisible fail-safe fallback if the external service is overloaded
            const countEl = document.getElementById('visit-count');
            if(countEl) countEl.textContent = "Active";
        });
}
