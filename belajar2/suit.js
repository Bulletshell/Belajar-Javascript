let ulang=true
while (ulang){
let p = prompt('pilih : gajah, semut, orang');

// Computer
let com = Math.random()

if (com < 0.34){
    com = 'Gajah';
} else if (com >= 0.34 && com < 0.67){
    com = 'Orang';
} else {
    com = 'Semut';
}

// Rules

let hasil = ''
if (p == com){
    hasil = 'SERI!';
} else if (p == 'gajah'){
    // if(com =='orang'){
    //     hasil = 'MENANG!'
    // }else{
    //     hasil='KALAH!'
    // }
    hasil = (com == 'orang') ? 'MENANG!' : 'KALAH!';
} else if (p == 'orang'){
    hasil = (com == 'gajah') ? 'KALAH!' : 'MENANG!';
} else if (p == 'semut'){
    hasil = (com == 'orang') ? 'KALAH!' : 'MENANG!';
} else{
    hasil = 'Salah Input!'
}


//Hasil
alert('Kamu memilih : ' + p + '\nKomputer memilih : ' + com + '\nHasil : ' + hasil);
tanya = confirm('Ulang?');
}
alert('Terima kasih sudah bermain!')
