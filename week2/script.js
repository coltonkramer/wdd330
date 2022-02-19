
function submit(){
    
    let n = document.getElementById("inputValue1").value;
    let div = document.querySelector('#selector')
    div.textContent = sum(n)

}
const sum = (n) => {
    let total = 0
    while(n > 0){
        n = parseInt(n)
        total += n
        n--
    }
    return total
}

function compute(button) {
    let symbol = button.getAttribute("value");
    let num1 = document.getElementById("inputValue1").value;
    let num2 = document.getElementById("inputValue2").value;

    var solver = {
        '+': function(x,y) {return x + y},
        '-': function(x,y) {return x - y},
        '*': function(x,y) {return x * y},
        '/': function(x,y) {return x / y}
    }
    console.log(solver)
    let answer = solver[symbol](parseFloat(num1),parseFloat(num2))

    document.querySelector('#selector').textContent = answer

}
