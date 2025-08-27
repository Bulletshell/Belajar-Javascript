
let lagi = true
while (lagi){
    let angka = prompt('Masukkan angka :');
        if (angka % 2 == 0){
            alert(angka + ' adalah bilangan Genap.');
        }else if(angka % 2 == 1){
            alert(angka + ' adalah bilangan Ganjil.');
        }else{
            alert('Harap masukkan angka!')
        }

    lagi = confirm('Lagi?')
}

alert('Nuhun');