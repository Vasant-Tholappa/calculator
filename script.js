function add(a,b)
{
    let p = Number(a);
    let q = Number(b);
    return p+q;
}

function subtract(a,b)
{
    let p = Number(a);
    let q = Number(b);
    return p-q;
}

function multiply(a,b)
{
    let p = Number(a);
    let q = Number(b);
    return p*q;
}

function divide(a,b)
{
    let p = Number(a);
    let q = Number(b);
    
    if(q === 0)
    return "error";

    return (p/q).toFixed(2);
}

function operate(operator,a,b)
{
    if(operator === "+")
    {
        add(a,b);
    }

    else if(operator === "-")
    {
        subtract(a,b);
    }

    else if(operator === "*")
    {
        multiply(a,b);
    }

    else if(operator === "/")
    {
        divide(a,b);
    }
}




const output = document.querySelector("#output");

let x = output.textContent;

let num1 = "";
let num2 = "";
let op = "";
let opFlag = 0;


const buttons = document.querySelectorAll(".bt");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const idName = button.id;
            const dig = button.textContent;

            if(opFlag == 0 && !isNaN(idName[1]))
            {
                num1 += dig;
                console.log(num1);
                output.textContent = num1;
            }

            else if(opFlag == 1 && !isNaN(idName[1]))
            {
                num2 += dig;
                console.log(num2);
                output.textContent = num1 + op + num2;
            }

            else if(num2 == "" && (idName[1] == "+" || idName[1] == "-" || idName[1] == "x" || idName[1] == "%"))
            {
                opFlag = 1;
                op = idName[1];
                console.log(op);
                output.textContent = num1 + button.textContent;
            }

            else if(num1 !== "" && num2!== "" && opFlag != 0)
            {
                let y = button.textContent;

                let result;

                if(op == "+")
                {
                    result = add(num1,num2);
                }

                else if(op == "-")
                {
                    result = subtract(num1,num2);
                }

                else if(op == "x")
                {
                    result = multiply(num1,num2);
                }

                else if(op == "%")
                {
                    result = divide(num1,num2);
                }

                if(result === "error")
                {
                    alert("Can't divide number by 0, enter another number!")
                    num2 = "";
                    output.textContent = num1 + op;
                }
                
                else
                {

                    
                    num1 = result;
                    num2 = "";
                    op = "";

                    if(y == "+" || y == "-" || y=="x" || y=="/")
                    {
                        op = y;
                        output.textContent = num1 + op;
                    }

                    else if(y == "=")
                    {
                       output.textContent = num1;
                    }
                }
                

            }
            
        });
    });

