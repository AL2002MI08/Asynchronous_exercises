function* exampleGenerator() {
    console.log('Start');
    const value1 = yield 'First pause';
    console.log('After first yield:', value1);
    const value2 = yield 'Second pause';
    console.log('After second yield:', value2);
    return 'Done';
}

const gen = exampleGenerator();
gen.next()
gen.next('hello')
gen.next()
gen.next()
gen.next()