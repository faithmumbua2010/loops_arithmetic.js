function calculateBill(minutes, ratePerMinute){
    let total= minute * ratePerMinute;
    return "Your bill is KSH" + total;

}
console.log(calculateBill(67, 2.50));
console.log(calculateBill(100, 2.50));
// make a few changes to make the rateperminute defined
