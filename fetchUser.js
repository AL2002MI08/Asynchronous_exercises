// Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId
async function fetchUserTodos() {
    try {
      const [usersResponse, todosResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/todos')
      ]);
  
      if (!usersResponse.ok || !todosResponse.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const users = await usersResponse.json();
      const todos = await todosResponse.json();
  
      const usersWithTodos = users.map(user => {
        const userTodos = todos.filter(todo => todo.userId === user.id);

        return {
          id: user.id,
          name: user.name,
          todos: userTodos
        };
      });
  
      console.log(usersWithTodos);
    } catch (error) {
      console.error('Error occurred:', error.message);
    }
  }
  
  fetchUserTodos();
  