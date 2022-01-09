var currentNumberWrapper =document.getElementById("currentNumber");
var currentNumber=0;
function increment(num)
{
    if(currentNumber<100)
    {
        if((currentNumber>=90 && num==10) || currentNumber==99)
        {
            document.getElementById("warning").innerHTML=("Maior valor possível atingido")
            currentNumber=100;
            currentNumberWrapper.innerHTML = currentNumber;
        }else
        {
            document.getElementById("warning").innerHTML=("")
            currentNumber=currentNumber+num;
            currentNumberWrapper.innerHTML = currentNumber;
        }
   
    }
    if(currentNumber>=0)
    {
        currentNumberWrapper.addEventListener("click",turnBlack());
    }
}

function decrement(num)
{
    if(currentNumber>(-100))
    {
        if((currentNumber<=-90 && num==10) || currentNumber==-99)
        {
            document.getElementById("warning").innerHTML=("Menor valor possível atingido")
            currentNumber=-100;
            currentNumberWrapper.innerHTML = currentNumber;
        }else
        {
            document.getElementById("warning").innerHTML=("")
            currentNumber=currentNumber-num;
            currentNumberWrapper.innerHTML = currentNumber;
        }
    }

    if(currentNumber<0)
    {
       currentNumberWrapper.addEventListener("click",turnRed());
    }

}

function reset()
{
    currentNumber=0;
    currentNumberWrapper.innerHTML = currentNumber;
    document.getElementById("warning").innerHTML=("Contador reiniciado")
}

function turnRed()
{
    currentNumberWrapper.style.color="red";
    console.log("hello world!");
}
function turnBlack()
{
    currentNumberWrapper.style.color="black";
    console.log("hello world!");
}