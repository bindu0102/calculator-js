let output = document.getElementById("INPUT")
function show(num) {
   output.value+=num
}
function calculate(){
    try{
    output.value=eval(output.value)
}
catch{
    output.value="Error!!!"
}
}
function Clear(){
    output.value=""
}
function Remove(){
    output.value=output.value.slice(0,-1)
}
