const words = "WordsAreSprialing";

const ANIMATION_DURATION = 3000; 

function createElements(offset) {
    const characters = words.split("");
    characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

        if (offset >= 0) {
            document.getElementById("spiral").appendChild(div);
        } else {
            document.getElementById("spiral2").appendChild(div);
        }
    });
}

createElements(0);
createElements(-1 * (ANIMATION_DURATION / 2));