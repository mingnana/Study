// 1~100까지의 합계
var sum = 0; // 누적할 값
var i = 1;  // 초기화

// while문은 초기값, 조건식, 증감식이 따로 떨어져 있으므로 for문에 비해 반복횟수를 
// 가지고 루핑을 한다면 오히려 가독성이 떨어짐
// 따라서, while문은 무한루프 전용으로 사용한다.
// while문은 조건식이 앞에 있기 때문에 false일경우 작동x
while(i<=100){
    sum += i;   // 복합대입연산자를 이용하여 값을 누적하고 있다.
    document.write(sum+", "+i+"<br/>");
    i++;
}
document.write("1~ "+(i-1)+"까지의 합 : "+sum);
