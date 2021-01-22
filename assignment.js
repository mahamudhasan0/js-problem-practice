
function kilometerToMeter(kilometer) {

    if (kilometer < 0) {
        return 'distance can not be negative';
    }
    else {
        // calculate kilometer to meter

        const meter = kilometer * 1000;
        return meter;
    }
}




function budgetClaculator(watch,mobile,laptop){
    if(watch<0 || mobile<0 || laptop<0){
        return'This is not possible'
    }
    else{
    var watchValue = watch*50;
    var mobileValue = mobile*100;
    var laptopValue = laptop*500;
    var budget = watchValue + mobileValue + laptopValue;
    return budget;
    }
}
 



 function hotelCost(days){
    var cost=0;
    if(days<0){
        return 'Day value cannot be negative';
    }
    else if(days<=10){
        cost=days*100;
    }
    else if(days<=20){
        var tenDays = 10*100;
        var remaining = days-10;
        var tewentyDays = remaining*80;
        days = tenDays + tewentyDays; 
    }
    else{
        var tenDays = 10*100;
        var tewentyDays = 10*80;
        var remaining = days-20;
        var otherDays = remaining*50;
        days = tenDays+tewentyDays+otherDays;
    }
    return days;
}




function megaFriend(friend)
  {
    var maxString = friend[0].length;
    var maxLength = friend[0];

    for (var i = 1; i < friend.length; i++) {
        var maxi = friend[i].length;
        if (maxi > maxString) {
          maxLength = friend[i];
            maxString = maxi;
        }
      }
    return maxLength;
}
 
