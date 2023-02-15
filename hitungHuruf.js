let kata = "Hello World!"
//normalisasi & split
let kataArr=kata.toLowerCase().split('')
let hitung = {}
for(let i=0;i<kataArr.length;i++){
    jml = kataArr[i]
    if(hitung[jml]){
        hitung[jml]++
    }else{
        hitung[jml]=1
    }
}

for(i in hitung){
        console.log(`${i} = ${hitung[i]}`); 
    }
