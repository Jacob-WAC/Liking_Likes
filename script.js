var likes1 = document.querySelector(".likes1");
var likes2 = document.querySelector(".likes2");
var likes3 = document.querySelector(".likes3");
var numOfLikes = [0, 0, 0];

function plus1(element) {
  numOfLikes[0]++;
  likes1.innerHTML = numOfLikes[0] + " like(s)";
  console.log(numOfLikes[0]);
}

function plus2(element) {
  numOfLikes[1]++;
  likes2.innerHTML = numOfLikes[1] + " like(s)";
  console.log(numOfLikes[1]);
}

function plus3(element) {
  numOfLikes[2]++;
  likes3.innerHTML = numOfLikes[2] + " like(s)";
}
