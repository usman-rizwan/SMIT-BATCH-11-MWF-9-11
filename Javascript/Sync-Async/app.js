// JavaScript Concepts: Synchronous, Asynchronous, Callbacks, Promises, Fetch API

// Example 1: Synchronous Behavior
var a = "A";
var b = "B";

// setTimeout is asynchronous and gets added to the event loop
setTimeout(() => {
  console.log(b); // This will log after 'a' due to asynchronous behavior
}, 0);

console.log(a); // Logs first due to synchronous behavior

// Example 2: Callback Functions
function sum(a, b, c) {
  console.log("a=>", a);
  console.log("b=>", b);
  console.log("c=>", c()); // c is a callback function
}

sum(10, 20, () => {
  return "a+b";
});

// Example 3: Callback in Asynchronous Function
function login(callback) {
  setTimeout(() => {
    console.log("User is logged In");
    callback();
  }, 500);
}

function getUserInfo() {
  const user = {
    fullName: "Bilal Raza",
  };
  setTimeout(() => {
    console.log("User Data is here", user);
  }, 500);
}

login(getUserInfo);

// Example 4: Promises
var isValid = false;
const p = new Promise((resolve, reject) => {
  if (isValid) {
    resolve("User is Logged In");
  } else {
    reject("User email/password is not valid.");
  }
});

p.then((msg) => console.log(msg)).catch((err) => console.log("catch=>", err));

// Example 5: Promises with Asynchronous Operations
function loginWithPromise(isValid) {
  return new Promise((resolve, reject) => {
    if (isValid) {
      setTimeout(() => {
        resolve("User is Logged In");
      }, 300);
    } else {
      reject("User email/password is not valid.");
    }
  });
}

function fetchUserInfo() {
  const user = {
    fullName: "Bilal Raza",
  };
  setTimeout(() => {
    console.log("User Data is here", user);
  }, 500);
}

loginWithPromise(true)
  .then(() => {
    console.log("USER IS LOGGED IN");
    fetchUserInfo();
  })
  .catch((err) => console.log("Catch=>", err));

// Example 6: Fetch API and Displaying Data
var products = [];
fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => displayProducts(data));

function displayProducts(products) {
  console.log("products=>", products);
  var list = document.getElementById("list");
  products.forEach((data, ind) => {
    let ele = `<li>(${data.id}) ${data.title}</li>`;
    list.innerHTML += ele;
  });
}

// Dropdown example with tourist destinations and weather fetch
var touristDestinations = [
  { name: "Hunza Valley", latitude: 36.3167, longitude: 74.65 },
  { name: "Skardu", latitude: 35.2971, longitude: 75.6333 },
  { name: "Fairy Meadows", latitude: 35.4213, longitude: 74.5969 },
  { name: "Naltar Valley", latitude: 36.1396, longitude: 74.1928 },
  { name: "Murree", latitude: 33.9062, longitude: 73.3903 },
  { name: "Kaghan Valley", latitude: 34.7939, longitude: 73.5793 },
  { name: "Swat Valley", latitude: 35.222, longitude: 72.4258 },
  { name: "Chitral", latitude: 35.851, longitude: 71.7864 },
  { name: "Neelum Valley", latitude: 34.5857, longitude: 73.907 },
  { name: "Ratti Gali Lake", latitude: 34.8861, longitude: 74.0486 },
  { name: "Shangrila Resort", latitude: 35.3525, longitude: 75.5088 },
  { name: "Deosai National Park", latitude: 35.0303, longitude: 75.443 },
  { name: "Khunjerab Pass", latitude: 36.8497, longitude: 75.4306 },
  { name: "Shogran", latitude: 34.6271, longitude: 73.495 },
  { name: "Rama Meadows", latitude: 35.2918, longitude: 74.9643 },
  { name: "Gojal Valley", latitude: 36.6833, longitude: 74.85 },
  { name: "Kalash Valley", latitude: 35.6699, longitude: 71.7309 },
  { name: "Ayubia National Park", latitude: 34.0607, longitude: 73.402 },
  { name: "Saiful Muluk Lake", latitude: 34.8722, longitude: 73.6919 },
  { name: "Khaplu", latitude: 35.1404, longitude: 76.337 },
  { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
];

var locations_dropdown = document.getElementById("locations_dropdown");
locations_dropdown.addEventListener("change", function () {
  console.log(this.value);
  console.log(touristDestinations[this.value]);

  fetchWeather(
    touristDestinations[this.value].latitude,
    touristDestinations[this.value].longitude,
    displayWeatherData
  );
});

function fetchWeather(lat, lon, callback) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c153479685c47f1b34a83591f3b1acbe`
  )
    .then((res) => res.json())
    .then((data) => {
      callback(data);
    });
}

function displayWeatherData(info) {
  console.log("info==>", info);
  // weatherimg.src= ` http://openweathermap.org/img/w/${info.weather[0].icon}.png`
}