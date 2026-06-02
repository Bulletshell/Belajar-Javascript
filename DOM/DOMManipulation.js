// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Reihan</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>paragraf1</p></div>'


// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';


// const judul = document.getElementsByTagName('h1')[0];

// judul.setAttribute('name', 'reihan');

// const a = document.querySelector('section#a a');

// const p2 = document.querySelector('.p2');
// // p2.setAttribute('class', 'label');
// p2.classList.add('label')

//DOM Manipulation
//buat elemen baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');

// Simpan tulisan kedalam paragraf
pBaru.appendChild(textPBaru);

// Simpan P baru diakhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pbaru);

const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2)