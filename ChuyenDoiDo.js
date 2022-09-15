class ChuyenDoiDo{
    doF;
    doC;
    doK;

    constructor(doF, doC, doK) {
        this.doF = doF;
        this.doC = doC;
        this.doK = doK;
    }

    getDoF(){
        return  9/5*this.doC + 32;
    }

    setDoF(doF){
        this.doF =doF
    }

    getDoC(){
        return this.doC;
    }

    setDoC(doC){
        this.doC = doC;
    }

    getDoK(){
        return this.doC+273.15;
    }

    setDoK(doK){
        this.doK = doK;
    }

}