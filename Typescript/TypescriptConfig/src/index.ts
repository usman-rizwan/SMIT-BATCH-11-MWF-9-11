//dynamic type
// function ke parameters ki type dena
// function jo return karen uski type dena
// tsconfig.json ,
// counter app using typescript

function sum(a: number, b: number): number {
  return a + b;
}

function greet(username: string): string {
  return `Welcome ${username}`;
}

console.log(sum(10,10))
console.log(sum(20,20))

// const total: number = sum(10, 10);

// let abc: any = "ABCD";

// abc = 200;
// abc = [10];
