let name=document.getElementById("name");
let age=document.getElementById("age");
let rm=document.getElementById("rm");
let rf=document.getElementById("rf");
let ro=document.getElementById("ro");
let occu=document.getElementById("occu");
let ph=document.getElementById("ph");
let email=document.getElementById("email");
let pw=document.getElementById("pw");
let res=document.getElementById("res");
let rpw=document.getElementById("rpw");
let res1=document.getElementById("res1");
var eq=0;
var stg=0;
var succ=0;

    //make data in name input field upper case
    function caps(){
        name.value=name.value.toUpperCase();
    }

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
    if((st>0)&&(stcaps>0)&&(stno>0)&&(stspl>0)){
        // console.log("very strong");
        stg++;
        res.innerText="very strong password";
        res.style.backgroundColor="green";
    }
    else if(((st>0)&&(stcaps>0)&&(stno>0))||((st>0)&&(stcaps>0)&&(stspl>0))||((st>0)&&(stno>0)&&(stspl>0))||((stcaps>0)&&(stno>0)&&(stspl>0))){
        // console.log("strong");
        stg++;
        res.innerText="strong";
        res.style.backgroundColor="blue";
    }
    else if(((st>0)&&(stcaps>0))||((st>0)&&(stno>0))||((st>0)&&(stspl>0))||((stcaps>0)&&(stno>0))||((stcaps>0)&&(stspl>0))||((stno>0)&&(stspl>0))){
        // console.log("good");
        res.innerText="good";
        res.style.backgroundColor="orange";
    }
    else{
        // console.log("weak");
        res.innerText="weak";
        res.style.backgroundColor="red";
    }

    }
    }
}

function validrpw(){
    res.removeAttribute("style");
    res.innerText="";
    if(rpw.value.trim()==""){
        res1.removeAttribute("style");
        console.log("rpw");
        res1.innerText="";
    }
    if(rpw.value==pw.value){
         eq++;
        res1.innerText="";
        res1.removeAttribute("style");
    }
    else{
        res1.innerText="re entered password not same ";
        res1.style.border="2px solid red";
    }
}

function validate(){
    //name validation
    if(name.value.trim()==""){
        alert("field name is empty");
        name.focus();
        return false;
    }
    else{
        var regnm=/^[A-Za-z]+$/;
        if(regnm.test(name.value)){
            console.log("name valid");
            succ++;
        }
        else{
            alert("invalid name");
            name.focus();
            return false;
        }
    }

    //age validation
    if(age.value==""){
        alert("age not entered");
        age.focus();
        return false;
    }
    else{
        var regage=/^[0-9]{1,2}$/;
        if(regage.test(age.value)){
            console.log("age valid");
            succ++;
        }
        else{
            alert("invalid age");
            age.focus();
            return false;
        }
    }

    //gender validation
    if(rm.checked==false&&rf.checked==false&&ro.checked==false){
        alert("gender not selected");
        return false;
    }
    else{
        console.log("valid gender");
        succ++;
    }

    //occupation validation
    if(occu.value==""){
         alert("occupation not selected");
         occu.focus();   
    }
    else{
        console.log(occu.value+" valid occupation");
        succ++;
    }

    //email validation
    if(email.value==""){
        alert("email not entered");
        email.focus();
        return false;
    }
    else{
        var regemail=/^([a-zA-Z0-9\.-]+)@([A-Za-z0-9-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        if(regemail.test(email.value)){
            console.log("valid email");
            succ++;
        }
        else{
            alert("invalid email");
            email.focus();
            return false;
        }
    }
    
    //phone number validation
    if(ph.value==""){
        alert("phone number not entered");
        ph.focus();
        return false;
    }
    else{
        var regph=("^(?=.*[0-9])");
        if(regph.test(ph.value)){
            console.log("phone no valid");
            succ++;
        }
        else{
            alert("invalid phone number entry");
            ph.focus();
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
            alert("password not strong");
            pw.focus();
            return false;
        }
    }

    //re entering password
    if(rpw.value.trim()==""){
        alert("password not re entered");
        rpw.focus();
        return false;
    }
    else{
        if(eq==0){
            alert("password doesnot match");
            rpw.focus();
            return false;
        }
        else{
            console.log("re entered password matched");
            succ++;
        }
    }

    //final validation
    if(succ==8){
        console.log("final :"+succ);
        return true;
    }
    else{
        return false
    }
}