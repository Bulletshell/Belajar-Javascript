//Membuat Object

// Object Literal
let mhs1 = {
    nama: "Reihan",
    npk: '55416037',
    email: 'email@email.com',
    jurusan: "Teknik Informatika"
};

let mhs2 = {
    nama: "Septyansyah",
    npk: '55416038',
    email: 'septyan@email.com',
    jurusan: "Teknik Informatika"
};

// Function Declaration
function buatObjectMahasiswa(nama, npk, email, jurusan){
    let mhs = {};
    mhs.nama = nama;
    mhs.npk = npk;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs3 = buatObjectMahasiswa('Bambang', '55416039', 'test@email.com', 'Psikologi');


// Constructor
function Mahasiswa(nama, npk, email, jurusan){
    this.nama = nama;
    this.npk = npk;
    this.email = email;
    this.jurusan = jurusan;
}

let mhs4 = new Mahasiswa('Budi', '55416040',)
