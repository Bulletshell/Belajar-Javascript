const kata = "KUNCIE";
let n = 12;
let huruf = "";
for (i = 1; i<=n; i++) {
  for (j = 0; j<i; j++) {
    huruf += kata[j % kata.length];
  }
  console.log(huruf);
  huruf = "";
}