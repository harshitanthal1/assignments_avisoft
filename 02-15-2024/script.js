document.addEventListener("DOMContentLoaded", async () => {
    const app = document.getElementById("app");
    
    try {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();
  
      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await postsResponse.json();
  
      const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await todosResponse.json();
  
      renderData(users, posts, todos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  
  function renderData(users, posts, todos) {
    const app = document.getElementById("app");
  
    const usersList = document.createElement("ul");
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = user.name;
      usersList.appendChild(li);
    });
    app.appendChild(usersList);

    const postsList = document.createElement("ul");
    posts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      postsList.appendChild(li);
    });
    app.appendChild(postsList);
   
    const todosList = document.createElement("ul");
    todos.forEach(todo => {
      const li = document.createElement("li");
      li.textContent = todo.title;
      todosList.appendChild(li);
    });
    app.appendChild(todosList);
  }
  