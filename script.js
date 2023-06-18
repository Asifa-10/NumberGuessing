const a= Math.floor(Math.random()*100);
if (a==0) {
    a=1;
}
let sum=10;
let b= document.getElementById("number");
check.addEventListener("click",()=>{
    let btn= document.getElementById("restart");
    b=document.getElementById("number").value;
    if (a==b) {
        document.getElementById("update").innerHTML="Congratulations!!✨🎉 You guess it correct🎉✨";
        btn.style.display="block";
    }else if (a>b) {
        sum--;
        document.getElementById("prevguess").innerHTML+=(b+",");
        document.getElementById("remguess").innerHTML=sum;
        document.getElementById("update").innerHTML="Low, try again!!";    
    }else{
        sum--;
        document.getElementById("prevguess").innerHTML+=(b+",");
        document.getElementById("remguess").innerHTML=sum;
        document.getElementById("update").innerHTML="High, try again!!";
    }
    if (sum==0) {
        document.getElementById("update").innerHTML=`Number is ${a},let's do again`;
        setTimeout(() =>{
            location.reload();
        },1000);
    }
    restart.addEventListener("click",()=>{
        location.reload();
    })
})
b.addEventListener("keyup",function(event){
    if (event.keyCode===13) {
        event.preventDefault();
        document.getElementById("check").click();
    }
})