/*
Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more 
than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

function createCounter(n: number): () => number {
    let counter = 0;
    return () => {
      if (counter==0) {
        counter=counter+1
        return n
      }
      counter=counter+1
      return n=n+1;
    }
}
