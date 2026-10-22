"use strict";
import {} from './utils/helpers.js';

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Select DOM elements
  const countDisplay = document.getElementById("count");
  const numberDisplay = document.getElementById("numberDisplay");
  const increaseBtn = document.getElementById("increaseBtn");
  const decreaseBtn = document.getElementById("decreaseBtn");
  const resetBtn = document.getElementById("resetBtn");

  const scoreDisplay = document.getElementById("score");
  const streakDisplay = document.getElementById("streak");
  const completedDisplay = document.getElementById("completed");

  const targetNumber = document.getElementById("targetNumber");
  const targetHint = document.getElementById("targetHint");
  const counterFeedback = document.getElementById("counterFeedback");
  const challengeFeedback = document.getElementById("challengeFeedback");

  const checkBtn = document.getElementById("checkBtn");
  const newChallengeBtn = document.getElementById("newChallengeBtn");

  const progressText = document.getElementById("progressText");
  const progressTrack = document.getElementById("progressTrack");
  const progressFill = document.getElementById("progressFill");
  const celebration = document.getElementById("celebration");

  console.log("DOM elements selected successfully!");

  // 2. Application variables
  let count = 0;
  let score = 0;
  let streak = 0;
  let completed = 0;
  let target = generateTarget();
  let challengeCompleted = false;

  // Generate random target from 10 to 100
  function generateTarget() {
    return Math.floor(Math.random() * 91) + 10;
  }

  // 3. Update counter, statistics and progress
  function updateDisplay() {
    countDisplay.textContent = count;
    scoreDisplay.textContent = score;
    streakDisplay.innerHTML = `${streak} <small>in a row</small>`;
    completedDisplay.textContent = completed;
    targetNumber.textContent = target;

    decreaseBtn.disabled = count <= 0;
    increaseBtn.disabled = count >= 100;
    checkBtn.disabled = challengeCompleted;

    const percentage = Math.min(
      100,
      Math.round((count / target) * 100)
    );

    progressText.textContent = `${percentage}% there`;
    progressFill.style.width = `${percentage}%`;
    progressTrack.setAttribute("aria-valuenow", percentage);

    if (count < target) {
      targetHint.textContent =
        `${target - count} steps to go. Keep counting!`;
    } else if (count === target) {
      targetHint.textContent = "Perfect! You reached the target.";
    } else {
      targetHint.textContent =
        `${count - target} steps above the target.`;
    }
  }

  // 4. Show feedback messages
  function showFeedback(element, message, type = "") {
    element.textContent = message;

    element.classList.remove(
      "success",
      "error",
      "feedback-success",
      "feedback-error"
    );

    if (type === "success") {
      element.classList.add("success", "feedback-success");
    } else if (type === "error") {
      element.classList.add("error", "feedback-error");
    }
  }

  // 5. Animate counter
  function animateNumber() {
    numberDisplay.classList.remove("pop");
    void numberDisplay.offsetWidth;
    numberDisplay.classList.add("pop");
  }

  // 6. Increase or decrease counter
  function changeCount(amount) {
    const previousCount = count;

    count = Math.max(0, Math.min(100, count + amount));

    if (count === previousCount) return;

    updateDisplay();
    animateNumber();

    if (count === target) {
      showFeedback(
        counterFeedback,
        "Target reached! Check your answer to earn points.",
        "success"
      );
    } else if (count === 100) {
      showFeedback(
        counterFeedback,
        "You reached the maximum of 100!",
        "success"
      );
    } else {
      showFeedback(
        counterFeedback,
        `Your counter is now ${count}.`
      );
    }

    if (!challengeCompleted) {
      if (count < target) {
        showFeedback(
          challengeFeedback,
          `${target - count} more steps to go.`
        );
      } else if (count === target) {
        showFeedback(
          challengeFeedback,
          "Great job! Click Check My Answer.",
          "success"
        );
      } else {
        showFeedback(
          challengeFeedback,
          `You are ${count - target} over. Count back down.`
        );
      }
    }
  }

  // 7. Reset counter
  function resetCounter() {
    count = 0;

    updateDisplay();
    animateNumber();

    showFeedback(
      counterFeedback,
      "Counter reset to zero. Start counting again!"
    );

    if (!challengeCompleted) {
      showFeedback(
        challengeFeedback,
        "Reach your target to complete the challenge."
      );
    }
  }

  // 8. Confetti effect
  function createConfetti() {
    const colors = [
      "#8b5cf6",
      "#f59e0b",
      "#10b981",
      "#ec4899",
      "#38bdf8"
    ];

    for (let i = 0; i < 24; i++) {
      const piece = document.createElement("span");

      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[i % colors.length];
      piece.style.animationDelay = `${Math.random() * 0.4}s`;

      piece.addEventListener(
        "animationend",
        () => piece.remove(),
        { once: true }
      );

      celebration.appendChild(piece);
    }
  }

  // 9. Check challenge answer
  function checkAnswer() {
    // Prevent duplicate rewards
    if (challengeCompleted) {
      showFeedback(
        challengeFeedback,
        "Already completed! Get a new challenge."
      );
      return;
    }

    if (count === target) {
      challengeCompleted = true;

      score += 10;
      streak++;
      completed++;

      updateDisplay();

      showFeedback(
        challengeFeedback,
        "Correct answer! You earned 10 points!",
        "success"
      );

      showFeedback(
        counterFeedback,
        "Challenge completed successfully!",
        "success"
      );

      createConfetti();
    } else {
      streak = 0;
      updateDisplay();

      if (count < target) {
        showFeedback(
          challengeFeedback,
          `Too low! Increase your counter by ${target - count}.`,
          "error"
        );
      } else {
        showFeedback(
          challengeFeedback,
          `Too high! Decrease your counter by ${count - target}.`,
          "error"
        );
      }
    }
  }

  // 10. Generate a new challenge
  function newChallenge() {
    target = generateTarget();
    challengeCompleted = false;

    updateDisplay();

    showFeedback(
      challengeFeedback,
      "New challenge! Try to reach the target."
    );

    showFeedback(
      counterFeedback,
      `Your new target is ${target}.`
    );
  }

  // 11. Attach event listeners
  increaseBtn.addEventListener("click", () => {
    changeCount(1);
  });

  decreaseBtn.addEventListener("click", () => {
    changeCount(-1);
  });

  resetBtn.addEventListener("click", resetCounter);

  checkBtn.addEventListener("click", checkAnswer);

  newChallengeBtn.addEventListener("click", newChallenge);

  // Initialize application
  updateDisplay();
});
