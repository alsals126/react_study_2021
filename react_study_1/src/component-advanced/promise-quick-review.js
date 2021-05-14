// npm install node-fetch
const fetch = require('node-fetch');
// npm install axios
const axios = require('axios');

// fetch
fetch('https://jsonplaceholder.typicode.com/users/1')
    // 원격 서버가 응답하면 then 핸들러가 실행됨
    .then(function(response) {
        // json 메서드는 응답 텍스트 전체를 자바스크립트 객체로 파싱(변환)하는 작업을 진행하는 프라미스를 반환
        return response.json();
    })
    .then(function(json) {
        // 객체의 내용을 JSON.stringify 함수를 통해 문자열로 변환하여 출력
        console.log(JSON.stringify(json));
    });
