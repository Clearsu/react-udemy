function handleTimeout() {
    console.log("Timeout Occurred!");
}

const handleTimeout2 = () => {
    console.log("Time out again!!!");
}

setTimeout(handleTimeout, 1000);
setTimeout(handleTimeout2, 2000);
setTimeout(() => {
    console.log('Time out again and again!!!!!');
}, 3000);

function greeter(greetFn) {
    greetFn();
}

greeter(() => console.log("Hi!!"));