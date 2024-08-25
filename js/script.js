// Función para encriptar el texto
function encryptText() {
    let inputText = document.getElementById("textarea").value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.querySelector(".section-message h2").textContent = "Texto encriptado";
    document.querySelector(".section-message p").textContent = encryptedText;
    document.querySelector(".section-message p").style.fontSize = "24px"; 
    document.querySelector(".secondary-section img").style.display = "none";
    document.querySelector("button.third").style.display = "block";
}

// Función para desencriptar el texto
function decryptText() {
    let inputText = document.getElementById("textarea").value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector(".section-message h2").textContent = "Texto desencriptado";
    document.querySelector(".section-message p").textContent = decryptedText;
    document.querySelector(".section-message p").style.fontSize = "24px";
    document.querySelector(".secondary-section img").style.display = "none";
    document.querySelector("button.third").style.display = "block";
}


// Función para copiar el texto
function copiarTexto() {
    let messageText = document.querySelector(".section-message p").textContent;
    navigator.clipboard.writeText(messageText).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

// Fución para poner todo como antes
function normal() {
    let textarea = document.getElementById("textarea").value;
    if (textarea === "") {
        document.querySelector(".section-message h2").textContent = "Ningún mensaje fue encontrado";
        document.querySelector(".section-message p").textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        document.querySelector(".section-message p").style.fontSize = "16px";
        document.querySelector(".secondary-section img").style.display = "block";
        document.querySelector("button.third").style.display = "none";
    }
}


document.getElementById("textarea").addEventListener("input", normal);
