let arr = [5,6,9,7,11,8];
//single print
//console.log(arr[0]);
//console.log(arr[1]);

//print in a loop

    for (let i = 0; i < arr.length; i++) {
        console.log("index no: "+ i +" the value is: " +arr[i]);
    }

    //list of javascript

    let list = [6,"name","age",545];
    //print list
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        
    }

    //tow 2d dimentional array
/*
//here is some error
    let arr2 = [[4,5,6,7],[8,9,10]];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(arr2[i][j]);
            
        }
        
    }
        */
 
    //using for off loop
    let offloop = [4,5,6,1,2,3];
    for(let value of offloop){
        console.log(value);
    }

    //object call 
    let obj = {
        a:1,
        b:2,
        c:3,
        d:44,
        name :"abc",
        id:24587,

    }
    //for in loop 
    for(let key in obj){
    
    //    console.log(key);
console.log(key+": "+ obj[key]);

    }