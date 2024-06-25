// Create an `async` function that performs three asynchronous operations sequentially and logs the result of each.
async function operations() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    // console.log(data)
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const res1 = await result.json();
    console.log(res1);
  } catch (error) {
    console.error("error:", error.message);
  }
}

operations();


