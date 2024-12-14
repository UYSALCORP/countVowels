const countVowels = document.querySelector(".btn")

countVowels.addEventListener("click", ()=> {
    const textArea = document.getElementById("text").value;
    const vowels = ["a","e","ı","i","o","ö","u","ü"]
    let vowelCount = 0;
    const lowerText = textArea.toLowerCase();
    for (let i=0; i< textArea.length; i++) {
        if(vowels.includes(lowerText[i])){
            vowelCount ++;
            document.querySelector(".number").textContent = vowelCount;
            document.querySelector(".redText").textContent = `${textArea}`
        }
    }
})