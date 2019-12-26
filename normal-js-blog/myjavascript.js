/*
 * CMD / CTRL + S saving this file should trigger a page reload
 * if you not a **** and installed Live Server correctly. :3
 * https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
*/

// alert("I AM JAVASCRIPT GOD");

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
           .then(response => response.json())
}

function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
           .then(response => response.json())
}

let usersDiv = document.getElementById('users');
let postsDiv = document.getElementById('user-posts');
let allUsers = [];
let allPosts = [];

getUsers().then(users => {
    allUsers = users
    for (let user of allUsers) {
        usersDiv.innerHTML += `
            <div class="card" onclick="handleCardClick('${user.id}')">
                <h4>${user.username}</h4>
                <div>
                    <pre>${JSON.stringify(user.address, null, 2)}</pre>
                </div>
            </div>
        `;
    }
});

getPosts().then(posts => allPosts = posts);

function handleCardClick(userId) {
    
    postsDiv.innerHTML = '';

    for (let post of allPosts) {
        if (post.userId == userId) {
            postsDiv.innerHTML += `
                <div class="post">
                    <span class="heading">${post.title}</span>
                    <div class="body">
                        <p>
                            ${post.body}
                        </p>
                    </div>
                </div>
            `;
        }
    }
}