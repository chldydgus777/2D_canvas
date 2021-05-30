//과제 1

// canvas 요소 찾기
let canvas = document.getElementById("Canvas");
// canvas에서 컨텍스트 얻기
let ctx = canvas.getContext("2d");

// x축, 값이 커질수록 오른쪽으로 이동 
let Ball_x = 0;
// y축, 값이 커질수록 아래로 이동
let Ball_y = 0;
// x축으로 기울며 속도 빨라짐
let Ballx_speed = 2;
// y축으로 기울며 속도 빨라짐
let Bally_speed = 2;


// 시작 
let start_button = document.getElementById("start_btn");
start_button.addEventListener("click", progress,)
// 정지
// const stop_button = document.getElementById("stop_btn");
// stop_button.addEventListener("click", function(){
//     stop_button.removeEventListener("click", progress)
// })


function progress() {

    const start_button = document.getElementById("start_btn");
    start_button.disabled = true;

    // 일시정지
    let pause_button = document.getElementById("pause_btn");
    pause_button.addEventListener("click", stopinterval)

    // 공 드로잉
    const drawBall = () => {
        // 새로운 경로 생성
        ctx.beginPath();
        // 사각형을 그림 (x축, y축, width, height)
        ctx.rect(Ball_x, Ball_y, 15, 15);
        // fill color 
        ctx.fillStyle = "black";
        // 내부가 채워진 도형
        ctx.fill();
        // 시작 부분과 연결된 직선 추가
        ctx.closePath();
        // 공 위치에서 Ball_y값이 0보다 작은경우, Ball_y값이 Canvas 높이보다 클 때 Bally_speed를 음수로 변경 [상단 튕김]
        // -15 는 공이 경계를 넘어감을 방지 , OR 연산자 ||
        if(Ball_y + Bally_speed < 0 || Ball_y + Bally_speed > canvas.height-15) {
            Bally_speed = -Bally_speed;
        }
        // 공 위치에서 Ball_x값이 0보다 작은경우, Canvas 높이보다 클 때 Ballx_speed를 음수로 변경 [좌측 튕김]
        // -15 는 공이 경계를 넘어감을 방지
        if(Ball_x + Ballx_speed < 0 || Ball_x + Ballx_speed > canvas.width-15) {
            Ballx_speed = -Ballx_speed;
        }
    }

    // 드로잉
    function draw() {
        // 흔적 (이전프레임)Rect 부분을 지우는 코드
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        // Ball_x, Ball_y 축에 Ballx_speed,Bally_speed를 더해줘서 Ball_x, Ball_y 갱신
        Ball_x += Ballx_speed;
        Ball_y += Bally_speed;  
    }


    // 호출 중지 [일시정지]
    function stopinterval() {
        clearInterval(refreshIntervalId)
        if (pause_button.innerHTML == "일시정지") {
        pause_button.innerHTML = "재개하기"
        pause_button.addEventListener("click",progress)
    } else if (pause_button.innerHTML == "재개하기"){
        pause_button.innerHTML = "일시정지"
    }
    }

    // 10ms 무한 호출
    const refreshIntervalId = setInterval(draw, 10);

    // 복제
    const copy_button = document.getElementById("copy_btn");
    copy_button.addEventListener("click",make_Ball);
    copy_button.removeEventListener("click",drawBall);



}
function make_Ball() {
    // 시작
    const start_button = document.getElementById("start_btn");
    start_button.disabled = true;

    // 일시정지
    let pause_button = document.getElementById("pause_btn");
    pause_button.addEventListener("click",new_stopinterval)

        const new_drawBall = () => {
        
        // ↖ 
        // Ball_x -= Ballx_speed;
        // Ball_y -= Bally_speed;  
        ctx.beginPath();
        ctx.rect(Ball_x-20, Ball_y-20, 15, 15);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        // ↙ 
        // Ball_x -= Ballx_speed;
        // Ball_y += Bally_speed;  
        ctx.beginPath();
        ctx.rect(Ball_x-20, Ball_y+20, 15, 15);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        
        //↘ 
        // Ball_x += Ballx_speed;
        // Ball_y += Bally_speed;  
        ctx.beginPath();
        ctx.rect(Ball_x+20, Ball_y+20, 15, 15);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.closePath();

        // ↗ 
        // Ball_x += Ballx_speed;
        // Ball_y -= Bally_speed;  
        ctx.beginPath();
        ctx.rect(Ball_x+20, Ball_y-20, 15, 15);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
        if(Ball_y + Bally_speed < 0 || Ball_y + Bally_speed > canvas.height-35) {
            Bally_speed = -Bally_speed;
        }
        if(Ball_x + Ballx_speed < 0 || Ball_x + Ballx_speed > canvas.width-35) {
            Ballx_speed = -Ballx_speed;
        }}
    
            // 복제 드로잉
            function new_draw() {
                // 흔적 (이전프레임)Rect 부분을 지우는 코드
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                new_drawBall();
                // Ball_x, Ball_y 축에 Ballx_speed,Bally_speed를 더해줘서 Ball_x, Ball_y 갱신
                Ball_x += Ballx_speed;
                Ball_y += Bally_speed;
            }
        // 호출 중지 [일시정지]
        function new_stopinterval() {
        clearInterval(new_refreshInterval)
    }
        // 10ms 무한 호출   
        const new_refreshInterval = setInterval(new_draw, 10);
    }


