1. Persiapan File
Pastikan seluruh file berikut berada dalam satu folder yang sama (tidak terpisah folder):

index.html (File utama aplikasi)
BidangTanah.geojson (Data spasial persil)
kotabaru2.geojson (Data spasial bangunan 3D)
cityobject_data.json (Data atribut bangunan)

2. Prasyarat Perangkat Lunak (Software Requirement)
Pastikan komputer telah terinstal Node.js.
Untuk mengecek, buka Terminal/Command Prompt (CMD) dan ketik: node -v
Jika belum terinstal, silakan unduh di: https://nodejs.org/

3. Langkah Menjalankan Aplikasi (Run)
Kami menggunakan http-server (paket standar Node.js) untuk membuat server statis lokal secara instan tanpa konfigurasi rumit.
Buka Terminal (Mac/Linux) atau Command Prompt / PowerShell (Windows).
Arahkan direktori ke folder tempat Anda menyimpan file proyek ini. 
Jalankan perintah berikut untuk memulai server lokal:

Bash

npx http-server
(Jika muncul pertanyaan "Need to install the following packages: http-server? (y/n)", silakan ketik y lalu Enter).
Terminal akan menampilkan alamat server, biasanya: http://127.0.0.1:8080 atau http://localhost:8080

Buka browser (Google Chrome / Edge / Firefox) dan kunjungi alamat tersebut.

Catatan Teknis:
Aplikasi ini tidak dapat berjalan hanya dengan "klik dua kali" pada file index.html (protokol file://) karena kebijakan keamanan browser modern yang memblokir permintaan fetch() ke file lokal (CORS Policy). Oleh karena itu, penggunaan npx http-server diperlukan untuk mensimulasikan lingkungan web server.

Terima kasih.