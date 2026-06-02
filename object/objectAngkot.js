function Angkot(sopir, trayek, penumpang, cash){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.cash = cash;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0 ){
            alert('Angkot masih kosong!');
            return false;
        }

        for(let i=0; i<this.penumpang.length; i++){
            if(this.penumpang[i]== namaPenumpang){
                this.penumpang[i] = undefined;
                this.cash += bayar;
                return this.penumpang;
            }
        }
    }
}


let angkot1 = new Angkot('Bambang', ['Jakarta', 'Bandung'], [], 0);

let angkot2 = new Angkot('Budi', ['Jakarta', 'Depok'], [], 0)