const getColor = ()=>{
    // Hex code
    const RandomNumber  = Math.floor(Math.random() * 16777215);
    const randomCode = "#" +RandomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
}

//Event Call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//Initial Call
getColor();