var calculator = (function(){

   

    let scream = document.getElementById('screen');
    //turns on calc
    let onBoi = document.getElementById('turnOn');
    function turnOnn (){
        scream.innerHTML = 0;
        console.log('on');
        memory = 0;
        
    
    }
    onBoi.addEventListener('click', turnOnn);
    //turns off calc
    let offBoi = document.getElementById('turnOff');
    function turnOff (){
        scream.innerHTML = '';
        memory =0;
        console.log('off')
    }
    offBoi.addEventListener('click', turnOff);
    //sets to 0
    let clearBoi = document.getElementById('clear');
    function clearr (){
        if(scream.innerHTML !== 0 && scream.innerHTML !==''){
            scream.innerHTML = 0;
            memory=0;
            console.log(memory);
        }
    }
    
    
    clearBoi.addEventListener('click', clearr);
    //press buttons
    let sevin = document.getElementById('num7');
    function printSevin (){
         if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 7;
        } else if (scream.innerHTML !==0){
            scream.innerHTML+=7;
        }
        console.log('7')
    }
    
    sevin.addEventListener('click', printSevin);
    //sevin.addEventListener('click', equal);
    
    let ate = document.getElementById('num8');
    function printAte (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 8;
        } else {
            scream.innerHTML += 8;
        }
    }
    ate.addEventListener('click', printAte);
    //ate.addEventListener('click', equal);
    
    let nein = document.getElementById('num9');
    function printNein (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 9;
        } else {
            scream.innerHTML +=9;
        }
        console.log('9')
    }
    nein.addEventListener('click', printNein);
    //nein.addEventListener('click', equal);
    let slass = document.getElementById('slash');
    function printSlass (){
        if(scream.innerHTML !== ''){
            scream.innerHTML += '|';
        } 
    } 
    slass.addEventListener('click', divide);
    
    
    let fourr = document.getElementById('num4');
    function printFourr (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 4;
        }else{
            scream.innerHTML +=4;
        }
        console.log('4')
    }
    fourr.addEventListener('click', printFourr);
    //fourr.addEventListener('click', equal);
    
    let fivv = document.getElementById('num5');
    function printFivv (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 5;
        }else{
            scream.innerHTML+=5;
        }
        console.log('5')
    }
    fivv.addEventListener('click', printFivv);
    //fivv.addEventListener('click', equal);
    let sixx = document.getElementById('num6');
    function printSixx (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 6;
        }else{
            scream.innerHTML+=6
        }
        console.log('6')
    }
    sixx.addEventListener('click', printSixx);
    //sixx.addEventListener('click', equal);
    let starring = document.getElementById('starr');
    function printStarring (){
        if(scream.innerHTML !== ''){
            scream.innerHTML += '*';
        }
        console.log('*')
    }
    starring.addEventListener('click', multiply);
    
    let onee = document.getElementById('num1');
    function printOnee (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|'|| scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 1;
        }else{
            scream.innerHTML+= 1;
        }
        console.log('1')
    }
    onee.addEventListener('click', printOnee);
   // onee.addEventListener('click', equal);
    let too = document.getElementById('num2');
    function printToo (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 2;
        }else {
            scream.innerHTML+=2;
        }
        console.log('2')
    }
    too.addEventListener('click', printToo);
    //too.addEventListener('click', equal);
    let tree = document.getElementById('num3');
    function printTree (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 3;
        } else {
            scream.innerHTML+=3;
        }
        console.log('3')
    }
    tree.addEventListener('click', printTree);
    //tree.addEventListener('click', equal);
    let miness = document.getElementById('minuse');
    function printMiness(){
        if(scream.innerHTML !== ''){
            scream.innerHTML += '-';
        }
        console.log('-')
    }
    miness.addEventListener('click', subtract);
    
    let zipp = document.getElementById('num0');
    function printZipp(){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = 0;
        } else {
            scream.innerHTML +=0
        }
        console.log('0')
    }
    zipp.addEventListener('click', printZipp);
    //zipp.addEventListener('click', equal);
    
    let dotButton = document.getElementById('dot');
    dotButton.addEventListener('click', printDot);
    function printDot (){
        if(scream.innerHTML == 0 || scream.innerHTML === '*' || scream.innerHTML === '|' || scream.innerHTML === '+' || scream.innerHTML === '-'){
            scream.innerHTML = '.';
        } else {
            scream.innerHTML+='.';
    }
    }
    
    

    
    let pluss = document.getElementById('pluse');
    function printPluss(){
        if(scream.innerHTML !== ''){
            scream.innerHTML += '+';
        } 
        console.log('+')
    }
    pluss.addEventListener('click', add);
    

    /*calc logic
    */
 var memory  = 0;

 function add (){
     memory = scream.innerHTML;
     memory = memory + '+';
     scream.innerHTML = '+';
 }
 function subtract (){
    memory = scream.innerHTML;
    memory = memory + '-';
    scream.innerHTML = '-';
}
function divide (){
    memory = scream.innerHTML;
    memory = memory + '|';
    scream.innerHTML = '|';
}
function multiply (){
    memory = scream.innerHTML;
    memory = memory + '*';
    scream.innerHTML = '*';
}
let ee = document.getElementById('eq');
function printEe(){
    if(scream.innerHTML !== ''){
        scream.innerHTML += '=';
    }
    console.log('=')
}
ee.addEventListener('click', equals);

        function equals(){
            if (memory.includes('+')){
                var storedNum = parseFloat(memory);
                var currentNum = parseFloat(scream.innerHTML);
                scream.innerHTML = storedNum + currentNum;
            } else if (memory.includes('-')){
                var storedNum = parseFloat(memory);
                var currentNum = parseFloat(scream.innerHTML);
                scream.innerHTML = storedNum - currentNum;
            } else if (memory.includes('*')){
                var storedNum = parseFloat(memory);
                var currentNum = parseFloat(scream.innerHTML);
                scream.innerHTML = storedNum * currentNum;
            } else if (memory.includes('|')){
                var storedNum = parseFloat(memory);
                var currentNum = parseFloat(scream.innerHTML);
                scream.innerHTML = storedNum / currentNum;
            } else {
                throw err;
            }
    }

var squaree = document.getElementById('sq');
function squareDat (){
    scream.innerHTML *= scream.innerHTML;
}
squaree.addEventListener('click', squareDat);

/////cash register///
    return {
        scream:scream
    }



    })();
