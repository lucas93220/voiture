
// async for API https://picsum.photos
/* https://picsum.photos/v2/list?page=28&limit=500 */

const loadContent = async () => {
    const results = await fetch("../api/voitures.json", {
        cache: 'no-cache'
    });

    const data = await results.json();
    console.table(data);

    /* itération pour l'affichage des noms */

    // for (let index of data.voiture) {
    //     console.log(index.marque+' '+index.annee);
    // }
    // Create an HTML list
    const list = document.querySelector("ul");

    // Create list items for each voiture
    for (let i = 0; i < voitures.length; i++) {
        const voiture = voitures[i];
        const listItem = document.createElement('li');
        listItem.innerHTML = `<figure>
                                <figcaption>
                                    <ul>
                                    <li>Marque : ${voiture.marque}</li>
                                    <li>Année : ${voiture.annee}</li>
                                    <li>Type : ${voiture.type}</li>
                                    <li>Etat : ${voiture.etat}</li>
                                    <li>Description : ${voiture.description}</li>
                                    <img src="${voiture.image}" alt="${voiture.nom}">
                                    </ul>
                                </figcaption>
                            </figure>`;
        list.appendChild(listItem);
    }

    // Add the list to the HTML page
    const ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(list);
}

loadContent();