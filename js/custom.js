let input = document.getElementById('number');
let btn = document.getElementById('submit');

btn.addEventListener('click', function(){
    var taka = 100.21;
    let result = taka * parseFloat(input.value);
    document.getElementById("taka").innerHTML = result.toFixed(2);
    input.value = "";
});

// USD to BDT end
// bdt to UsD start

let input1 = document.getElementById("number1");
let btn1 = document.getElementById("submit1");

btn1.addEventListener("click", function(){
    let usd = 0.009979044 * parseFloat(input1.value) ;
    document.getElementById("taka1").innerHTML = usd.toFixed(2);
    input1.value = "";
})




