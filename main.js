const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const millicecond = document.querySelector('.millisecond')

const startBrn = document.querySelector('.start')
const stopBrn = document.querySelector('.stop')
const resetBrn = document.querySelector('.reset')

const saveBlock = document.querySelector('.save')


let mls = Number(millicecond.textContent)
let sec = Number(second.textContent)
let min = Number(minute.textContent)

let interval


const saveTime = []

function startTime() {
    mls++
    if (mls <= 10) {
        millicecond.innerHTML = '0' + mls
    } if (mls > 10 && mls < 99) {
        millicecond.innerHTML = mls
    }
    if (mls > 99) {
        mls = '00'
        sec++
    }

    if (sec <= 9) {
        second.innerHTML = '0' + sec
    } if (sec >= 10 && sec < 59) {
        second.innerHTML = sec
    }
    if (sec > 59) {
        min++
        sec ='00'
    }

    if (min < 10) {
        minute.innerHTML = '0' + min
    } else {
        minute.innerHTML = min
    }
    interval = setTimeout(startTime, 9)
}


startBrn.addEventListener('click', startTime, { once: true })

stopBrn.addEventListener('click', () => {
    clearTimeout(interval)
    startBrn.addEventListener('click', startTime, { once: true })
    saveTime.unshift([minute.textContent, second.textContent, millicecond.textContent])

    if (saveTime.length > 2) {
        saveTime.pop()
    }

    saveBlock.childNodes[1].innerHTML = '1) ' + saveTime[0][0] + ' : ' + saveTime[0][1] + ' . ' + saveTime[0][2]
    if (saveTime[1]) {
        saveBlock.childNodes[3].innerHTML = '2) ' + saveTime[1][0] + ' : ' + saveTime[1][1] + ' . ' + saveTime[1][2]
    }
})

resetBrn.addEventListener('click', () => {
    clearTimeout(interval)
    millicecond.textContent = '00'
    second.textContent = '00'
    minute.textContent = '00'

    mls = 0
    sec = 0
    min = 0

    startBrn.addEventListener('click', startTime, { once: true })
})


















