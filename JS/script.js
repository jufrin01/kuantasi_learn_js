let BtnSubmit = document.getElementById('btn_submit');

let charts = [];

function subminHandler() {

    let id;
    if(charts.length === 0 ){
        id = 1;
    }else {
        id = charts[charts.length - 1].id + 1;
    }

    let barangValue = document.getElementById('barang').value;
    // let namaValue = document.getElementById('nama').value;
    let hargaValue = document.getElementById('harga').value;

    let tempObj = {
        id ,
        nama: barangValue,
        harga: +hargaValue
    }
    charts.push(tempObj);
    console.log(charts);
}

BtnSubmit.addEventListener('click', subminHandler);

console.log(BtnSubmit);