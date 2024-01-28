let mode =0;

function changeMode(){
    switch(mode){
        case 0:
            mode = 1;
            document.body.style.backgroundColor = "#010126"
            document.getElementById("mainContainer").style.borderColor = "white";
            document.getElementById("pst1").style.borderColor = "white";
            document.getElementById("pst2").style.borderColor = "white";
            document.getElementById("pst3").style.borderColor = "white";
            document.body.style.color = "white";
            document.getElementById("home-icon").style.color = "white";
            document.getElementById("bulb-icon").style.color = "white";
            document.getElementById("bulb-icon").className = "bi bi-lightbulb"
            break;
            
        case 1:
            mode = 0;
            document.body.style.backgroundColor = "white"
            document.getElementById("mainContainer").style.borderColor = "black";
            document.getElementById("pst1").style.borderColor = "black";
            document.getElementById("pst2").style.borderColor = "black";
            document.getElementById("pst3").style.borderColor = "black";
            document.body.style.color = "black";
            document.getElementById("home-icon").style.color = "black";
            document.getElementById("bulb-icon").style.color = "black";
            document.getElementById("bulb-icon").className = "bi bi-lightbulb-fill"
            break;    
    }
}