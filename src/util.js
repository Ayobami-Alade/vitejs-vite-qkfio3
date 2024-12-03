// - named export
export const range = (start, end, step = 1) => {
  let output = [];

  //  implement a range function
  if (step === 0) {
    throw new Error("Step cannot be zero");
  }

  if ((start > 0 || start < 0) && end == undefined) {
    for (let i = 0; i < start; i += step) {
      output.push(i);
    }
  } else if (start < end && step > 0) {
    //  implement a range function
    // assending range
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }
  }

  return output;
};

range(10) //start-0 , end-10 [0,1,2,3,4,5,6,7,8,9]

range(2, 10) //start-2, end-10

range(0, 10, 2) // start- , end-10, step- 2 [0, 2, 4, 6, 8]
range(5) //[0, 1, 2, 3, 4]


