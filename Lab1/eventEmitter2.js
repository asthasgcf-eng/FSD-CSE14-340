import {EventEmitter} from "node:events";

const sayHi= (name)=>{
    console.log(`${name} logged in`);
};

const task=new EventEmitter();
task.once("greet", ()=>{
    console.log("System Started");
});
task.once('exit', (name)=>{
    console.log(`system shutdown by ${name}`);
});
task.on("greet",sayHi);
task.on("greet",(name)=>{
    console.log(`${name} starts working`);
});
task.on("greet",(name)=>{
    console.log(`${name} stops working`);
});
task.emit("greet", "Rahul Singh");
console.log();
task.off("greet", sayHi); //must have function name
task.emit("greet", "Manish Singh");

task.emit("greet", "Mukesh Gupta");
console.log();
task.emit("exit", "Manager");
task.emit("exit", "Employee"); //will not display as exit in line 11 is written only once
console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners();