const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // get random number berween 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

    // console.log(colors[randomNumber]);
})

// console.log(colors);

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
