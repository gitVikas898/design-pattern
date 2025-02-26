const Module =(function(){
    let bankBalance = 1000000;
    const secretId = 1268

    function logbalance(){
        console.log(`Your Bankbalance is ${bankBalance}`)
    }

    return {
        deposit:function(amount){
            if(!amount){
                return 'Invalid amount , deposit failed'
            }

            bankBalance +=amount;
            logbalance()
        },
        withdraw:function(amount){
            if(amount > 0){
                bankBalance -=amount;
                logbalance()
            }else{
                return 'Invalid Amount, withdrawl failed'
            }
        },
        checkbalance:function(pin){
            if(pin === secretId ){
                logbalance()
            }else{
                return 'Invalid Pin Entered'
            }
        }
    }
})();


Module.checkbalance(1268)
console.log(Module.bankBalance);