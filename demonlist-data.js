const DATA = {
    profileName: "Creator+",
    description: "Welcome to my personal hub. Tracking my Geometry Dash progression, hardest completions, and content creation milestones all in one place.",
    
    goals: [
        { text: "Complete my first Hard Demon", completed: false },
        { text: "Reach 15 total Demon completions", completed: false },
        { text: "Record completion proofs for future levels", completed: true }
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
                    🎲 <span>${goal.text}</span>
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
