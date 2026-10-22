# JavaScript & DOM Challenge: Funny Counter 🎯

**Level:** Beginner to intermediate
**Technology:** HTML, CSS, Vanilla JavaScript
**Estimated time:** 2–3 hours
**Project type:** Hands-on coding exercise

## Problem statement

You have been given a beautifully designed web application called **Funny Counter**. The HTML and CSS are already provided, but the JavaScript functionality is incomplete.

Your task is to bring the application to life using JavaScript and DOM manipulation.

Users should be able to increase and decrease a counter, reset it, complete number-based challenges, earn points, and receive feedback based on their actions.

You must implement the functionality using clean, readable JavaScript without changing the existing visual design.

### Learning objectives

By completing this project, you should be able to:

- Select HTML elements using the DOM.
- Read and update element content.
- Handle user interactions using event listeners.
- Manage application state using JavaScript variables.
- Write reusable functions.
- Implement conditions and validation.
- Update the interface dynamically.
- Debug and test interactive web applications.

### Project rules

1. Use vanilla JavaScript. Do not use jQuery or a JavaScript framework.
2. Keep all JavaScript in `app.js`.
3. Do not use inline HTML event handlers such as `onclick`.
4. Avoid duplicating logic when a reusable function would work.
5. Do not modify the supplied HTML/CSS unless instructed.
6. Test every milestone before moving to the next one.

---

## Milestone 1 — Connect JavaScript to the DOM

**Concepts:** `querySelector`, `getElementById`, `textContent`

Your first task is to connect JavaScript to the existing HTML elements.

Requirements:

1. Select the counter display.
2. Select the Plus, Minus, and Reset buttons.
3. Select the score, streak, and completed-challenge displays.
4. Select the challenge target and feedback elements.
5. Log the selected elements to the console.
6. Confirm that no selector returns `null`.

**Success criteria:** You can access every required element from JavaScript without errors.

## Milestone 2 — Build the basic counter

**Concepts:** Variables, functions, arithmetic, `textContent`

Create a variable to represent the current counter value.

Requirements:

1. The counter starts at `0`.
2. Clicking Plus increases the value by one.
3. Clicking Minus decreases the value by one.
4. The displayed number updates immediately.
5. The counter cannot go below `0`.
6. The counter cannot exceed `100`.
7. Reset returns the counter to `0`.

**Success criteria:** All counter buttons work correctly, including at both boundaries.

## Milestone 3 — Handle events properly

**Concepts:** `addEventListener`, callback functions

Connect the buttons to their respective functions using event listeners.

Requirements:

1. Register a click listener for each button.
2. Keep event-handling logic separate from display-update logic where appropriate.
3. Disable Minus when the counter is `0`.
4. Disable Plus when the counter is `100`.
5. Re-enable buttons when the counter moves away from a boundary.

**Success criteria:** Buttons respond correctly without inline event handlers or page reloads.

## Milestone 4 — Display useful feedback

**Concepts:** Conditions, DOM updates, template literals

Make the application respond to student actions.

Requirements:

1. Display a message after the counter changes.
2. Display an appropriate message when the counter reaches `100`.
3. Display a message when the counter is reset.
4. Show encouraging feedback when the counter matches the challenge target.
5. Show helpful feedback when the target has not been reached.

**Success criteria:** Messages reflect the application's current state rather than showing the same text every time.

## Milestone 5 — Implement the challenge

**Concepts:** `Math.random`, `Math.floor`, comparisons, Boolean variables

The application should give the student a target number between `10` and `100`.

Requirements:

1. Generate a random target.
2. Display the target on the page.
3. Allow the student to use the counter to reach that target.
4. When the student clicks Check My Answer, compare the counter with the target.
5. If the values match, mark the challenge as completed.
6. If the counter is too low, tell the student how many steps remain.
7. If the counter is too high, tell the student how many steps to move back.
8. Prevent the same challenge from being rewarded more than once.
9. Provide a New Challenge button that creates a fresh target.

**Success criteria:** The challenge works for different target values and correctly handles both successful and unsuccessful attempts.

## Milestone 6 — Add scoring and streaks

**Concepts:** State management, arithmetic, conditional logic

Implement a simple reward system.

Requirements:

1. Award `10` points for each completed challenge.
2. Increase the completed-challenge count after a win.
3. Increase the winning streak after a win.
4. Reset the current streak after an incorrect answer is submitted.
5. Update all statistics on the page immediately.
6. Do not award duplicate points for the same completed challenge.

**Success criteria:** The displayed score, streak, and completed count remain consistent with the game state.

## Milestone 7 — Add visual feedback

**Concepts:** DOM classes, CSS integration, element creation

Make the app feel responsive and enjoyable.

Requirements:

1. Trigger the existing number animation when the counter changes.
2. Apply appropriate success and error classes to feedback messages.
3. Create a small confetti effect after a successful challenge.
4. Remove temporary confetti elements after their animation ends.
5. Ensure animations do not interfere with counter functionality.

**Success criteria:** The interface responds visually to important user actions, without leaving unnecessary elements in the DOM.

## Final testing checklist

Before submitting, verify the following:

- [ ] The counter starts at zero.
- [ ] The counter cannot exceed its permitted range.
- [ ] All buttons work without refreshing the page.
- [ ] Reset clears the counter without incorrectly awarding points.
- [ ] Random targets stay within the specified range.
- [ ] Correct answers earn exactly 10 points.
- [ ] Incorrect answers do not earn points.
- [ ] A completed challenge cannot be rewarded twice.
- [ ] The streak updates correctly.
- [ ] A new challenge resets the challenge-specific state.
- [ ] The browser console has no errors.
- [ ] The application works on a narrow mobile screen.

## Optional bonus challenges

After completing the core requirements:

1. Save the best score using `localStorage`.
2. Add a keyboard shortcut for increasing the counter.
3. Add a progress bar showing the distance to the target.
4. Support counting in steps of 2, 5, or 10.
5. Add a difficulty selector that changes the target range.

**Submission:** Provide the completed `app.js` file and a short explanation of how you managed state, attached event listeners, and prevented duplicate rewards.

**Assessment principle:** Correct functionality, clear reasoning, readable code, and proper DOM manipulation matter more than writing the fewest lines of code.
