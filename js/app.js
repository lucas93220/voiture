document.addEventListener("DOMContentLoaded", e => {
    // Load the JSON file
    fetch('../api/voitures.json').then(response => response.json()).then(data => {
        // Get the voiture elements
        const voitures = data.voiture;

        // Create an HTML list
        const list = document.querySelector("ul");

        // Create list items for each voiture
        for (let i = 0; i < voitures.length; i++) {
            const voiture = voitures[i];
            const listItem = document.createElement('li');
            listItem.innerHTML = `<figure>
                                    <figcaption>
                                        <ul>
                                        <li class="list-primary">Marque : ${voiture.marque}</li>
                                        <li class="list-secondary">Année : ${voiture.annee}</li>
                                        <li class="list-primary">Type : ${voiture.type}</li>
                                        <li class="list-secondary">Etat : ${voiture.etat}</li>
                                        <li class="list-primary">Description : ${voiture.description}</li>
                                        <li class="list-secondary image"><img src="${voiture.image}" alt="${voiture.nom}"></li>
                                        </ul>
                                    </figcaption>
                                </figure>`;
            list.appendChild(listItem);
        }

        // Add the list to the HTML page
        const ul = document.getElementsByTagName('ul')[0];
        ul.appendChild(list);
    }).catch(error => console.error(error));
});