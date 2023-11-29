# Averin Backend Test

## MySQL Setup

1. Buka MySQL dan buat database baru dengan nama db_averin.

## VSCode Setup

1. Clone repository via terminal:
   `git clone https://github.com/Prekksu/averin-backend-test.git`

2. Buka VSCode dan arahkan ke direktori tempat melakukan cloning.

3. `npm install` node_module via terminal VScode

4. Set up file `.env` dengan mengisi username dan password MySQL sesuai dengan konfigurasi user.

5. Buka folder src dan buka file index.js.

6. Jalankan program di terminal dengan mengetikkan `nodemon`.

7. Akan terjadi error di terminal

8. `Uncomment` baris berikut untuk melakukan sinkronisasi tabel database: `db.sequelize.sync({ alter: true })` lalu save.

9. `Comment` kembali baris tersebut agar sinkronisasi tidak terulang setiap kali program disimpan.

#### Program siap untuk diuji menggunakan Postman.
