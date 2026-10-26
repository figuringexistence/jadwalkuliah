// viewcount.js - Skrip untuk penghitung jumlah kunjungan halaman
async function inisialisasiViewCount() {
    try {
        // Menggunakan API penghitung kunjungan gratis
        const response = await fetch(`https://api.countapi.xyz/hit/unimugo-jadwal-kuliah/total-visits`);
        const data = await response.json();
        
        const counterElement = document.getElementById("viewCountText");
        if (counterElement) {
            counterElement.textContent = data.value.toLocaleString();
        }
    } catch (error) {
        console.error("Gagal memuat view count:", error);
        const counterElement = document.getElementById("viewCountText");
        if (counterElement) {
            counterElement.textContent = "-";
        }
    }
}

// Otomatis jalankan saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    inisialisasiViewCount();
});
