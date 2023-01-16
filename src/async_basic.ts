// Diff between Sync and Async
// 1. Sync style
//

// 2. Async style
// A few points to keep in mind when working with async functions based on callbacks are:
// a. Never call the callback twice.
// b. Never throw an error.


// Promise (Important)
// The main motivation for promises is to bring synchronous style error handling to Async / Callback style code.

// 1. Create a Promise 
// A promise can be either <pending> or <fulfilled> or <rejected>
// The promise constructor is passed resolve and reject functions for settling the promise state, which control the fate of promise
const promise1 = new Promise((resolve, reject) => {
    resolve(123);
})

const promise2 = new Promise((resolve, reject) => {
    reject(new Error("Something awful happened"));
})
// TIP: Promise Shortcuts
// Quickly creating an already resolved promise: Promise.resolve(result)
// Quickly creating an already rejected promise: Promise.reject(error)


// 2. Subscribing to the fate of the promise
// The promise fate can be subscribed to using .then (if resolved) or .catch (if rejected).
promise1.then((res) => {
    console.log('I get called:', res === 123); // get the resolve value
})
promise1.catch((err) => {
    console.log('I get called:', err.message); // never called
})
promise2.then((res) => {
    console.log('I get called:', res === 123); // never called
})
promise2.catch((err) => {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'
})

// 3. Chain-ability of Promises
Promise.resolve(123)
    .then((res) => {
        console.log(res); // 123
        return 456
    })
    .then((res) => {
        console.log(res); // 456
        return 789
    })
    .catch((err) => {
        console.log(err.message); // never called
    })
    .then((res) => {
        console.log(res); // 789
        throw new Error('something bad happened'); // any synchronous errors thrown in a then (or catch) result in the returned promise to fail
    })
    .catch((err) => {
        console.log(err.message); // something bad happened
        return 888
    })
    .then((res) => {
        console.log(res); // 888
    })
    .catch((err) => {
        console.log(err.message); // never called, a catch is only called in case of an error in the preceding chain:
        return 777
    })
// a. errors jump to the tailing catch (and skip any middle then calls) and
// b. synchronous errors also get caught by any tailing catch.


// 4. Promise function in chain
function iReturnPromiseAfter1Second(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Hello world!"), 1000);
    });
}

Promise.resolve(123)
    .then((res) => {
        // res is inferred to be of type `number`
        return iReturnPromiseAfter1Second(); // We are returning `Promise<string>`
    })
    .then((res) => {
        // res is inferred to be of type `string`
        console.log(res); // Hello world!
    });


// 5. Promise.all (run a series of async tasks parallel)
// an async function to simulate loading an item from some server
function loadItem(id: number): Promise<{ id: number }> {
    return new Promise((resolve) => {
        console.log('loading item', id);
        setTimeout(() => { // simulate a server delay
            resolve({ id: id });
        }, 1000);
    });
}

// a. Chained / Sequential
let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    }); // overall time will be around 2s

// b. Concurrent / Parallel
Promise.all([loadItem(1), loadItem(2)])
    .then((res) => {
        [item1, item2] = res;
        console.log('done');
    }); // overall time will be around 1s


// 6. Promise.race (run a series of async tasks continuously)
let task1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
let task2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
});

Promise.race([task1, task2]).then((value) => {
  console.log(value); // "one"
  // Both resolve, but task1 resolves faster
});




// Async Await
// 1. Asynchronous functions are prefixed with the async keyword; 
// 2. await suspends the execution until an asynchronous function return promise is fulfilled and unwraps the value from the Promise returned.
function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
        setTimeout(() => {
            resolve(count);
        }, milliseconds)
    })
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");
    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count: number = await delay(500, i);
        console.log(count)
    }
    console.log("World!");
}

dramaticWelcome();

