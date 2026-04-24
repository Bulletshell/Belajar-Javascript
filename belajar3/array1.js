// 1. Menambah isi array

// let arr = [];
// 
// arr[0] = 'Reihan';
// arr[1] = 'Rafi';


// 2. Menghapus isi array
// let arr = ["Reihan", "Rafi", "Sandika"];
// arr[2] = undefined;

// 3. Menampilkan isi array
// let arr = ["Reihan", "Rafi", "Sandika"];

// for (let i = 0; i<arr.length;i++){
//     console.log('Nama ke-' + (i+1) + ': ' + arr[i]);
// }


// Method pada array
let arr = ["Reihan", "Rafi", "Sandika", "Dody", "Deni"];
let angka = [1,2,5,10,3,6,8,4];

// 1. Join

// console.log(arr.join(' - '));

// 2. Push & Pop
// arr.push('Dody');
// arr.pop();
// console.log(arr.join(' '));

// 3. Unshift & Shift  
// arr.unshift('Dono');
// arr.shift();
// console.log(arr.join(' '));


// 4. Splice & Slice
// arr.splice(2,0,'Dody','Deni');
// arr.splice(1,2,'Dody');
// let arr2 = arr.slice(1,4);
// console.log(arr2.join(' '));

// 5. Foreach
// arr.forEach(function(e){
//     console.log(e);
// });

// Atau
// let cetak = (e) => {
//     console.log(e)
// }

// arr.forEach(cetak);

// forEach dengan index
// arr.forEach(function(e,i){
//     console.log("Mahasiswa ke-" + (i+1) + ' adalah : ' + e)
// })

// 6. Map
// let angka2 = angka.map(function(e){
//     // console.log(e)
//     return e*2;
// });
// console.log(angka2.join('-'));

// 7. sort
// angka.sort(function(a,b){
//     return a-b
// });

// console.log(angka);

// 8. Filter & Find
// let angka2 = angka.filter(function(x){
//     return x>5;
// });

let angka2 = angka.find(function(x){
    return x>5;
})
console.log(angka2);