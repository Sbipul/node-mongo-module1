const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});

const getData = async () => {
  const res = await myPromise;
  console.log(res);
};
getData();

fetch(url)
  .then((res) => res.json)
  .then((data) => console.log(data));

const getUsers = async () => {
  const res = await fetch("url");
  const data = res.json();
  console.log(data);

  const res2 = await fetch("url");
  const data2 = res.json();
  console.log(data);
};
getUsers();