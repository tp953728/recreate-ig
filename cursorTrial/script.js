const cursorRing = document.getElementById("cursor-ring");
document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
        cursorRing.style.left = `${e.clientX}px`;
        cursorRing.style.top = `${e.clientY}px`
    })
})

const toggleCursor = () => {
    cursorRing.classList.toggle('active');
}
document.addEventListener("mousedown", toggleCursor);
document.addEventListener("mouseup", toggleCursor);