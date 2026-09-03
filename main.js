const first=document.getElementById("first");
const operation=document.getElementById("operation");
const next=document.getElementById("next");
const answer=document.getElementById("answer");
const max=999999999999999n;
const maxDigits=15;
var state="first start";

function typeDigit(digit){
    if(state=="first start"){
        first.innerHTML=digit;
        state="first";
    }else if(state=="first"){
        if(first.innerHTML!="0")
            if((first.innerHTML+digit).length<=maxDigits)
                first.innerHTML+=digit;
    }else if(state=="next start"){
        next.innerHTML=digit;
        state="next";
    }else if(state=="next"){
        if(next.innerHTML!="0")
            if((next.innerHTML+digit).length<=maxDigits)
                next.innerHTML+=digit;
    }
}

function typeOperation(theOperation){
    if(state=="first"){
        operation.innerHTML=theOperation;
        state="next start";
    }
}

function calculate(){
    if(state=="next"){
        state="answer";

        const firstNumber=BigInt(first.innerHTML);
        const theOperation=operation.innerHTML;
        const nextNumber=BigInt(next.innerHTML);

        if(theOperation=="+"){
            if(firstNumber+nextNumber<=max)
                answer.innerHTML=firstNumber+nextNumber;
            else
                answer.innerHTML="Can't Display";
        }else if(theOperation=="-"){
            if(firstNumber>=nextNumber)
                answer.innerHTML=firstNumber-nextNumber;
            else
                answer.innerHTML="Error";
        }else if(theOperation=="×"){
            if(firstNumber*nextNumber<=max)
                answer.innerHTML=firstNumber*nextNumber;
            else
                answer.innerHTML="Can't Display";
        }else if(theOperation=="÷"){
            if(nextNumber==0n)
                answer.innerHTML="Error";
            else{
                if(firstNumber%nextNumber==0n)
                    answer.innerHTML=firstNumber/nextNumber;
                else{
                    answer.style.height="180px";
                    answer.innerHTML="Quotient: "+firstNumber/nextNumber+"<br>Remainder: "+firstNumber%nextNumber;
                }
            }
        }
    }
}

function deleteAll(){
    first.innerHTML="";
    operation.innerHTML="";
    next.innerHTML="";
    answer.innerHTML="";
    answer.style.height="90px";
    state="first start";
}