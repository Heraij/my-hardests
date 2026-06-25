const DATA = {
    profileName: "Creator+",
    description: "I spent the past 4-5 years of my life playing this silly cube game. :3",
    
    // Added this link parameter for the GD Browser API to fetch your data
    gdUsername: "CreatorPLUS100",

    latestVideo: "https://www.youtube.com/watch?v=nXQIFtTD6kM&t=6s",
    
    goals: [
        { text: "Have 10 subscribers on YT", completed: false },
        { text: "Beat a Hard demon - Jun 25 2026, completed: true },
        { text: "Get a Creator point", completed: false }
    ],

    demonlist: [
        { 
            "level": "Nine Circles", 
            "creator": "Zobros", 
            "difficulty": "Hard Demon", 
            "video": "https://youtu.be/aTObXPHFEPw",
            "enjoyment": "7/10",
            "attempts": 778,
            "dateAdded": "June 25, 2026",
            "thoughts": "It just kept getting worse and worse, first 86%, then 87%,,, and 87% once more."
        },
        { 
            "level": "Sakupen Egg", 
            "creator": "Sivlol", 
            "difficulty": "Medium Demon", 
            "video": "https://www.youtube.com/watch?v=nXQIFtTD6kM",
            "enjoyment": "9/10",
            "attempts": 650,
            "dateAdded": "June 21, 2026",
            "thoughts": "Actually felt alot easier then Reanimation, but still decided to put it here cause it took more attempts. Beat sub 1h!"
        },
        { 
            "level": "Reanimation", 
            "creator": "Terron", 
            "difficulty": "Medium Demon", 
            "video": "https://youtu.be/QfCG_o9-LPE",
            "enjoyment": "10/10",
            "attempts": 119,
            "dateAdded": "June 22, 2026",
            "thoughts": "Im very pleased I didn't die to the ending, still took a bit to rebeat. Original attempts lost, but about 300-400ish"
        },
        { 
            "level": "Decode", 
            "creator": "Rek3dge", 
            "difficulty": "Easy Demon", 
            "video": "https://www.youtube.com/watch?v=-Na7CLoDT9o",
            "enjoyment": "7/10",
            "attempts": 1425,
            "dateAdded": "June 21, 2026",
            "thoughts": "Absolutely not my cup of tea, fun level - 90+% x3 is painful though."
        },
        { 
            "level": "Deadlocked", 
            "creator": "Robtop", 
            "difficulty": "Easy Demon", 
            "video": "https://www.youtube.com/watch?v=IRTQZZ502J0",
            "enjoyment": "6/10",
            "attempts": 0,
            "dateAdded": "January 1, 0000",
            "thoughts": "Still haven't rebeat this one, going to do it in a bit."
        },
        { 
            "level": "X", 
            "creator": "Triaxis", 
            "difficulty": "Easy Demon", 
            "video": "https://youtu.be/GpN0Mfy5t8s",
            "enjoyment": "6/10",
            "attempts": 163,
            "dateAdded": "June 23, 2026",
            "thoughts": "Alot harder then I ever wanted to do this, bug on start of dual is bad."
        },
        { 
            "level": "Platinum Adventure", 
            "creator": "Jerry4", 
            "difficulty": "Easy Demon", 
            "video": "https://www.youtube.com/watch?v=IRTQZZ502J0",
            "enjoyment": "0/10",
            "attempts": 0,
            "dateAdded": "January 1, 0000",
            "thoughts": "Still haven't rebeat this one, going to do it in a bit."
        },
        { 
            "level": "Clubstep", 
            "creator": "Robtop", 
            "difficulty": "Easy Demon", 
            "video": "https://www.youtube.com/watch?v=IRTQZZ502J0",
            "enjoyment": "0/10",
            "attempts": 0,
            "dateAdded": "January 1, 0000",
            "thoughts": "Still haven't rebeat this one, going to do it in a bit."
        },
        { 
            "level": "Speed Racer", 
            "creator": "ZenthicAlpha", 
            "difficulty": "Easy Demon", 
            "video": "https://www.youtube.com/watch?v=IRTQZZ502J0",
            "enjoyment": "0/10",
            "attempts": 0,
            "dateAdded": "January 1, 0000",
            "thoughts": "Still haven't rebeat this one, going to do it in a bit."
        },
        { 
            "level": "THE LIGHTNING ROAD", 
            "creator": "timeless real", 
            "difficulty": "Easy Demon", 
            "video": "https://www.youtube.com/watch?v=IRTQZZ502J0",
            "enjoyment": "0/10",
            "attempts": 0,
            "dateAdded": "January 1, 0000",
            "thoughts": "Still haven't rebeat this one, going to do it in a bit."
        },
        { 
            "level": "The Nightmare", 
            "creator": "Jax", 
            "difficulty": "Easy Demon", 
            "video": "https://www.youtube.com/watch?v=IRTQZZ502J0",
            "enjoyment": "0/10",
            "attempts": 0,
            "dateAdded": "January 1, 0000",
            "thoughts": "Still haven't rebeat this one, going to do it in a bit."
        }
    ]
};

// Layout setup handler (Cleaned & Combined)
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
            const countEl = document.getElementById('visit-count');
            if(countEl) countEl.textContent = "Active";
        });
}

function getYouTubeId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}
