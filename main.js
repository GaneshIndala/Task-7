var stringValue="Ganesh";
var numberValue=176896;
var booleanValue= true;
var nullValue= "null";
var objectValue={
    city:"Visakhapatnam",
    state:"Andhra Pradesh",
    pincode:530048
};
var arrayValue=['Maths','Physics','Chemistry'];

function string(){
    document.getElementById("label1").textContent=stringValue;
}
function number(){
    document.getElementById("label2").textContent=numberValue;
}
function boolean(){
    document.getElementById("label3").textContent=booleanValue;
}
function nullDatatype(){
    document.getElementById("label4").textContent=nullValue;
}
function object(){
    document.getElementById("label5").textContent=JSON.stringify(objectValue);
}
function array(){
    document.getElementById("label6").textContent=JSON.stringify(arrayValue);
}