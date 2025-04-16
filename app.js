const status = document.getElementById("status");

function logAction(action) {
    console.log("Simulating: " + action);
    status.textContent = action;
}

function simulateBehavior() {
    setInterval(() => {
        setTimeout(() => logAction("Liking"), Math.random() * 3000 + 2000);
        setTimeout(() => logAction("Commenting"), Math.random() * 3000 + 1000);
        setTimeout(() => logAction("Viewing"), Math.random() * 3000 + 1500);
    }, 8000);
}

simulateBehavior();
