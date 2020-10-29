const myObject = {
    age: 22,
    children: {
        amount: 1
    }
}

const myObjectAsJson = JSON.stringify(myObject);

console.log(myObjectAsJson);

const backToObject = JSON.parse(myObjectAsJson);

console.log(backToObject);