document.addEventListener("DOMContentLoaded", function() {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let color = `rgb(${r}, ${g}, ${b})`;
        let hex = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = color;
        hexCode.textContent = hex.toUpperCase();
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    updateColor();
});
