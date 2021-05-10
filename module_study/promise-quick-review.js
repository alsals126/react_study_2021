/*
// 프라미스 객체 생성하며 바로 함수 전달 (해당 함수 내부에서 비동기 작업 수행)
let promise = new Promise(function(resolve, reject) {
    // 프라미스가 만들어지면 전달한 함수는 자동으로 실행됨
    // ... 비동기 작업을 수행하는 코드 작성 ...
    // 여기서는 1초 뒤에 결괏값("done")을 전달하며 resolve 함수를 호출하여 작업이 성공적으로 끝났음을 알림
    setTimeout(() => resolve("done"), 1000);
});

// resolve 함수 호출 시 then 메서드로 전달한 첫 번째 함수가 실행되며 결과를 전달받음
promise.then(v => console.log(v)); // "done" 출력
*/

// 프로미스를 자꾸 하는 이유는 then을 쓰기 위해
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then(function(result) {
    // resolve 호출의 결과로 전달된 값(1)이 result로 넘어옴
    alert(result); // 1
    // 여기서 2가 반환되지만, 내부적으로 반환값을 resolve 함수로 전달하는 Promise 객체를 생성하여 반환하므로 결과적으로 연쇄적인 then 메서드 호출이 가능함
    return result * 2;
    // 즉, 내부적으로는 아래와 같은 코드를 실행
    // return new Promise(resolve => resolve(result * 2));
}).then(function(result) {
    alert(result); // 2
    return result * 2;
}).then(function(result) {
    alert(result); // 4
    return result * 2;
});
