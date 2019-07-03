let mousePosition = {
    x: 0,
    y: 0
}
let drawId;

function getRandomNumber(min,max){
    return Math.round(Math.random() * (max - min + 1)) + min;
}
window.addEventListener('mousemove', function (mouseEvent){
    mousePosition.x = mouseEvent.pageX
    //console.log(e.pageX)
    mousePosition.y = mouseEvent.pageY
    //console.log(mousePosition.x ,mousePosition.y)
})

function draw() {
    return setInterval(function() {
      const container = document.getElementById('wrap');
      const color = `background:rgb(${getRandomNumber(0, 255)},${getRandomNumber(
        1,255)}, ${getRandomNumber(0, 255)});`;
        
      const ballSize = getRandomNumber(15, 80);
      //I made the balls bigger so that they were more visible and would appear further from the cursor some of the time
      const size = `height:${ballSize * 3}px; width:${ballSize/4}px;`;
      const left = `left:${getRandomNumber(
        mousePosition.x - ballSize,
        mousePosition.x
      )}px;`;
      const top = `top:${getRandomNumber(
        mousePosition.y - ballSize,
        mousePosition.y
      )}px;`;
      const style = `${left}${top}${color}${size}`;
  
      const ball = document.createElement('div');
      ball.classList.add('ball');
      ball.style = style;
  
      ball.addEventListener('animationend', function(e) {
        e.target.remove();
      });
  
      container.appendChild(ball);
    }, 50);
  }
  window.addEventListener('mouseover', function() {
    drawId = draw();
  });
  window.addEventListener('mouseout', function() {
    clearInterval(drawId);
  });