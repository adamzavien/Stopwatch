// DOM element for displaying the timer
const display = document.getElementById("display");

// Timer variables
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

// Start the timer
function start() {
    if (!isRunning) {
        // Set the start time to the current time minus elapsed time
        startTime = Date.now() - elapsedTime;

        // Set up a timer interval to update the display every 10 milliseconds
        timer = setInterval(update, 10);

        // Update running status
        isRunning = true;
    }
}

// Stop the timer
function stop() {
    if (isRunning) {
        // Clear the timer interval
        clearInterval(timer);

        // Update elapsed time
        elapsedTime = Date.now() - startTime;

        // Update running status
        isRunning = false;
    }
}

// Reset the timer
function reset() {
    // Clear the timer interval
    clearInterval(timer);

    // Reset timer variables
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    // Set display to initial value
    display.textContent = "00:00:00:00";
}

// Update the display with the current elapsed time
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Calculate hours, minutes, seconds, and milliseconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    // Format single-digit values with leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    // Update the display with formatted time
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
