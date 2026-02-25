const gift = document.getElementById("gift");
const message = document.getElementById("message");
const pug1 = document.getElementById("pug1");
const pug2 = document.getElementById("pug2");
const music = document.getElementById("music");

let opened = false;

gift.addEventListener("click", () => {

    if (opened) return;
    opened = true;

    document.body.classList.add("light-on");

    gift.src = "regalo a.jpg";

    message.classList.add("show");

    pug1.classList.add("show");
    pug2.classList.add("show");

    if (music) {
        music.play().catch(error => {
            console.log("La música no pudo reproducirse:", error);
        });
    }

    for (let i = 0; i < 120; i++) {
        createConfetti();
    }
});

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";

    const colors = ["red", "blue", "yellow", "green", "purple", "orange"];
    confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    confetti.style.animationDuration =
        (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 4000);
}