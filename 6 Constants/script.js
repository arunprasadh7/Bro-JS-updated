// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;
let area;

// PI = 420.69;


// to calculate circumference
document.getElementById('btn-circum').onclick = function() {
  radius = document.getElementById('radius-value').value
  circumference = 2 * PI * radius
  document.getElementById('result').textContent = `Circumference of the circle is ${circumference} cm.`
  console.log(circumference)

}

// to calculate area 
document.getElementById('btn-area').onclick = function(){
  radius = document.getElementById('radius-value').value
  area = PI * radius * radius
  document.getElementById('result').textContent = `Area of the circle is ${area} sq.cm`
  console.log(area)
}