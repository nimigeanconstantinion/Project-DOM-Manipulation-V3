let btnsubmit = document.querySelector(".buton");
let hides = document.getElementById("hide");
let divin = document.getElementsByClassName("invitati")[0];
function newCard(txt) {
    let newc = document.createElement("div");
    newc.className = "card";
    let p = document.createElement("p");
    p.textContent = txt;
    newc.append(p);
    let chk = document.createElement("input");
    chk.type = "checkbox";
    chk.name = "conf";
    let lab = document.createElement("label");
    lab.textContent = "Confirm  ";
    lab.for = "conf";
    newc.append(lab);
    newc.append(chk);
    let divbut =document.createElement("div");
    divbut.className = "butoane";

    let btned = document.createElement("button");
    btned.className="btn edit"
    btned.textContent = "edit";
    let btnrem = document.createElement("button");
    btnrem.textContent = "remove";
    btnrem.className = "btn rem";
    divbut.append(btned);
    divbut.append(btnrem);
    newc.append(divbut);
    newc.style.border = "1px solid rgb(168, 172, 173)";
    let diva = document.getElementsByClassName("invitati")[0];
    diva.append(newc);

}
    

btnsubmit.addEventListener("click", () => {
    
    let nume = document.getElementById("inputName");
    if (nume.value) {
        newCard(nume.value);
    }
    nume.value = "";

})

hides.addEventListener("click",()=>{
    if (hides.checked) {
        let objDiv = document.getElementsByClassName("invitati")[0];
        let arinv = objDiv.children;
        let n = objDiv.children.length;
        for (let i = 0; i < n; i++) {
            if (!arinv[i].children[2].checked) {
                arinv[i].style.display = "none";
            }
        }
    } else {
        let objDiv = document.getElementsByClassName("invitati")[0];
        let arinv = objDiv.children;
        let n = objDiv.children.length;
        for (let i = 0; i < n; i++) {
            if (!arinv[i].children[2].checked) {
                arinv[i].style.display = "block";
            }
        }
        
    }

})

divin.addEventListener("click", (e) => {
    
    let elem = e.target;
    if (elem.textContent == "remove") {
        divin.removeChild(elem.parentNode.parentNode);
        
    }
    if (elem.textContent == "edit") {
        let elm = elem.parentNode.parentNode.children[0];
        let cardWidth = elem.parentNode.parentNode.offsetWidth;
        console.log("latimea cardului=" + cardWidth.toString());
        let texttype = document.createElement("input");
        texttype.type = "text";
        texttype.className = "chname";
        texttype.value = elm.textContent;
        
        texttype.style.width = (cardWidth * 0.96).toString() + "px";
        console.log((cardWidth * 0.96).toString() + "px");
        texttype.style.size = "463.59px";
        elem.parentNode.parentNode.replaceChild(texttype,elm);
        texttype.style.border = "1px solid gray";
        let elm2 = elem.parentNode.parentNode.children[0];
        elem.parentNode.parentNode.style.border = "1px solid rgb(20,257,221)";
        elm2.focus();

        
         elm2.addEventListener("focusout", function(){
             let p = document.createElement("p");
             p.textContent = elm2.value;
             elem.parentNode.parentNode.replaceChild(p, elm2);
             elem.parentNode.parentNode.style.border = "1px solid rgb(168, 172, 173)";
             elm.parentNode.parentNode.style.width = cardWidth + "px";
        });
           
    }


})
