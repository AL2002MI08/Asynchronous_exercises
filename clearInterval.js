function repeat_Function(fn, interval) {
    fn();
    const intervalId = setInterval(fn, interval);
    return function stopExecution() {
      clearInterval(intervalId);
      console.log('Execution stopped.');
    };
  }
  const stopExecution = repeat_Function(function display(){
    console.log('hello')
  }, 1000)
  setTimeout(()=>{
    stopExecution()
  },4000)