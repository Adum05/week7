function log(value: string) {
    console.log(value);
}

log(`Aday`);



let counter = 0;

function notPureFunction(value: string){
    counter++;
    console.log(value);
}



type FunctionType = (value: string) => void;

function doSomething(someFunction: FunctionType){
    for(let i=0; i<5; i++ ) {
        someFunction(`value ${i}`);
    }
}

//log(`value`);

//let logger = log
//logger(`value2`)

doSomething(log)


























