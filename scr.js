let hour = document.getElementById('hourhand')
let minute = document.getElementById('minutehand')
let second = document.getElementById('secondhand')
second.style.transformOrigin= "50% 50%"
minute.style.transformOrigin= "50% 50%"
hour.style.transformOrigin= "50% 50%"
let deg = 6
function clock(){
    second.style.transform="rotate("+deg/100+"deg)"
    minute.style.transform="rotate("+deg/6000+"deg)"
    hour.style.transform="rotate("+deg/360000+"deg)"
    deg+=6
    setTimeout("clock()",1)
}
clock()