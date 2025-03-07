function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (!email.includes("@")) {
        document.getElementById("error-message").innerText = "Email tidak valid!";
        return;
    }

    let emailDomain = email.split("@")[1];
    if (password === emailDomain) {
        localStorage.setItem("email", email);
        window.location.href = "form.html";
    } else {
        document.getElementById("error-message").innerText = "Password salah!";
    }
}

function simpanData() {
    let nama = document.getElementById("nama").value;
    let ttl = document.getElementById("ttl").value;
    let pendidikan = document.getElementById("pendidikan").value;

    if (nama && ttl && pendidikan) {
        localStorage.setItem("nama", nama);
        localStorage.setItem("ttl", ttl);
        localStorage.setItem("pendidikan", pendidikan);
        window.location.href = "cv.html";
    } else {
        alert("Harap isi semua data!");
    }
}

function tampilkanCV() {
    document.getElementById("cv-email").innerText = localStorage.getItem("email") || "Tidak tersedia";
    document.getElementById("cv-nama").innerText = localStorage.getItem("nama") || "Tidak tersedia";
    document.getElementById("cv-ttl").innerText = localStorage.getItem("ttl") || "Tidak tersedia";
    document.getElementById("cv-pendidikan").innerText = localStorage.getItem("pendidikan") || "Tidak tersedia";
}

if (window.location.pathname.includes("cv.html")) {
    window.onload = tampilkanCV;
}
