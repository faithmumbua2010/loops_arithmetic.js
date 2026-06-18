let text = "";

for (let i = 1; i <= 100; i++) {
    
    if(i% 3===0 && i% 5===0)
    {
        console.log("fizzbuzz")}
    else if (i% 3===0 )
    {
        console. log("fizz")
    }
    
    else if(i% 5==0){
        console. log("buzz")
    }
   
    else {
        console.log(i);
    }


}


// 3 > fizz
// 5 > buzz
// 3 & 5 => fizzbuzz // 15, 30, 