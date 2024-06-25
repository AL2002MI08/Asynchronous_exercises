// Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId
async function fetchUserTodos(){
    try{
        const [user,todos] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users`),
            fetch('https://jsonplaceholder.typicode.com/todos')])
            const users = await user.json()
            const todo = await todos.json()
            console.log(todo)
            const usersWithTodos = users.map(user => {
                const userTodos = todo.filter(todo => todo.userId === user.id);
                
                return {
                    id: user.id,
                    name: user.name,
                    todos: userTodos
                }
            });
        //    console.log(usersWithTodos)

    }
    catch(error){
        throw new Error('error occured!')
    }
}
fetchUserTodos()


