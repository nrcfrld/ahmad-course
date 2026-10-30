const formEl = document.querySelector('form#todo-form');
const todoListEl = document.querySelector("#todo-list");
const todoList = JSON.parse(localStorage.getItem("todo-list")) || [];

todoList.forEach(function(todo){
   if(todo.priority === 'high') {
    todoListEl.innerHTML += '<li class="high">' + todo.title + '</li>';
   }else{
    todoListEl.innerHTML += '<li>' + todo.title + '</li>';
   }
})

formEl.addEventListener('submit', function(event) {
   event.preventDefault(); // Menonaktifkan perilaku default form agar tidak melakukan submit secara langsung

   const title = formEl.elements.title.value.trim();
   const priority = formEl.elements.priority.value;
   let isError = false;

   if(title === '') {
        isError = true;
       document.querySelector('.form-group.title .message-container').innerHTML = '<small class="error">Title is required</small>';
   }

   if(priority === '') {
        isError = true;
       document.querySelector('.form-group.priority .message-container').innerHTML = '<small class="error">Priority is required</small>';
   }
   
   if(isError) {
    return false; 
   }

    todoList.push({
        title: title,
        priority: priority
    });

    localStorage.setItem("todo-list", JSON.stringify(todoList)); 

    if(priority === 'high') {
        document.querySelector('#todo-list').innerHTML += '<li class="high">' + title + '</li>';
    }else{
        document.querySelector('#todo-list').innerHTML += '<li>' + title + '</li>';
    }
    
    formEl.reset();
    document.querySelector('.form-group.title .message-container').innerHTML = '';
    document.querySelector('.form-group.priority .message-container').innerHTML = '';
});