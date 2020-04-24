window.onload = () =>{
    "use strict";
/*********************************** */
let tab_Storage;

if(JSON.parse(localStorage.getItem('tab_Storage') != null))
    tab_Storage = JSON.parse(localStorage.getItem('tab_Storage'));
else
{
    tab_Storage = [];
    for(let i=0;i<31;i++) tab_Storage[i] = {poids: null, valid: "✔", color:null};
    popUp0.style.display = "block";
    inputPoids0.focus();

}

const box = document.querySelectorAll(".box");
const spanValid = document.querySelectorAll(".valid");
const spanPoids = document.querySelectorAll(".kgs");
let countOK = 0;
let countNOK = 0;
let countKgs = 0;



/************Mise à jour des données *********************/
for (let i=0;i<31;i++)
{
    spanPoids[i].textContent = tab_Storage[i].poids;
    spanValid[i].textContent = tab_Storage[i].valid;
    box[i].style.backgroundColor = tab_Storage[i].color;
    if(spanValid[i].textContent == "✔️") countOK++;
    else if ((spanValid[i].textContent == "❌")) countNOK++;
}

nbOK.textContent = countOK;
nbNOK.textContent = countNOK;
poidsUpdate();

function poidsUpdate()
{
    let tabKgs = tab_Storage.filter(el => el.poids != null);
    
    if(tabKgs.length < 1) nbKgs.textContent = "0";
    else
    {
        countKgs = tabKgs[0].poids - tabKgs[tabKgs.length-1].poids;
        nbKgs.textContent = countKgs.toFixed(1);
    }
}

/***********Box 0****************************************/
box[0].onclick = () =>{
    content.style.pointerEvents = "none"; //desactive le clic en dehors de la bulle
    popUp0.style.display = "block";
    inputPoids0.focus();
};

form0.onsubmit = () =>{
    spanPoids[0].textContent = inputPoids0.value;
    popUp0.style.display = "none";
    tab_Storage[0].poids = spanPoids[0].textContent;
    localStorage.setItem("tab_Storage", JSON.stringify(tab_Storage));

    content.style.pointerEvents = "auto"; //réactive le click sur la page

    return false;
};

/******************Les boxs****************************** */
for(let i=1;i<31;i++)
{
    box[i].onclick = () =>
    { 
            content.style.pointerEvents = "none";
            inputPoids.value = "";

            popUp.style.display = "block";
            oui.onclick = () =>{   
                box[i].style.backgroundColor = "rgba(0,255,0,0.5)";
                spanValid[i].textContent= "✔️";
                tab_Storage[i].valid = "✔️";
                divJeune.style.display = "none";
                divPoids.style.display = "block";
                inputPoids.focus();
            };

            closePop.onclick = () =>{
                popUp.style.display = "none";
                content.style.pointerEvents = "auto";
            };

            effacer.onclick = () => {
                spanValid[i].textContent = "✔";
                spanPoids[i].textContent = null;
                box[i].style.backgroundColor = "";
                tab_Storage[i].valid = "✔";
                tab_Storage[i].poids = null;
                tab_Storage[i].color = box[i].style.backgroundColor;
                localStorage.setItem("tab_Storage", JSON.stringify(tab_Storage));

                popUp.style.display = "none";
                content.style.pointerEvents = "auto";
            };
        

            non.onclick = () =>{   
                box[i].style.backgroundColor = "rgba(255,165,0,0.5)";
                spanValid[i].textContent= "❌";
                tab_Storage[i].valid = "❌";
                divJeune.style.display = "none";
                divPoids.style.display = "block";
                inputPoids.focus();
            };


            form.onsubmit = () =>{
                spanPoids[i].textContent = inputPoids.value;
                tab_Storage[i].poids = spanPoids[i].textContent;
                tab_Storage[i].color = box[i].style.backgroundColor;
                poidsUpdate();


                popUp.style.display = "none";
                divJeune.style.display = "block";
                divPoids.style.display = "none";
                content.style.pointerEvents = "auto"; 

                localStorage.setItem("tab_Storage", JSON.stringify(tab_Storage));

                return false;
            };
    };

}

/***************Comptage des jours et kilos */









/*********************************** */
};