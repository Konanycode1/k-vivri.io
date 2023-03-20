document.addEventListener('DOMContentLoaded', ()=>{
    function listePerso() {
        let listPerso = localStorage.getItem("perso");
        listPerso = JSON.parse(listPerso);
        listPerso.forEach(element => {
            let div = document.createElement('div');
            let adminList = document.querySelector(".adminList");
            div.className ="listen";
            let text = `<h3>${element.nom} ${element.prenom}</h3>
                        <p class="">${element.dateAjout}</p>`
            div.innerHTML = text;
            adminList.appendChild(div);

        });
        
    }
    listePerso()

    function tabTacheTerminer() {
        let valeur = localStorage.getItem('tache');
        let table = document.querySelector('.TacheTerminer');
        valeur = JSON.parse(valeur);
        valeur.map(element => {
            
            if( element.dateTermine !== "En cours"){
                let tr = document.createElement('tr');
                let text = `<td class="tache">${element.tache}</td>
                <td class="dateAjout">${element.dateAjout}</td>
                <td class="dateTermine">${element.dateTermine}</td>
                <td><a href="#m1-o" class="link-1" id="m1-c">Détails</a></td>
                <td>
                <svg width="20px" height="20px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="">

                <g id="SVGRepo_bgCarrier" stroke-width="0">
                
                <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="3.168" fill="red" strokewidth="0"/>
                
                </g>
                
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M14 12V17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4 7H20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
                
                </svg></td>`;
                tr.innerHTML = text;
                table.appendChild(tr)
            }
           
            
        });
        
        
    }
    tabTacheTerminer();

    function detail(){
        let detail =  document.querySelectorAll('.link-1');

        detail.forEach(clic => clic.addEventListener("click", ()=>{
            let parent = clic.closest("tr");
            let tache = parent.querySelector('.tache').textContent;
            let dateTerm = parent.querySelector(".dateTermine").textContent
            let perso = localStorage.getItem("perso");
            perso = JSON.parse(perso);
            perso.map(ele => {
                console.log(ele);
                if (ele.attache === tache) {
                    let title = document.querySelector(".modal__title");
                    title.textContent = ele.attache
                    let miTable = document.querySelector(".miTable");
                    let tr = document.createElement('tr');
                    let text = `
                    <td>${ele.nom} ${ele.prenom}</td>
                    <td>${ele.attache}</td>
                    <td>10 000 Fr Cfa</td>
                    <td>10 000    Fr Cfa</td>
                    <td>10 000 Fr Cfa</td>`
                    tr.innerHTML = text;
                    miTable.appendChild(tr)
                }
                else{
                    return ele
                }
            })

        }))
    }
    detail();


})