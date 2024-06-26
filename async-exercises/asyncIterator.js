let posts = {};
posts[Symbol.asyncIterator] = function () {
  const url = "https://jsonplaceholder.typicode.com/posts";
  return {
    async next() {
      let rand = Math.random();
      if (rand > 0.7) {
        return {
          value: undefined,
          done: true,
        };
      }
      let res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await res.json();
      console.log("array of posts:", data);
      return {
        value: JSON.stringify(data),
        done: false,
      };
    },
  };
};

let output = document.getElementById("output");
let main = document.querySelector("main");
main.addEventListener("click", function (e) {
  let iterator = posts[Symbol.asyncIterator]();
  (async function getData() {
    let newData = await iterator.next();
    if (newData.value && !newData.done) {
      output.textContent = newData.value;
      //   console.log('data', newData.value);
      setTimeout(getData, 2000);
    } else {
      output.textContent = `DONE`;
      //   console.log('data', newData.done);
    }
  })();
});