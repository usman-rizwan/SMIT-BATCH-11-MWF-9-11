// const getData = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(100);
//     }, 4000);
//   });
// };

// getData().then((res) => {
//   console.log(res);
// });

// async function getData() {
//     console.log("login");
//     let api = await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.log("api===>", api);
//     let data = await api.json();
//     // console.log(data);
//     return data;
//     //  let data = await api.json()
//   }

//   async function showWelcomeNote() {
//     let userData = await getData();
//     console.log("userData ==> ", userData);
//   }

//   showWelcomeNote();

// async function getData() {
  
// }

let getData = async () => {
  try{
    console.log("Loading....");
    console.log("Message 2");
      let x =  await fetch()
      let data = await x.json()
      console.log("data ==>" , data);
      console.log("Message 3");
      return data
  }catch(err){
    console.log("Errror ", err);
  }




    
};
console.log("Message 1");
getData()
console.log("Message 4");

