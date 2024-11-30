// Données des verbes
const verbs = [
    { base: "abide", past: "abode", participle: "abode", translation: "demeurer" },
    { base: "awake", past: "awoke", participle: "awoken", translation: "(se) réveiller, aussi awake/awoke/awoke" },
    { base: "be", past: "was/were", participle: "been", translation: "être" },
    { base: "bear", past: "bore", participle: "borne", translation: "porter/supporter/soutenir" },
    { base: "beat", past: "beat", participle: "beaten", translation: "battre" },
    { base: "become", past: "became", participle: "become", translation: "devenir" },
    { base: "beget", past: "begat", participle: "begotten", translation: "engendrer, aussi beget/begot/begotten" },
    { base: "begin", past: "began", participle: "begun", translation: "commencer" },
    { base: "bend", past: "bent", participle: "bent", translation: "se courber" },
    { base: "bereave", past: "bereft", participle: "bereft", translation: "déposséder/priver" },
    { base: "bring", past: "brought", participle: "brought", translation: "apporter" },
    { base: "build", past: "built", participle: "built", translation: "construire" },
    { base: "burn", past: "burnt", participle: "burnt", translation: "brûler" },
    { base: "burst", past: "burst", participle: "burst", translation: "éclater" },
    { base: "buy", past: "bought", participle: "bought", trBanslation: "acheter" },
    { base: "cast", past: "cast", participle: "cast", translation: "jeter, etc." },
    { base: "catch", past: "caught", participle: "caught", translation: "attraper" },
    { base: "chide", past: "chid", participle: "chidden", translation: "gronder/réprimander, aussi chide/chid/chid" },
    { base: "choose", past: "chose", participle: "chosen", translation: "choisir" },
    { base: "cleave", past: "cleft", participle: "cleft", translation: "fendre/coller, aussi cleave/clove/clove" },
    { base: "cling", past: "clung", participle: "clung", translation: "se cramponner" },
    { base: "come", past: "came", participle: "come", translation: "venir" },
    { base: "cost", past: "cost", participle: "cost", translation: "coûter" },
    { base: "creep", past: "crept", participle: "crept", translation: "ramper/se glisser/se hérisser" },
    { base: "crow", past: "crew", participle: "crowed", translation: "chanter (un coq)/jubiler" },
    { base: "cut", past: "cut", participle: "cut", translation: "couper" },
    { base: "deal", past: "dealt", participle: "dealt", translation: "distribuer/traiter" },
    { base: "dig", past: "dug", participle: "dug", translation: "bêcher" },
    { base: "do", past: "did", participle: "done", translation: "faire" },
    { base: "draw", past: "drew", participle: "drawn", translation: "tirer/dessiner" },
    { base: "dream", past: "dreamt", participle: "dreamt", translation: "rêver" },
    { base: "drink", past: "drank", participle: "drunk", translation: "boire" },
    { base: "drive", past: "drove", participle: "driven", translation: "conduire" },
    { base: "dwell", past: "dwelt", participle: "dwelt", translation: "habiter/rester" },
    { base: "eat", past: "ate", participle: "eaten", translation: "manger" },
    { base: "fall", past: "fell", participle: "fallen", translation: "tomber" },
    { base: "feed", past: "fed", participle: "fed", translation: "nourrir" },
    { base: "feel", past: "felt", participle: "felt", translation: "(se) sentir" },
    { base: "fight", past: "fought", participle: "fought", translation: "combattre" },
    { base: "find", past: "found", participle: "found", translation: "trouver" }
];

// Fonction pour afficher le tableau
function renderTable() {
    const tbody = document.querySelector('#verbTable tbody');
    tbody.innerHTML = '';
    
    verbs.forEach(verb => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${verb.base}</td>
            <td>${verb.past}</td>
            <td>${verb.participle}</td>
            <td>${verb.translation}</td>
            <td class="actions">
                <button class="edit-btn" onclick="editVerb(this)">Edit</button>
                <button class="update-btn" onclick="uupdateVerb(this)">Update</button>
                <button class="delete-btn" onclick="deleteVerb(this)">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Fonction de recherche
function findVerb() {
    const searchTerm = document.getElementById('searchVerb').value.toLowerCase();
    const rows = document.querySelectorAll('#verbTable tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
}

function editVerb(index) {
    currentEditIndex = index;
    const verb = verbs[index];
    document.getElementById("editVerbDetails").innerHTML = `
        <h2>Details for: ${verb[0]}</h2>
        <p><strong>Base Form:</strong> ${verb[0]}</p>
        <p><strong>Past Tense:</strong> ${verb[1] || "Not provided"}</p>
        <p><strong>Past Participle:</strong> ${verb[2] || "Not provided"}</p>
        <p><strong>Translation:</strong> ${verb[3] || "Not provided"}</p>
        <p><strong>Synonyms:</strong> [Add synonym information here]</p>
        <p><strong>Example Sentence:</strong> [Add example sentence here]</p>
        <img src="placeholder.jpg" alt="Verb Image" style="width:100%; height:auto;">
    `;
    openDetailsModal();
}

// Function to open the update modal
function openUpdateModal(index) {
    currentEditIndex = index;
    const verb = verbs[index];
    document.getElementById("editBaseForm").value = verb[0];
    document.getElementById("editPastTense").value = verb[1];
    document.getElementById("editPastParticiple").value = verb[2];
    document.getElementById("editTranslation").value = verb[3];
    openEditModal();
}

// Update verb function in update modal
function updateVerbInModal() {
    const baseForm = document.getElementById("editBaseForm").value.trim();
    const pastTense = document.getElementById("editPastTense").value.trim();
    const pastParticiple = document.getElementById("editPastParticiple").value.trim();
    const translation = document.getElementById("editTranslation").value.trim();

    // Validation check: If "Base Form" is empty, do not allow updating
    if (!baseForm) {
        alert("Veuillez entrer un verbe.");
        return;
    }

    // Update the verb in the array
    verbs[currentEditIndex] = [baseForm, pastTense, pastParticiple, translation];
    // Sort verbs alphabetically again
    verbs = [verbs[0]].concat(verbs.slice(1).sort((a, b) => a[0].localeCompare(b[0])));
    generateTable(); // Update the table
    closeEditModal(); // Close the edit modal
}

// Delete verb function
function deleteVerb(index) {
    verbs.splice(index, 1); // Remove the 1 element from the array
    generateTable(); // Update the table
}

// Gestionnaire de clic pour interchanger les volets
document.getElementById('swapButton').addEventListener('click', swapColumns);
function swapColumns() {
    const container = document.querySelector('.container');
    const tableContainer = document.querySelector('.table-container');
    const sidebar = document.querySelector('.sidebar');
    
    // Interchanger les positions dans le DOM
    
    if (tableContainer.nextElementSibling === sidebar) {
        container.insertBefore(sidebar, tableContainer);
    } else {
        container.appendChild(sidebar);
    }
}
