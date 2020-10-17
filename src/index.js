module.exports = function toReadable (number) {
    let numberOneArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numberDecArray = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let ten = number % 100;
    let result = " ";
    // if we have hundred
    if(Math.trunc(number / 100)){
        result = numberOneArray[Math.trunc(number / 100)] + " hundred " ;
    };
    // if we dont have some ten
    if(result !== "" && ten === 0){
        return result.trim();
    }
    // if we heve ten 
    if(ten < 20){
        result += numberOneArray[ten];
    }else{
        result += numberDecArray[Math.trunc(ten / 10) - 1] + " " + ((ten%10) ? numberOneArray[ten % 10] : "" ) 
    }
    return result.trim();

}
