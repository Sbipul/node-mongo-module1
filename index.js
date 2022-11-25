// ====================================================================================Promise call
// const myPromise = new Promise((resolve, reject) => {
//   const user = {id:1};
//   if (!user) {
//     reject("Not found user");
//   } else {
//     setTimeout(()=>{
//         resolve({name:"john"});
//     },1000)
//   }
// });
// const userData = []
// const userid = [1,2,3,4,5];
// for (let i = 0; i < userid.length; i++) {
//     const id = userid[i];
//     userData.push(myPromise)
// }
// Promise.all(userData).then(res => console.log(res))
// myPromise
//   .then((res) => console.log("found in then", res))
//   .catch((err) => console.log("found in catch", err));

// =======================================================================================Async await
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 1000);
// });

// const getData = async () => {
//   const res = await myPromise;
//   console.log(res);
// };
// getData();

// fetch(url)
//   .then((res) => res.json)
//   .then((data) => console.log(data));

// const getUsers = async () => {
//   const res = await fetch("url");
//   const data = res.json();
//   console.log(data);

//   const res2 = await fetch("url");
//   const data2 = res.json();
//   console.log(data);
// };
// getUsers();

// =====================================================================================Handling errors
// const errorHandler = (error) => {
//     const {name,message,stack} = error
//     console.log(name,message)

// }
// const getData = async () => {
//   try {
//     // undefined.find();
//     const emailError = new Error("Email already exists");
//     throw emailError
//   } catch (error) {
//     errorHandler(error);
//   }
// };
// getData();

// console.log("test error handleing");

// ============================================================================ Module creating/export import
