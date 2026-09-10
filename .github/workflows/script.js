const tombol = document.querySelector(".cover button");

if (tombol) {
  tombol.addEventListener("click", function () {
    document.querySelector(".content").scrollIntoView({
      behavior: "smooth"
    });
  });
}
// COUNTDOWN PERNIKAHAN
const tanggalPernikahan = new Date("December 20, 2026 09:00:00").getTime();

const countdown = setInterval(function () {

    const sekarang = new Date().getTime();
    const jarak = tanggalPernikahan - sekarang;

    const hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    const jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((jarak % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = hari;
    document.getElementById("hours").innerText = jam;
    document.getElementById("minutes").innerText = menit;
    document.getElementById("seconds").innerText = detik;

    if (jarak < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "Acara telah berlangsung ❤️";
    }

}, 1000);function kirimUcapan() {
    const nama = document.getElementById("namaTamu").value;
    const ucapan = document.getElementById("ucapanTamu").value;

    if (nama === "" || ucapan === "") {
        alert("Silakan isi nama dan ucapan terlebih dahulu.");
        return;
    }

    alert("Terima kasih, " + nama + "! Ucapan kamu sudah dikirim ❤️");
}