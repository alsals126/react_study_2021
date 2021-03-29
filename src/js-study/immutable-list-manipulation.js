// NodeJS에서 실행
// 리스트 데이터
let lst = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Paul" },
]

// push를 사용하여 리스트 객체 직접 변경은 X
// lst.push({ id: 4, name: "Ken" })
// console.log(lst)

// concat을 사용하여 기존 리스트 객체는 그대로 두고(불변) 새 리스트를 전달할 수 있도록 하기
let newLst = lst.concat({ id: 4, name: "Ken" })
console.log("concat =====")
console.log(lst) // 원본에 영향 X
console.log(newLst) // 새로운 객체
console.log(lst === newLst) // 서로 다른 객체이므로 false 반환