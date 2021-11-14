// Question 3
// Write a JavaScript function that accepts a number 
// as a parameter and check if the number is prime or not

const primeNumbers = (num) => {
    flag = 0;
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = 1;
                break
            }
        }
    }
    if (flag == 1) {
        return 0
    } else {
        return 1
    }
}

num = 17;
if (primeNumbers(num) === 1) {
    console.log(num, "is a prime number")
} else {
    console.log(num, "is not a prime number")
}