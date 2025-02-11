const clues = [
    {
        title: "💔 Crime and Punishment ",
        text: " Love is a crime only the heart can judge. \n Where does true confession happen?",
        choices: ["Mirror", "Church", "Diary"],
        answer: 2,
        hint: "Think of where secrets are written, never spoken.",
        reward: "Breackfast in Bed"
    },
    {
        title: "📖 The Brothers Karamazov ",
        text: "Love without faith is an empty cup.'\nWhere does wisdom reside?",
        choices: ["Library", "Under a tree", "In your hands"],
        answer: 0,
        hint: "Where do books whisper their truths?",
        reward: "A Yes Day"
    },
    {
        title: "🌙 White Nights ",
        text: "A dreamer waits for love beneath the stars.'\nFind something that glows in the dark.",
        choices: ["Candle", "Moon", "Lantern"],
        answer: 1,
        hint: "Look to the sky where lovers dream.",
        reward: "Bubble Bath"
    },
    {
        title: "💬 Notes from Underground ",
        text: "A soul in isolation longs for connection.\nWhat carries our messages across the distance?",
        choices: ["A letter", "A river", "A locked chest"],
        answer: 0,
        hint: "In past centuries, lovers poured their hearts into ink.",
        reward: "Spa Day"
    },
    {
        title: "💖 The Idiot ",
        text: " The most beautiful thing in the world is kindness.\nWhere is kindness found?",
        choices: ["A child's laughter", "A stranger's smile", "Both"],
        answer: 2,
        hint: "Kindness is everywhere, but you must open your heart.",
        reward: "Picnic Date"
    },
    {
        title: "🎭 Final Clue",
        text: " The soul is healed by being with children, but love… love is eternal.\nWhere does love leave its mark?",
        choices: ["A kiss", "A memory", "Both"],
        answer: 2,
        hint: "Love is not only felt in the moment but in the echoes of time.",
        reward: "Your Wish"
    }
];

const finalClue = "Congratulations! You've completed all the clues! 💝";

let currentClue = 0;

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Make sure only start screen is visible initially
    hideAllScreens();
    document.getElementById("start-screen").classList.remove("hidden");
    
    // Add event listener to start button
    document.getElementById("start-button").addEventListener("click", startGame);
});

function hideAllScreens() {
    // Hide all main sections
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("game-area").classList.add("hidden");
    document.getElementById("hint-popup").classList.add("hidden");
    document.getElementById("reward-box").classList.add("hidden");
}

function startGame() {
    hideAllScreens();
    document.getElementById("game-area").classList.remove("hidden");
    showClue();



}

function showClue() {
    // Update clue content
    document.getElementById("clue-text").innerText = clues[currentClue].text;
    document.getElementById("clue-title").innerText = clues[currentClue].title;
    document.getElementById("clue-number").innerText = currentClue + 1;

    // Update choice buttons
    const choiceButtons = document.querySelectorAll(".choice-btn");
    choiceButtons.forEach((btn, index) => {
        btn.innerText = clues[currentClue].choices[index];
    });

    // Reset any popups
    document.getElementById("hint-popup").classList.add("hidden");
    document.getElementById("reward-box").classList.add("hidden");
}

function checkAnswer(choice) {
    if (choice === clues[currentClue].answer) {
        // Hide hint popup if it's showing
        document.getElementById("hint-popup").classList.add("hidden");
        
        // Show reward box with animation
        const rewardBox = document.getElementById("reward-box");
        rewardBox.classList.remove("hidden");
        document.querySelector(".coupon-text").innerText = "Good for: " + clues[currentClue].reward;
    } else {
        alert("Incorrect! Try again.");
    }
}

function showHint() {
    const hintPopup = document.getElementById("hint-popup");
    document.getElementById("hint-text").innerText = clues[currentClue].hint;
    
    // Position hint popup in center of screen
    hintPopup.style.position = "fixed";
    hintPopup.style.top = "50%";
    hintPopup.style.left = "50%";
    hintPopup.style.transform = "translate(-50%, -50%)";
    hintPopup.style.zIndex = "1000";
    
    hintPopup.classList.remove("hidden");
}

function showFinal() {
    const final = document.getElementById("final");
    document.getElementById("final").innerText = finalClue;
    
    // Position hint popup in center of screen
    final.style.position = "fixed";
    final.style.top = "50%";
    final.style.left = "50%";
    final.style.transform = "translate(-50%, -50%)";
    final.style.zIndex = "1000";
    
    final.classList.remove("hidden");
}


function closeHint() {
    document.getElementById("hint-popup").classList.add("hidden");
}

function nextClue() {
    if (currentClue < clues.length - 1) {
        currentClue++;
        document.getElementById("reward-box").classList.add("hidden");
        showClue();
    } else {
        // Game is complete
        hideAllScreens();
        document.getElementById("final").classList.remove("hidden");

        // showFinal();
        // alert("Congratulations! You've completed all the clues! 💝");
    }
}

var confettiPlayers = [];

function makeItConfetti() {
  var confetti = document.querySelectorAll('.confetti');
  
  if (!confetti[0].animate) {
    return false;
  }

  for (var i = 0, len = confetti.length; i < len; ++i) {
    var candycorn = confetti[i];
    candycorn.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
    var scale = Math.random() * .7 + .3;
    var player = candycorn.animate([
      { transform: `translate3d(${(i/len*100)}vw,-5vh,0) scale(${scale}) rotate(0turn)`, opacity: scale },
      { transform: `translate3d(${(i/len*100 + 10)}vw,105vh,0) scale(${scale}) rotate(${ Math.random() > .5 ? '' : '-'}2turn)`, opacity: 1 }
    ], {
      duration: Math.random() * 3000 + 4000,
      iterations: Infinity,
      delay: -(Math.random() * 7000)
    });
    
    confettiPlayers.push(player);
  }
}

makeItConfetti();
onChange({currentTarget: {value: 'leaves'}})

document.getElementById('type').addEventListener('change', onChange)

function onChange(e) {
  document.body.setAttribute('data-type', e.currentTarget.value);
  confettiPlayers.forEach(player => player.playbackRate = e.currentTarget.value === 'bookmarks' ? 2 : 1);
}