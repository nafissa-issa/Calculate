const blanco = ()=>{
    document.querySelector(".container").classList.remove('theme1')
    document.querySelector(".container").classList.remove('theme3')
   
    document.querySelector(".container").classList.add('theme2')
    document.querySelector(".container").style.backgroundColor.remove('rgb(59,71,100)')
    document.querySelector(".container").style.backgroundColor.add('white')
    
    
    
    
    

}
const violet = () =>{
    
    document.querySelector(".container").classList.remove('theme2')
    document.querySelector(".container").classList.remove('theme1')
    document.querySelector(".container").classList.add('theme3')

}
let calculateData = null;
let signe = null;


const addValue = (value) => {
   
    let display = document.getElementById('calcul');
    if (calculateData === null) {
        calculateData = value
    }


    
    if (signe) {
    switch (signe) {
        case '+':
            calculateData = calculateData + value ;
            break;
        case '-':
            calculateData = calculateData - value;
            break;
        case '*':
            calculateData = calculateData * value;
            break;
        case '/':
            if (valeurB === 0) {
                display.value = "Error";
                return;
            }
            calculateData = calculateData / value;
            break;
        default:
            console.log("Opération invalide");
            return;
    }
    }


    if (display.value === "0" || display.value === "Error") {
        
        display.value = value;

    } else { 
        //////////////////////////////////////
        if (calculateData !== null && signe===null) {
            // clear()
            // calculateData = value
            display.value = value;
            
        
        }else
        display.value += value;
        //////////////////////////////////////
  
    }
    if (isNaN(parseInt(value)) ) {
        signe = value
        display.value = "0";
    }else {
        signe = null
    }
    

    // console.log({calculateData})
    // console.log({signe})

}


const del = () => {
    let display = document.getElementById('calcul');
    
    switch (display.value) {
        case '0':
        case '':
            // Si l'affichage est '0' ou vide, on garde '0'
            display.value = '0';
            calculateData = null;
            break;
        
        default:
            // Sinon, supprime le dernier caractère
            display.value = display.value.slice(0, -1);
            
            // Si tout est effacé après la suppression, on affiche '0'
            if (display.value === '') {
                display.value = '0';
                
            }
            
            // Réinitialise calculateData à null
            calculateData = null;
            break;
    }
}




const clear = () => {
    calculateData = null;
    valeurA = null;
    valeurB = null;
    signe = null;
    document.getElementById('calcul').value = "0";
}





const addSigne = (value) => {
    let display = document.getElementById('calcul');
    valeurA = parseFloat(display.value);
    signe = value;
    display.value = "0";
}


const calculate = () => {
    let display = document.getElementById('calcul'); 
    display.value = calculateData;
    

}
const inpute = ()=>{
    document.querySelector(".container").classList.remove('theme2')
    document.querySelector(".container").classList.remove('theme3')
    document.querySelector(".container").classList.add('theme1')
   
    // document.getElementById('calcul').style.backgroundColor = 'rgb(31,5,59)'
    // document.getElementById('calcul').style.color = 'rgb(238,213,69)'
    // document.getElementById('contenue').style.backgroundColor = 'rgb(31,5,59)'
    // document.getElementById('cal').style.backgroundColor = 'rgb(6,199,192)'
    //  document.getElementById('cal').style.color = 'white'
    //   document.getElementById('del').style.color = 'white'
    //   document.getElementById('reset').style.color = 'white'
    //   document.getElementById('del').style.backgroundColor = 'rgb(55,25,82)'
    //   document.getElementById('reset').style.backgroundColor = 'rgb(55,25,82)'
  
    // let index = document.querySelectorAll('.input')
    // index.forEach(index =>{
    //     index.style.backgroundColor = 'rgb(94,2,130)'
    //     index.style.color = 'black'
    // })
    

    
   
   
}


document.getElementById("btn7").addEventListener('click', () => addValue(7));
document.getElementById("btn8").addEventListener('click', () => addValue(8));
document.getElementById("btn9").addEventListener('click', () => addValue(9));
document.getElementById("btn4").addEventListener('click', () => addValue(4));
document.getElementById("btn5").addEventListener('click', () => addValue(5));
document.getElementById("btn6").addEventListener('click', () => addValue(6));
document.getElementById("btn1").addEventListener('click', () => addValue(1));
document.getElementById("btn2").addEventListener('click', () => addValue(2));
document.getElementById("btn3").addEventListener('click', () => addValue(3));
document.getElementById("btn0").addEventListener('click', () => addValue(0));
document.getElementById("point").addEventListener('click', () => addValue('.'));

document.getElementById("signe1").addEventListener('click', () => addValue("+"));
document.getElementById("signe2").addEventListener('click', () => addValue("-"));
document.getElementById("signe3").addEventListener('click', () => addValue("/"));
document.getElementById("signe4").addEventListener('click', () => addValue("*"));
document.getElementById("del").addEventListener('click',del) 
  
document.getElementById("reset").addEventListener('click', clear);       
document.getElementById("cal").addEventListener('click', calculate);
document.getElementById('blanc').addEventListener('click', blanco)
 document.getElementById('huey').addEventListener('click', inpute);
 document.getElementById('final').addEventListener('click', violet);






