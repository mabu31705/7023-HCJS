// Một mảng trong JavaScript
var fptAptech= ["Lớp", "2305", "E", "Môn","7023", "HCJS"];
// Lặp qua các phần tử trong mảng
for(var i = 0; i < fptAptech.length; i++) {
    console.log( fptAptech[i]);
}

// Một đối tượng
var person = {"Tên": "Thuận", "Họ": "Nguyễn", "Tuổi": "34"};
// Lặp qua tất cả các thuộc tính
for(var x in person) {
   console.log(x + " = " + person[x] );
}

function gtWhile() {
    location.href = "#while";
}
function gtDoWhile() {
    location.href = "#doWhile";
}
function gtFor() {
    location.href = "#for";
}
function gtForIn() {
    location.href = "#forIn";
}
function gtForOf() {
    location.href = "#forOf";
}