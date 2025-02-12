const clues = [
    {
        title: "💔 Crime and Punishment ",
        qouts: " 📖 “To go wrong in one’s own way is better than to go right in someone else’s.”",
        text: " A conscience burdened, a heart tremblin...where does one truly confess their sins?",
        choices: ["🔮 A reflection of one’s sins", "🕍 A place where mercy is granted", "📜 A confession written in solitude"],
        answerText: "Diary",
        answer: 2,
        hint: "Words locked in ink hold the weight of redemption.",
        reward: "Breackfast in Bed",
        difficulty: 75
    },
    {
        title: "📖 The Brothers Karamazov ",
        qouts: "📖 What is hell? I maintain that it is the suffering of being unable to love.",
        text: "Love without faith is an empty cup. \nWhere does wisdom reside?",
        choices: ["📚 A place where voices of the past still speak", "🌳 Beneath an ancient, knowing silence", "👐 Cradled within the hands of the seeker"],
        answerText: "Library",
        answer: 0,
        hint: "To seek truth is to turn the page.",
        reward: "A Yes Day",
        difficulty: 85
    },
    {
        title: "🌙 White Nights ",
        qouts: "📖 Happiness does not lie in happiness, but in the achievement of it.",
        text: "A dreamer walks alone, bathed in silver light—what celestial glow calls lovers home?",
        choices: ["🕯️ A fleeting flicker of warmth ", "🌙 A silent companion of the sleepless ", "🏮 A lantern guiding lost souls"],
        answerText: "Moon",
        answer: 1,
        hint: "The poet’s muse, the lover’s hope.",
        reward: "Bubble Bath",
        difficulty: 60
    },
    {
        title: "💬 Notes from Underground ",
        qouts: "📖 Man is sometimes extraordinarily, passionately, in love with suffering.",
        text: "Isolation breeds longing, and yet words can defy the void—what carries messages across distance?",
        choices: ["✉️ Ink-stained confessions that time cannot erase", "🌊 A winding path that carries secrets afar", "🔒 Hidden truths bound in silence"],
        answerText: "A Letter",
        answer: 0,
        hint: "Love, even unspoken, still longs to be read.",
        reward: "Spa Day",
        difficulty: 90
    },
    {

        title: "💖 The Idiot ",
        qouts: "📖 Beauty will save the world.",
        text: " The most beautiful thing in the world is kindness.\nWhere is kindness found?",
        choices: ["😂 In the melody of innocence", "😊 In the warmth of a fleeting moment ", "💞 In both, for kindness knows no boundary"],
        answerText: "Both",
        answer: 2,
        hint: "True beauty is found in the simplest gestures.",
        reward: "Picnic Date",
        difficulty: 70
    },
    {
        title: "🎭 Final Clue",
        qouts: "📖 The darker the night, the brighter the stars, the deeper the grief, the closer is God!",
        text: "If love is eternal, where does it leave its mark?",
        choices: ["💋 A promise left upon trembling lips", "🕰️ A memory that lingers beyond the years", "🌹 In both, for love never truly fades"],
        answerText: "Both",
        answer: 2,
        hint: "Love is more than a moment; it is the past, the present, and the eternal.",
        reward: "Your Wish",
        difficulty: 80
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
    document.getElementById("clue-qouts").innerText = clues[currentClue].qouts;
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
        document.querySelector(".hint_answer").innerText = "Answer: " + clues[currentClue].answerText;
        document.querySelector(".seat-number-large").innerText = clues[currentClue].difficulty + "/100";
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

document.getElementById("download-button").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Valentine's_Day_Gift_Tickets_Printable_Love_Coupon.pdf"; // Path to your PDF
    link.download = "Valentine_Coupons.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});



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
