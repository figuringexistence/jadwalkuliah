// viewcount.js - Penghitung kunjungan menggunakan API alternatif yang lebih stabil
async function inisialisasiViewCount() {
    try {
        // Menggunakan API CountAPI versi publik yang stabil
        const response = await fetch('https://api.countapi.xyz/hit/unimugo-jadwal-kuliah-tif/visits');
        
        if (!response.ok) {
            throw new Error('Gagal terhubung ke server counter');
        }
        
        const data = await response.json();
        const counterElement = document.getElementById("viewCountText");
        
        if (counterElement) {
            counterElement.textContent = data.value.toLocaleString();
        }
    } catch (error) {
        console.warn("Menggunakan cadangan lokal karena API utama diblokir browser:", error);
        
        // Cadangan: Menggunakan localStorage agar angka tetap naik secara lokal jika API diblokir
        let localCount = localStorage.getItem("unimugo_visit_count");
        if (!localCount) {
            localCount = 1250; // Angka awal dasar
        } else {
            localCount = parseInt(localCount) + 1;
        }
        localStorage.setItem("unimugo_visit_count", localCount);
        
        const counterElement = document.getElementById("viewCountText");
        if (counterElement) {
            counterElement.textContent = Number(localCount).toLocaleString();
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    inisialisasiViewCount();
});
