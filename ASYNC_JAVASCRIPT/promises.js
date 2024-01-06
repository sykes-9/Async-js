// Create an array of post objects
const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

console.log(posts)

// Function to fetch the posts after a delay of 1 second
function getPosts() {
 setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
 }, 1000);
}


// Function to create a new post after a delay of 2 seconds
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
        } else {
            reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

// createPost({ title: 'Post Three', body: 'This is post three' })
// .then(getPosts)
// .catch(err => console.log(err));


// Async / Await
// async function init() {
//  await createPost({ title: 'Post Three', body: 'This is post three' });

//  getPosts();

// }

// init();


// Asunc / Await with fetch 
async function fetchUsers() {
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
fetchUsers();

//Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => 
//   setTimeout(resolve, 2000, 'Goodbye')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => 
// res.json());

 
// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//     console.log(values));  