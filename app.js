
// Modal
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
    // Ouvre le modal d'ajout avec les entrées prénom, nom, email, téléphone, âge et moyen
    const modal = document.getElementById("addModal");
    modal.style.display = "block";

    // Ferme le modal lorsque l'utilisateur clique sur le bouton annuler
    const cancelButton = document.getElementById("cancelAddButton");
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none";
    });
    
});

const tableBody = document.getElementById("table-body");
let people = JSON.parse(localStorage.getItem("people")) || [];

const renderTable = () => {
    tableBody.innerHTML = "";
    people.forEach((person, index) => {
        const { firstName, lastName, } = person;
        const row = `
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>     
        <td>
        <div id="btnn">
          <button class=btn1  onclick="editPerson(${index})">Modifier</button>
          <button class=btn2 onclick="deletePerson(${index})">Supprimer</button>
          </div>
          </td>
      </tr>
    `;
        tableBody.innerHTML += row;
    });
    localStorage.setItem("people", JSON.stringify(people));
};



// Fonction pour mettre à jour le tableau
const addPerson = () => {
    const firstNameField = document.getElementById("firstName");
    const lastNameField = document.getElementById("lastName");
    const firstName = firstNameField.value.trim();
    const lastName = lastNameField.value.trim();
    if (firstName === "" || lastName === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    people.push({ firstName, lastName });
    // Masquer le modal après avoir ajouté une personne
    document.getElementById("addModal").style.display = "none";
    //vider les champs du formulaire
    firstNameField.value = "";
    lastNameField.value = "";
    renderTable();
  };
  




// Cette fonction invite l'utilisateur à entrer de nouvelles valeurs  
// et la fonction renderTable est appelée pour mettre à jour le tableau avec les nouvelles valeurs.
 const editPerson = index => {
      const firstName = prompt("Entrez le nouveau prénom :", people[index].firstName);
     const lastName = prompt("Entrez le nouveau nom :", people[index].lastName);
    
    people[index] = { firstName, lastName, };
    renderTable();
  };

// Cette fonction supprime le people tableau à l'aide de la méthode splice
const deletePerson = index => {
    people.splice(index, 1);
    renderTable();
};

renderTable();














// Modifier le formulaire


// const editPerson = index => {
//     const person = people[index];
//     const firstNameInput = document.getElementById("firstName");
//     const lastNameInput = document.getElementById("lastName");
//     const modal = document.getElementById("addModal");
//     //  var btn = document.getElementById("addButton")
//     //  btn.innerHTML="modifier";

 
    
//     // Pré-remplir le formulaire avec les informations de la personne à modifier
//     firstNameInput.value = person.firstName;
//     lastNameInput.value = person.lastName;
    
    
//     // Modifier le texte et l'événement du bouton Ajouter pour mettre à jour la personne
//     const addButton = document.getElementById("addButton");
//     addButton.textContent = "Modifier";
//     addButton.removeEventListener("click", addPerson);
//     addButton.addEventListener("click", () => {
//         person.firstName = firstNameInput.value;
//         person.lastName = lastNameInput.value;
//         modal.style.display = "none";
//         renderTable();
//     });
    
//     // Afficher le modal de modification
//     modal.style.display = "block";
// };




