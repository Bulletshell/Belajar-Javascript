// let angka = prompt('Masukkan angka : ');

// switch(angka){
//     case '1':
//         alert('Anda memasukan angka ' + angka);
//         break;
//     case '2':
//         alert('Anda memasukan angka ' + angka);
//         break;
//     case '3':
//         alert('Anda memasukan angka ' + angka);
//         break;
//     default:
//         alert('Angka yang anda masukkan salah!');
//         break;
// }

let item = prompt("Masukkan nama makanan / miuman : \n cth: nasi, daging, susu, hamburger, softdrink");

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("Makanan / Minuman SEHAT!");
    break;
  case "hamburger":
  case "softdrink":
    alert("Makanan / Minuman TIDAK SEHAT!");
    break;
  default:
    alert("Input yang anda masukkan salah!");
    break;
}
