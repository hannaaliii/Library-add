// const signupdata=require('../../src/model/signupdata');
let email=document.getElementById("email");
let pw=document.getElementById("pw");
var stg=0;
var succ=0;

function validpw(){
    if(pw.value.trim()==""){
        res.removeAttribute("style");
        res.innerText="";
    }
    var l=pw.value.length;
    var p4=/^[a-z]+$/;
    var p3=/^[A-Z]+$/;
    var p2=/^[0-9]+$/;
    var p1=/^[@#-\.]+$/;
    // console.log(l);
    var st=0;
    var stcaps=0;
    var stno=0;
    var stspl=0;
    for(var i=0;i<l;i++){
        var c="";
        c=pw.value.charAt(i);
        console.log(c+" ");

        if(p4.test(c)){
            st++;
        }
        if (p3.test(c)) {
            stcaps++;
        }
        if (p2.test(c)) {
            stno++;
        }
        if(p1.test(c)){
            // console.log("test");
             stspl++;
        }
       
    if(l<5){
        res.innerText="password should contain atleast 5 characters ";
        res.style.backgroundColor="red";
    }
    else{
        res.removeAttribute("style");
        res.innerText="";
    if((st>0)&&(stcaps>0)&&(stno>0)&&(stspl>0)){
        // console.log("very strong");
        stg++;
        // res.innerText="very strong password";
        // res.style.backgroundColor="green";
    }
    else if(((st>0)&&(stcaps>0)&&(stno>0))||((st>0)&&(stcaps>0)&&(stspl>0))||((st>0)&&(stno>0)&&(stspl>0))||((stcaps>0)&&(stno>0)&&(stspl>0))){
        // console.log("strong");
        stg++;
        // res.innerText="strong";
        // res.style.backgroundColor="blue";
    }
    else if(((st>0)&&(stcaps>0))||((st>0)&&(stno>0))||((st>0)&&(stspl>0))||((stcaps>0)&&(stno>0))||((stcaps>0)&&(stspl>0))||((stno>0)&&(stspl>0))){
        // console.log("good");
        // res.innerText="good";
        // res.style.backgroundColor="orange";
    }
    else{
        // console.log("weak");
        // res.innerText="weak";
        // res.style.backgroundColor="red";
    }

    }
    }
}

function validate(){

    //email validation
    if(email.value.trim()==""){
        alert("enter email");
        email.focus();
        return false;
    }
    else{
        var regmail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        if(regmail.test(email.value)){
            console.log("valid email");
            succ++;
        }
        else{
            alert("invalid email");
            email.focus();
            return false;
        }
    }

    //password validation
    if(pw.value.trim()==""){
        alert("password not entered");
        pw.focus();
        return false;
    }
    else{
        if(stg>0){
            console.log("password valid");
            succ++;
        }
        else{
            alert("password not strong : Invalid");
            pw.focus();
            return false;
        }
    }
    console.log("succ="+succ);
   //final validation
   if(succ==2){
    console.log("final :"+succ);
    return true;
    }
    else{
     return false
    }
}