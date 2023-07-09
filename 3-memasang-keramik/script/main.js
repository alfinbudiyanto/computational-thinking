// function fibonacci(num) {
//   let n1 = 1;
//   let n2 = 2;
//   let next = 0;
//   for (let i = 1; i <= num; i++) {
//     console.log(n1);
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
//   }
// }

// function fibonacci(num) {
//   if (num <= 2) {
//     return num;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

const fib = (num) => (num <= 2 ? num : fib(num - 1) + fib(num - 2));

for (let i = 1; i <= 10; i++) {
  console.log(fib(i));
}
