const Validar = (event) => {
    if (event) {
        event.preventDefault();
    }

    let usuario = document.getElementById("username").value;
    let senha = document.getElementById("password").value;
    let confirmarSenha = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("errorMessage");

    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    errorMessage.innerHTML = "";

    if (usuario === "") {
        errorMessage.innerHTML = "Por favor, preencha o campo Username.";
        return false;
    } else if (senha === "") {
        errorMessage.innerHTML = "Por favor, preencha o campo Password.";
        return false;
    }

    if (!passwordRegex.test(senha)) {
        errorMessage.innerHTML = "A senha deve conter 1 letra maiúscula, 1 número e no mínimo 8 caracteres.";
        return false;
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, digite novamente!");
        return false;
    } else if (senha === confirmarSenha) {
        alert("As senhas são iguais. Pode continuar!");
        return true;
    }
}

document.getElementById("btnClick").addEventListener("click", Validar);
