document.getElementById("year").textContent= new Date().getFullYear()

function contact(event){
    event.preventDefault();
    let emri = document.getElementById("emri").value;
    let mbiemri = document.getElementById("mbiemri").value;
    let email = document.getElementById("e-mail").value;
    let coment = document.getElementById("Coment").value;
    let sms = document.getElementById("sms");
   let pattern=/^[a-zA-Z\s-]+&/;
   if(!pattern.test(emri)){
    sms.textContent = "Vendos vetem karaktere per emrin dhe mbiemrin";
   }
    
 else if(emri == ""&& mbiemri == "" && email == ""&& coment ==""){
sms.textContent="Ploteso te gjitha fushat"
} else{
sms.textContent="faleminderit";
}

}