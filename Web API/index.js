// AJAX => Asynchronous JavaScript with XML

// document.querySelector("button").addEventListener("click", () => {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

//   xhr.onload = function () {
//     // document.writeln(this.responseText);
//     // console.log(this.responseText);

//     let div = document.getElementById("test");
//     let data = JSON.parse(this.responseText);
//     console.log(data);
//     data.forEach((user) => {
//       let li = document.createElement("li");
//       li.innerHTML = user.title;
//       div.append(li);
//     });
//   };

//   xhr.send();
// });



// document.querySelector('button').addEventListener('click', () => {
//     let div = document.getElementById("test");


//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(data => {
//            console.log(data.message);
//            let img = document.createElement('img');
//            img.setAttribute('src', data.message);
//            img.setAttribute('width', "280px");
//            img.setAttribute('height', "280px");
//            div.prepend(img)
//   })
//     .catch(err => console.log(err));
// })


let select = document.querySelector('select');

fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(data => {
  let breedList = Object.keys(data.message);
  // console.log(breedList);
  breedList.forEach(breed => {
    let option = document.createElement('option');
    option.innerHTML = breed
    option.setAttribute('value', breed);
    select.append(option)
  })
  
})
.catch(err => console.log(err));


document.querySelector('button').addEventListener('click', () => {
  // console.log(select.value);
  let breedList = select.value;
  fetch(`https://dog.ceo/api/breed/${breedList}/images`)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    let dogList = data.message;
    dogList.forEach(dog => {
      let img = document.createElement('img');
           img.setAttribute('src', dog);
           img.setAttribute('width', "200px");
           img.setAttribute('height', "200px");
           img.style.padding = "5px";
           document.querySelector("#test").prepend(img)
    })
  })
  .catch(err => console.log(err));
})