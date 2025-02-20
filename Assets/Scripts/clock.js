const secondHand = document.querySelector(".secondHand");
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");


const calcDegrees = (time, max) => (time / max) * 360;

function updateClock() {
  
  const currentTime = new Date();

  const secondHandDegrees = calcDegrees(currentTime.getSeconds(), 60);
  const minuteHandDegrees = calcDegrees(currentTime.getMinutes(), 60);
  const hourHandDegrees = calcDegrees(
    currentTime.getHours() * 60 + currentTime.getMinutes(),
    720 
  );
  console.log("Seconds hand "+currentTime.getSeconds())
  console.log("mins Hand "+currentTime.getMinutes());
  console.log("Hour Hand "+hourHandDegrees);
  
  secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
}

setInterval(updateClock, 1000);


