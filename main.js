const text = document.getElementById("note");
const addBtn = document.getElementById("ekle");
const notes = document.getElementById("notes");




//let notlar = JSON.parse(localStorage.getItem("notlar")) || [];

function goster() {

    notes.innerHTML = "";

    for (i = 0; i < localStorage.length; i++) {

        const key = localStorage.key(i);

        if (key.startsWith("not_")) {

            const value = localStorage.getItem(key);
            const p = document.createElement("p");
            p.textContent = value;
            notes.appendChild(p);
        }
    }
}
addBtn.addEventListener("click", function() {
    const yeniNot = text.value;
    let sayi = 0
    while (localStorage.getItem("not_" + sayi)) {
        sayi++;
    }
    const yeniKey = "not_" + sayi;
    localStorage.setItem(yeniKey, yeniNot);
    text.value = "";
    goster();
});