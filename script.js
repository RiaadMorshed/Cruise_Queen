const first_plus_btn = document.getElementById('first-plus');
const first_minus_btn = document.getElementById('first-minus');

first_plus_btn.addEventListener('click', function(){
    const first_class_inp = document.getElementById('first-class-inp');
    let first_class_count = parseInt(first_class_inp.value);
    first_class_count++;
    console.log(first_class_count);
    first_class_inp.value = first_class_count;
    updateVoucher(150);
});

first_minus_btn.addEventListener('click', function(){
    const first_class_inp = document.getElementById('first-class-inp');
    let first_class_count = parseInt(first_class_inp.value);
    if(first_class_count>0){
        first_class_count--;
        updateVoucher(-150);
    } 
    console.log(first_class_count);
    first_class_inp.value = first_class_count;
});


const eco_plus_btn = document.getElementById('eco-plus');
const eco_minus_btn = document.getElementById('eco-minus');

eco_plus_btn.addEventListener('click', function(){
    const eco_class_inp = document.getElementById('eco-class-inp');
    let eco_class_count = parseInt(eco_class_inp.value);
    eco_class_count++;
    console.log(eco_class_count);
    eco_class_inp.value = eco_class_count;
    updateVoucher(100);
});

eco_minus_btn.addEventListener('click', function(){
    const eco_class_inp = document.getElementById('eco-class-inp');
    let eco_class_count = parseInt(eco_class_inp.value);
    if(eco_class_count>0){
        eco_class_count--;
        updateVoucher(-100);
    } 
    console.log(eco_class_count);
    eco_class_inp.value = eco_class_count; 
});

//this function will update subtotal, vat and total field
function updateVoucher(amount){
    const subtotal = document.getElementById('subtotal');
    const vat = document.getElementById('vat');
    const total = document.getElementById('total');

    let subtotal_val = parseInt(subtotal.innerText.slice(1)) + amount;
    let vat_val = subtotal_val * .1;
    let total_val = parseInt(total.innerText.slice(1));
    total_val = subtotal_val + vat_val;

    subtotal.innerText = "$" + subtotal_val;
    vat.innerText = "$" + vat_val;
    total.innerText = "$" + total_val;
}

//book now button click

const book = document.getElementById('booknow');
book.addEventListener('click', function(){
    document.getElementById('subtotal2').innerText = document.getElementById('subtotal').innerText;
    document.getElementById('vat2').innerText = document.getElementById('vat').innerText;
    document.getElementById('total2').innerText = document.getElementById('total').innerText;

});