const myPromise = new Promise((resolve, reject) => {
  const user = {id:1};
  if (!user) {
    reject("Not found user");
  } else {
    setTimeout(()=>{
        resolve({name:"john"});
    },1000)
  }
});
const userData = []
const userid = [1,2,3,4,5];
for (let i = 0; i < userid.length; i++) {
    const id = userid[i];
    userData.push(myPromise)
}
Promise.all(userData).then(res => console.log(res))
myPromise
  .then((res) => console.log("found in then", res))
  .catch((err) => console.log("found in catch", err));
