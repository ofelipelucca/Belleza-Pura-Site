document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".input-field");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach((msg) => msg.remove());

        let isValid = true;

        if (nameInput.value.trim().length < 5) {
            showError(nameInput, "O nome deve ter no mínimo 5 caracteres.");
            isValid = false;
        }

        if (!validateEmail(emailInput.value.trim())) {
            showError(emailInput, "Por favor, insira um e-mail válido.");
            isValid = false;
        }

        if (isValid) {
            console.log("Nome:", nameInput.value.trim());
            console.log("E-mail:", emailInput.value.trim());
            alert("Cadastro realizado com sucesso!");
            form.reset();
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function showError(input, message) {
        const error = document.getElementById("error");
        error.classList.add("error-message");
        error.style.color = "#ff4338";
        error.style.fontSize = "3vh";
        error.style.marginTop = "1vh";
        error.style.textAlign = "center";
        error.textContent = message;
    }
});