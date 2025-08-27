// FOR LOOP
let angkotBeroperasi = 6,
  jmlAngkot = 10;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
  } else if (noAngkot === 8) {
    console.log("Angkot No. 8 sedang lembur");
  } else {
    console.log("Angkot No. " + noAngkot + " rusak.");
  }
}
