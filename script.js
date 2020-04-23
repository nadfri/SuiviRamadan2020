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
const spanPoids = document.querySelectorAll(".poids");


/************Mise à jour des données *********************/
for (let i=0;i<31;i++)
{
    spanPoids[i].textContent = tab_Storage[i].poids;
    spanValid[i].textContent = tab_Storage[i].valid;
    box[i].style.backgroundColor = tab_Storage[i].color;
}

/***********Box 0****************************************/



box[0].onclick = () =>{
    popUp0.style.display = "block";
    inputPoids0.focus();
};

form0.onsubmit = () =>{
    spanPoids[0].textContent = `${inputPoids0.value} kgs`;
    popUp0.style.display = "none";
    tab_Storage[0].poids = spanPoids[0].textContent;
    localStorage.setItem("tab_Storage", JSON.stringify(tab_Storage));

    return false;
};

/******************Les boxs****************************** */
for(let i=1;i<31;i++)
{
    box[i].onclick = () =>
    {
        inputPoids.value = "";

        popUp.style.display = "block";
        oui.onclick = () =>{   
            box[i].style.backgroundColor = "rgba(0,255,0,1)";
            spanValid[i].textContent= "✔️";
            tab_Storage[i].valid = "✔️";
            divJeune.style.display = "none";
            divPoids.style.display = "block";
            inputPoids.focus();
        };
    

        non.onclick = () =>{   
            box[i].style.backgroundColor = "rgba(255,165,0,1)";
            spanValid[i].textContent= "❌";
            tab_Storage[i].valid = "❌";
            divJeune.style.display = "none";
            divPoids.style.display = "block";
            inputPoids.focus();
        };

        form.onsubmit = () =>{
            spanPoids[i].textContent = `${inputPoids.value} kgs`;
            tab_Storage[i].poids = spanPoids[i].textContent;
            tab_Storage[i].color = box[i].style.backgroundColor;

            popUp.style.display = "none";
            divJeune.style.display = "block";
            divPoids.style.display = "none";

            localStorage.setItem("tab_Storage", JSON.stringify(tab_Storage));

            return false;
        };

    };

}









/*********************************** */
};