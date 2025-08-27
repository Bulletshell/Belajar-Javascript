let ulang = true;

alert("Tebak angka dari 1-10.\nKamu punya 3 kesempatan");

//Computer
let com = Math.floor(Math.random() * 10) + 1;

while (ulang) {
  percobaan = 3
  for (percobaan; percobaan > 0; percobaan--) {
    let a = prompt("Masukkan angka tebakan :");

    //Rules
    let tebakan = "";
    // if (a == com) {
    //   tebakan = "BENAR!";
    //   percobaan = 1;
    // } else if (a < com) {
    //   tebakan = "lebih RENDAH";
    // } else if (a > com) {
    //   tebakan = "lebih TINGGI";
    // } else {
    //   tebakan = "tidak sesuai";
    // }

    if(a!=com){
      tebakan=(a>com)?'lebih TINGGI':'lebih RENDAH'
    }else{
      tebakan = "BENAR!";
      percobaan=0;
    }


    if(percobaan==1){
      alert("Tebakan kamu " +
        tebakan +
        "\nTebakan kamu habis.")
    }else if(a==com){
      alert("Tebakan kamu " +
        tebakan)
    }else{
      alert("Tebakan kamu " +
        tebakan +
        "\nKamu memiliki " +
        (percobaan-1) +
        " percobaan lagi.")};
    // console.log(com);
  }
  ulang = confirm("Ulang?");
}
