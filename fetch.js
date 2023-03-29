/* let response = fetch('https://dummyjson.com/quotes');

fetch('https://dummyjson.com/quotes/1')
    .then(response => {
      //handle's response
    })
    .catch(error => {
      //handle's the error
    });

    */

/* fetch('https://dummyjson.com/quotes/1')
    .then(response => response.json())
    .then(data => console.log(data)) */

/*
async function loadMe() {
  let response = await fetch('https://dummyjson.com/quotes/1');
  let json = await response.json();
  console.log(json);
} */

/*
async function load() {
  let response = await fetch('http://127.0.0.1:5500/data.json');

  console.log(response.status);
  console.log(response.statusText);

  if (response.status === 200) {
    let data = await response.json();

    console.log(data)
  }
}
    
load(); */

/*
async function myFun() {
  let response = await fetch('https://dummyjson.com/quotes/1');
  let data = await response.json();

  console.log(data);
}
myFun();
*/

async function joSeph() {
  let url = 'https://www.unawirichildrenfoundation.org/Fetch/footer.json';

  try {
    let response = await fetch(url);
    return await response.json();
  } catch(error) {
    console.log(error)
  }
}

async function reTurn() {
  let users = await joSeph();
  let html = '';
  users.forEach(user => {
    let htmlSegment = `<div class="user">
                       <h2>${user.firstName}</h2>
                       <img width="30%" src="${user.profileURL}"></img>
                       <br>
                       <br>
                       <a href="https://valligift.vercel.app">${user.email}</a>
                       </div>`;

    html += htmlSegment;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

reTurn();
