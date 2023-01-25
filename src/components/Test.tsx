import react from 'react';  export const Test = () => {

    {var myString = "Hello this is a test tsx component..."}

    const myFuncion = () => {
        return "Hello from an arrow function";
    };
    
    const myObject = {
        componentName : "Test.tsx",
        language: "JS and React",
        myObjectFunction: () => {
            return "Hello from an object with these properties:";
        }
    }

    class MyClass {
        constructor(name)
        {
            this.name = name;
        }
        greet() {
          //  alert('Hello from ' + this.name + ' function. ');
            console.log('Hello from ' + this.name + ' function. ');
            return 'Hello from ' + this.name + ' function. ';
        }
    }

    const myClassInstance = new MyClass("My  Class Instance");

    // await call async promises
    const fetchData = async () => {
       const resp = await fetch('https://api.github.com');

       const data = await resp.json();

       console.log(data);
    };
    fetchData();

    return (
        <div>
            <p>{myString}</p>
            <p>{myFuncion()}</p>
            <hr />
            <p>{myObject.myObjectFunction()}</p>
            <p>Name: {myObject.componentName}</p>
            <p>Language: {myObject.language}</p>
            <hr />
            <p>{myClassInstance.name}</p>
            <p>{myClassInstance.greet()}</p>
            <hr />
            <p>{}</p>
        </div>

    );

   
    
};