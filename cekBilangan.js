function cek(n) {
    let panjang = n.toString().length - 1
    console.log(`Input n = ${n}`)
    if (n < 0) {
        console.log('Input Tidak Valid')
    } else {
        switch (panjang) {
            case 0:
                console.log('Output  = SATUAN')
                break;
            case 1:
                console.log('Output  = PULUHAN');
                break;
            case 2:
                console.log('Output  = RATUSAN');
                break;
            case 3:
                console.log('Output  = RIBUAN');
                break;
            case 4:
                console.log('Output  = PULUH RIBUAN')
                break;
            default:
                console.log('Input Tidak Valid');
        }
    }
}

exports.cek = cek