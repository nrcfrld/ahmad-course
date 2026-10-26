const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', function(){
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        buttonEl.textContent = "Ubah ke Light Mode";
    }else{
        buttonEl.textContent = "Ubah ke Dark Mode";
    }  
})