let BtnSubmit = document.getElementById('btn_submit');
let BtnUpdate = document.getElementById('btn_update');
let BtnDelete = document.getElementById('btn_delete');

let charts = [];
let currentItemIndex = null;

function createItem() {
    let id;
    if(charts.length === 0 ){
        id = 1;
    }else {
        id = charts[charts.length - 1].id + 1;
    }

    let barangValue = document.getElementById('barang').value;
    let nama = document.getElementById('nama').value;
    let hargaValue = document.getElementById('harga').value;

    let tempObj = {
        id,
        nama: barangValue,
        harga: +hargaValue
    }

    document.getElementById('nama-chart').innerHTML = nama;
    charts.push(tempObj);
    readItems();
    clearForm();
}

function readItems() {
    let tBody = document.getElementById('tBody');
    tBody.innerHTML = '';
    charts.forEach(chart => {
        tBody.innerHTML += `<tr>
        <td>${chart.id}</td>
        <td>${chart.nama}</td>
        <td>${chart.harga}</td>
        <td>
            <button class="btn_edit" data-id="${chart.id}">Edit</button>
            <button class="btn_delete" data-id="${chart.id}">Delete</button>
        </td>
        </tr>`;
    });

    let btnEdit = document.querySelectorAll('.btn_edit');
    btnEdit.forEach(btn => {
        btn.addEventListener('click', editItem);
    });

    let btnDelete = document.querySelectorAll('.btn_delete');
    btnDelete.forEach(btn => {
        btn.addEventListener('click', deleteItem);
    });
}

function editItem(e) {
    let id = e.target.dataset.id;
    let item = charts.find(chart => chart.id == id);
    document.getElementById('barang').value = item.nama;
    document.getElementById('harga').value = item.harga;
    currentItemIndex = charts.findIndex(chart => chart.id == id);
    BtnUpdate.style.display = 'inline';
    BtnDelete.style.display = 'inline';
    BtnSubmit.style.display = 'none';
}

function updateItem() {
    let barangValue = document.getElementById('barang').value;
    let hargaValue = document.getElementById('harga').value;
    charts[currentItemIndex].nama = barangValue;
    charts[currentItemIndex].harga = +hargaValue;
    readItems();
    clearForm();
}

function deleteItem(e) {
    let id = e.target.dataset.id;
    charts = charts.filter(chart => chart.id != id);
    readItems();
    clearForm();
}

function clearForm() {
    document.getElementById('barang').value = '';
    document.getElementById('harga').value = '';
    document.getElementById('nama').value = '';
    BtnUpdate.style.display = 'none';
    BtnDelete.style.display = 'none';
    BtnSubmit.style.display = 'inline';
}

function printHandler() {
    document.querySelector('.form-box').style.display = 'none';
    Btnprint.style.display = 'none';

    window.print();
}

let Btnprint = document.getElementById('btn_print');

BtnSubmit.addEventListener('click', createItem);
BtnUpdate.addEventListener('click', updateItem);
BtnDelete.addEventListener('click', deleteItem);
Btnprint.addEventListener('click', printHandler);

readItems();