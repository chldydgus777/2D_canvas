var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

// x축, 값이 커질수록 왼쪽으로 이동 
var x = canvas.width/60;
// y축, 값이 작아질수록 위로 이동
var y = canvas.height-500;
var dx = 3;
var dy = 3;

// 공 드로잉
function drawBall() {
    // 새로운 경로 생성
    ctx.beginPath();
    // 사각형을 그림 (x축, y축, width, height)
    ctx.rect(x, y, 15, 15);
    // fill color 
    ctx.fillStyle = "green";
    // 내부가 채워진 도형
    ctx.fill();
    // 시작 부분과 연결된 직선 추가
    ctx.closePath();
    // 공 위치에서 y값이 0보다 작은경우 dy를 음수로 변경 [상단 튕김]
    if(y + dy < 0) {
        dy = -dy;
    }
    // 공 위치에서 y값이 Canvas 높이보다 클 때 dy값을 음수로 변경 [하단 튕김]
    if(y + dy > canvas.height) {
        dy = -dy;
    }
    // 공 위치에서 x값이 0보다 작은경우 dx를 음수로 변경 [좌측 튕김]
    if(x + dx < 0) {
        dx = -dx;
    }
    // 공 위치에서 x값이 Canvas 높이보다 클 때 dx값을 음수로 변경 [우측 튕김]
    if(x + dx > canvas.width) {
        dx = -dx;
    }
}
// 드로잉
function draw() {
    // 흔적 (이전프레임)Rect 부분을 지우는 코드
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;     

}
// 10ms 무한 호출
setInterval(draw, 10);
