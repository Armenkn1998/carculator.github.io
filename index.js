const buttons = [
    {
        id: 'minus',
        value: '-'
    },
    {
        id: 'plus',
        value: '+'
    },
    {
        id: 'multiply',
        value: '*'
    },
    {
        id: 'divide',
        value: '/'
    },
    {
        id: 'equal',
        value: '='
    },
    {
        id:"parcent",
        value: "%"
    },
    {
        id: "whole",
        value: "."
    },
    {
        id: "pow",
        value: "√"
    },
    {
        id: 'one',
        value: 1,
    },
    {
        id: 'two',
        value: 2,
    },
    {
        id: 'three',
        value: 3,
    },
    {
        id: 'four',
        value: 4,
    },
    {
        id: 'five',
        value: 5,
    },
    {
        id: 'six',
        value: 6,
    },
    {
        id: 'seven',
        value: 7,
    },
    {
        id: 'eight',
        value: 8,
    },
    {
        id: 'nine',
        value: 9,
    },
    {
        id: 'zero',
        value: 0,
    },
    {
        id: 'del',
        value: "AC",
    },
    {
        id:'delet',
        value: "C"
    }



];
const z = document.getElementById("root");
const input = document.createElement("h2");
input.setAttribute("id","input");
z.appendChild(input);
const box = document.createElement("div");
box.setAttribute("id" , "box");
z.appendChild(box);


let obj = {value1: [], value2: [], value3: []}
let out = 0;
let x = 0;


// return buttons

function button() {
    buttons.forEach(item => {
        let button = document.createElement("button");
        button.setAttribute("value", item.value);
        button.setAttribute("id","button")
        button.innerHTML = item.value;
        box.appendChild(button);
        button.addEventListener("click", (e) => {
        if(['*', '+', '-', '/'].includes(e.target.value) && e.target.value !== '=' && obj.value1.length > 0 && obj.value2.length > 0){
         
            const value1 = parseFloat(obj.value1.join(''))
            const value2 = parseFloat(obj.value2.join(''))
            switch (obj.value3[0]){
                case '+':
                     x = value2 + value1
                    break;
                case '-':
                     x = value1 - value2
                    break
                case '*':
                    x = value2 * value1
                    break
                case '/':
                   if(value2 === 0){
                     alert('value by divide can`t be 0')
                   }else {
                       x = value1 / value2
                       break
                   }
            }
                obj["value1"].splice(e.target.value)
                obj["value2"].splice(e.target.value)
                obj["value1"].push(x)
                console.log(obj["value1"])
                obj["value3"].pop(e.target.value)
                obj["value3"].push(e.target.value);
                input.innerHTML = e.target.value;
        }else if (e.target.value !== '='  && obj.value1.length > 0 && obj.value2.length > 0) {
            
            obj['value2'].push(e.target.value);
            console.log(obj["value2"])
            input.innerHTML = obj["value2"].join('');
        }
           else if (!['*', '+', '-', '/', '=','%','C','√'].includes(e.target.value) && !obj.value3.length) {
                obj['value1'].push(e.target.value)
                input.innerHTML = obj["value1"].join('');
            } else if (['*', '+', '-', '/','%','√'].includes(e.target.value) && e.target.value !== '=') {
                obj["value3"].push(e.target.value);
                input.innerHTML = e.target.value;
            } else if (e.target.value !== '=') {
                obj['value2'].push(e.target.value);
                input.innerHTML = e.target.value;
            }else {
                const value1 = parseFloat(obj.value1.join(''))
                const value2 = parseFloat(obj.value2.join(''))
                switch (obj.value3[0]){
                    case '+':
                        out = value2 + value1
                        break;
                        
                    case '-':
                        out = value1 - value2
                        break
                    case '*':
                        out = value2 * value1
                        break
                    case '/':
                       if(value2 === 0){
                         alert('value by divide can`t be 0')
                       }else {
                           out = value1 / value2
                           break
                       }
                       case '%':
                           out = (value1*value2)/100
                           break
                       case '√':
                           out = Math.pow(value1) 
                           break  
                }

                input.innerHTML = out;
               
                obj = {value1: [], value2: [], value3: []}
                return out;
            }
            if(e.target.value === "AC"){
                input.innerHTML = "";
                obj = {value1: [], value2: [], value3: []}
            }
            if(e.target.value === "C"){
               if(obj.value3.length === 0){
                obj['value1'].pop(obj['value1'].length-2,obj['value1'].length)
                input.innerHTML = obj["value1"].join('');
                console.log(obj['value1'])
               } 
               else{
                obj['value2'].splice(obj['value2'].length-2,obj['value2'].length)
                input.innerHTML = obj["value2"].join('');
               }              
            }
            if(e.target.value === "√"){
                console.log(obj['value1'].join(''))
                input.innerHTML = Math.pow(obj['value1'].join(''),0.5)
            }
        });
    });
}

button();

