// 1. Pilih Element
const headingElement = document.querySelector('h1');
const btnElement = document.querySelector('.container button');
const inputElement = document.querySelector('.input-text');


// 2. Tambahkan Event Listener
btnElement.addEventListener('click', function(event){
    console.log(event);
    
    // opsi 1 untuk mengubah style
    // headingElement.style.color = 'red';

    // opsi 2 untuk mengubah style, menggunakan class
    headingElement.classList.toggle('text-red');
});

inputElement.addEventListener('keyup', function(event){
    const inputValue = event.target.value; 

    headingElement.textContent = inputValue;
})