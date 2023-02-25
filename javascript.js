let button = document.getElementById("increment-btn")
let increment1 = 0
let countEl = document.getElementById("count-el")
let clicked = false
let errorMes = document.getElementById("error")
let secondsset = 10


function fullReset() {
    location.reload()
}

function calculationOfCPM() {
    document.getElementById("increment-btn").disabled = true;
    var finalScore = document.getElementById("count-el").innerText / (secondsset + 1)
    document.getElementById("finalCPM").innerText = "Your CPS - " + finalScore.toFixed(2)

    setInterval(() => {
        
    }, 5000);
}

function level1Set() {
    secondsset = secondsset + 9
    button.innerText = " Click Here to Start\nLevel 1"
    clicked = true
}

function level2Set() {
    secondsset = secondsset - 1
    button.innerText = " Click Here to Start\nLevel 2"
    clicked = true
}
function level3Set() {
    secondsset = secondsset - 6
    button.innerText = " Click Here to Start\nLevel 3"
    clicked = true
}

function start() {

    if (clicked) {
        increment()
    }

    if (increment1 < 1) {

        document.getElementById("increment-btn").disabled = true;
        errorMes.innerText = "Please Select a Level!"
        setTimeout(() => {
            errorMes.innerText = ""
            document.getElementById("increment-btn").disabled = false;
        }, 5000)
    }
}

function increment() {
    document.getElementById("level1").disabled = true
    document.getElementById("level2").disabled = true
    document.getElementById("level3").disabled = true
    console.log(clicked)

            if (increment1 <= 1) {
                timer()
            }
            increment1 += 1
            countEl.innerText = increment1
        }


function timer() {
    var seconds = secondsset
    var counter = setInterval(function() {
        document.getElementById("increment-btn").innerHTML = seconds
        seconds--
        if (seconds < 0) {
            clearInterval(counter)
            calculationOfCPM()
        }
    }, 1000)

}
