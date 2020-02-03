let calc = (function(){
    let result = 0;
     
    return {
        clear: function(){
            result = 0;
        },
        sum: function(n){
            result += n;
        },
        subtract: function(n){
            result -= n;
        },
        multiply: function(n){
            result *= n;
        },
        divide: function(n){
            result /= n;
        },
        pow: function(n){
            result = Math.pow(result, n);
        },
        sqrt: function(){
            result = Math.sqrt(result);
        },
        pm: function(){
            result = -result;
        },
        print: function(){
            console.log(result);
        }
    }
})();
