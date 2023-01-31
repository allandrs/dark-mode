const changeTheme = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}



changeTheme.addEventListener("change", function() {
    toggleDarkMode();    

    // Save or remove dark mode
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("dark", "dark");
    }
});



// Load light or dark mode
function loadTheme() {
    console.log("Entrou na função")
    const getDark = localStorage.getItem('dark');
    console.log("procurando a variável getDark no localStorage", getDark)
    if(getDark != "dark") {
        console.log("não achou o darkMode e acionou o light", getDark)
        toggleDarkMode()
    }
}

loadTheme();



