# Frontend3-W1-Contest

The event will be as follows →
1.  Create a button and make an onClick listener for that button. As soon as the button is clicked start your promise chain.
2.  Your promise chain consists of 3 functions which return promises. The functions are called PromiseAPI1(), PromiseAPI2(),PromiseAPI3().
    Every function will return a promise. The promise has a setTimeout of 1000,2000 and 3000 respectively. Inside the SetTimeout you need to     fetch the API endpoint’s data ( The 3 Apis are given above ) and you need to show the data in a table, one after the other as these
    fetch’s return data. 
3.  Also once fetch returns the data and the data is shown on the screen, that promise should be resolved. Once fetched, you need to resolve each promise by resolve(true); Once a promise is resolved, you’ll then move to the next promise.
4.  Only go to the next promise function only when the previous resolve is true. Have an if condition before returning the next promise.
The flow is simple. The button is clicked → The promise chain begins → promiseAPI1() → promiseAPI2() → promiseAPI3().
5.  Do this promise chaining by either using the “.then()” method or by async await.

Deployed link - https://pankajmokashi.github.io/Frontend3-W1-Contest/
