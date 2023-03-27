const solution = document.querySelectorAll("*");
solution.forEach(cle => cle.addEventListener("mousemove", bordure));
function bordure(event){
    
    if (event.target.id.includes("solution")){
        event.target.addEventListener("mousemove", deplacer)
        function deplacer(eve){
            solution.forEach(cle => cle.style.cursor = "move");
            event.target.style.transform = "translate(" + eve.clientX + "px," + eve.clientY + "px)";
            // event.target.style.transform = "translateY(" + event.clientY + "px)";    
        }


        document.querySelectorAll(".liste-result").forEach(cle => {
            cle.style.border = "2px dotted black";
        })
        document.querySelector(".content").style.cursor = "move";
       

    }
    
}


