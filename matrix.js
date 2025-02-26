document.addEventListener("DOMContentLoaded", function () {
    // Animação do código caindo
    const matrixBackground = document.querySelector(".matrix-background");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*"; // Caracteres disponíveis
    const columns = Math.floor(window.innerWidth / 20); // Número de colunas baseado na largura da tela

    for (let i = 0; i < columns; i++) {
        const column = document.createElement("div");
        column.className = "matrix-column";
        column.style.animationDelay = `${Math.random() * 5}s`; // Efeito cascata
        column.style.animationDuration = `${5 + Math.random() * 10}s`; // Varia a velocidade

        // Adiciona caracteres à coluna
        for (let j = 0; j < 20; j++) {
            const character = document.createElement("div");
            character.className = "matrix-character";
            character.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            column.appendChild(character);
        }

        matrixBackground.appendChild(column);
    }

    // Envio do formulário
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("lead-form");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
    
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const whatsapp = document.getElementById("whatsapp").value;
    
            // URL do Google Apps Script (substitua pela sua URL)
            const scriptURL = "https://script.google.com/macros/s/AKfycbzYZY1S3-H5QbIlWExXXsrjruTDbkOsHW7vr-rxBYjm/exec";
    
            // Usando GET com parâmetros na URL
            const url = `${scriptURL}?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&whatsapp=${encodeURIComponent(whatsapp)}`;
    
            fetch(url, {
                method: "GET",
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "success") {
                        alert("Inscrição realizada com sucesso! Verifique seu e-mail.");
                        window.location.href = "https://drive.google.com/file/d/1UDWUctroF3FG6WOT1V08iLg7GEYwKeKA/view?usp=drive_link";
                    } else {
                        alert("Ocorreu um erro. Tente novamente.");
                    }
                })
                .catch((error) => {
                    console.error("Erro:", error);
                    alert("Ocorreu um erro. Tente novamente.");
                });
        });
    });
});