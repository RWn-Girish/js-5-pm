// DOM => Document Object Model
// Element => id, class, tagName

// getElementById

// function chickMe() {
//   let h2 = document.getElementById("test");

//   console.log(h2);

//   h2.innerHTML = "JavaScript 5PM Batch";
// }


// // getElementByTagName
// function chickMe() {
//   let h2 = document.getElementsByTagName("h2");

//   console.log(h2);

//   h2[0].innerHTML = "JavaScript 5PM Batch";
// }


// getElementByClassName
// function chickMe() {
//   let h2 = document.getElementsByClassName("hello");

//   console.log(h2);

//   h2[1].innerHTML = "JavaScript 5PM Batch";
// }


// QuerySelector

function chickMe() {
  let h2 = document.querySelector('#test');
//   let h2 = document.querySelectorAll('h2');
//   let h2 = document.querySelectorAll('.hello');

  console.log(h2);

  h2.innerHTML = "JavaScript 5PM Batch";
  h2.style.color = "Red"
//   h2.removeAttribute('class')
h2.setAttribute('name', 'abc')
}



const button = document.getElementById('btn')

button.addEventListener('click', chickMe)
button.addEventListener('mouseover', ()=> {
    console.log('Mouse Over Event Called');
})