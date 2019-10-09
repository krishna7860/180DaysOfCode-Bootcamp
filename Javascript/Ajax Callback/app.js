const posts = [
  { title: "Post one", body: "This is post 1" },
  { title: "Post two", body: "This is post 2" },
  { title: "Post three", body: "This is post 3" },
  { title: "Post four", body: "This is post 4" }
];
// Synchronous way
// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = "";
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post five", body: "this is post 5" });
// getPosts();

// Asynchronous way
function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post five", body: "this is post 5" }, getPosts);
