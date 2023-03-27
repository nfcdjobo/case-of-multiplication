const solution = document.querySelectorAll("span[refer='solution']");
solution.forEach(cle => cle.addEventListener("mousedown", bordure));
solution.forEach(cle => cle.addEventListener("mousemove", pasBordure));
function bordure(event){
    document.querySelectorAll(".liste-result").forEach(cle=>{
        cle.style.border = "2px dotted black";
    })
    
    
    
    console.log(event)
}

function pasBordure(event){
    document.querySelectorAll(".liste-result").forEach(cle => {
        document.getElementById(event.target.id).style.transform = `translate(${window.clientX}, ${window.clientY})`;
        cle.style.border = "none";
        console.log(event.clientX, event.clientY)
    })
}