let timer = 0
const a1 = document.getElementById('a1').textContent
const a2 = document.getElementById('a2').textContent
const a3 = document.getElementById('a3').textContent
const a4 = document.getElementById('a4').textContent
const a5 = document.getElementById('a5').textContent
const a6 = document.getElementById('a6').textContent
const a7 = document.getElementById('a7').textContent
const a8 = document.getElementById('a8').textContent
const a9 = document.getElementById('a9').textContent

function clicked(divId){
    let symbol = ''
    if (timer % 2 == 0){
        // symbol = 'X'
        document.getElementById(divId).textContent = 'X'
    }
    else {
        document.getElementById(divId).textContent = 'O'
    }
    // document.getElementById(divId).textContent = symbol
    timer++
if(timer > 4 ){
    if(a1 === symbol && a1 === a2 && a2 === a3 || a1 === 'X' && a4 === 'X' && a7 === 'X'|| a1 === symbol && a1 === a5 && a5 === a9 ||
        a4 === symbol && a4 === a5 && a5 === a6 || a2 === symbol && a2 === a5 && a5 === a8 || a3 === symbol && 3 === a6 && a6 === a9 || 
        a3 === symbol && a3 === a5 && a5 === a7 || a7 === symbol && a7 === a8 && a8 === a9){
        alert('You Won!')
    }
    
    
}
// else{
//     alert('better luck next time')
// }
}