function buttonclick(val){
    
    document.getElementById("screen").value+=val;
}
function clearDisplay(){
    document.getElementById("screen").value="";
}
function equalDisplay(){
    var text=document.getElementById("screen").value;
    var result=eval(text)
    document.getElementById("screen").value=result
}
