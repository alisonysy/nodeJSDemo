const obj = {name:'The error is---',message:'You\'ve made a mistake.'}

Error.captureStackTrace(obj);

function MyError() {
  Error.captureStackTrace(this, MyError);
}

// Without passing MyError to captureStackTrace, the MyError
// frame would show up in the .stack property. By passing
// the constructor, we omit that frame, and retain all frames below it.

console.log(0.7+0.7+0.7);
let a = [].fill(0,0,3);
console.log(a);
