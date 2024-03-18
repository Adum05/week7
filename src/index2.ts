//let myFunction = (value: string) => console.log(value);
//myFunction(`Aday`);

//let myFunction2 = () => {
    //console.log(`1`);
  //  console.log(`2`);
//};

//myFunction2();

//function myFunction3(value: string);

class Foo{
    private counter = 0;

    constructor(array: string[]) {
        //let logFunction = this.log;  not do this one
        //let logFunction = (value: string) => this.log(value)

      //  for(let value of array) {
        //    this.counter++;
          //  logFunction(value);
            //logFunction.call(this, value);  

            array.forEach(value => {
                this.counter++;
                this.log(value);
            }
                
            
        }
    }

    private log(value: string) {
        console.log(`${this.counter} - ${value}`);
        //console.log(`${value}`)
    }
        
    


let array = [`value1` , `value2` , `value3`]

//new Foo(array)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers
    .filter(value => value > 4)
    .map(value => `value ${value}`)
    .forEach(value => console.log(value))