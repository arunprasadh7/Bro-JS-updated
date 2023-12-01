// How to accept user input

// 1. EASY WAY = window prompt

// let username
// username = window.prompt('Enter your username : ')
// console.log(username)


// 2. PROFESSIONAL WAY = HTML textbox
let userName;
document.getElementById('submit-button').onclick = function() {
  userName = document.getElementById('myusername').value
  document.getElementById('myh1').textContent = `Welcome ${userName}!!!`
  console.log(userName)

}