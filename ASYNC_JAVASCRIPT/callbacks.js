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
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// Call the createPost function to add a new post and then call the getPosts function to fetch the updated list of posts
createPost({ title: 'Post Three', body: 'This is post three' },
getPosts);