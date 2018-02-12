//alert("welcome to this class");

window.addEventListener("click",colorChange); 


function colorChange(){

    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' 
    + Math.round(Math.random() * 255) + ','
    + Math.round(Math.random() * 255) + ')';


}

function isNumberKey(evt){
            var charCode = (evt.which) ? evt.which : event.keyCode
            return !(charCode > 31 && (charCode < 48 || charCode > 57));
        }
            
function myCalculation(){
    var DownPayment = document.getElementById("DownPayment").value;
    var Months = document.getElementById("Months").value;
    var Total = 0;
    var Result = document.getElementById("Result");
    
    console.log(DownPayment);
    console.log(Months);
    console.log(Total);
    
    Total = (50000-DownPayment)/Months;
    console.log(Total);
    
    Result.innerHTML = Total.toFixed(2);
}