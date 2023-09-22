// const maxWait = new Promise((resolve) => setTimeout(resolve, 2000, "max-wait"));

// async function getPosts() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
//   const movies = await response.json();
//   return movies;
// }

// Promise.any([maxWait, getPosts()]).then((value) => console.log(value));

const maxWait = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("max");
    }, 2000);
  });
};

async function minWait() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await response.json();
  return posts;
}

Promise.any([minWait(), maxWait()]).then((value) => console.log(value));
