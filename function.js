function myFunction() {}

function aFunction(a,b){
    return a+b
}

function outerFunction(a,b){
    function innerFuncion(a){
        return a*a
    }

    return innerFuncion(a+b)
}

outerFunction(2,3);
let i=1;
let x = function(){
    console.log("Here is message number "+i);
    i+=1;
}


interval=setInterval(x,2000);
setTimeout(function(){
    clearInterval(interval);
},10000)