/*
 * CMD / CTRL + S saving this file should trigger a page reload
 * if you not a **** and installed Live Server correctly. :3
 * https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
*/

// alert("I AM JAVASCRIPT GOD");

function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users');
    // this fetch is a asynchronous function
}

getUsers()
.then(response => {
    return response.json();
})
.then(users => {
    console.log(users);
    let userDiv = document.getElementById('users');

    for (let user of users) {
        userDiv.innerHTML += `
            <div class="card">
                <h4>${user.username}</h4>
                <pre>
                ${JSON.stringify(user.address, null, 2)}
                
                </pre>
            </div>
        `;
        // 2 is indentation spaces
    }
})

