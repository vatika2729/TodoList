
const todovalue = document.querySelector('#value');
let listed = document.querySelector('#listed');

todovalue.addEventListener("submit", (e) => {

    if (document.querySelector('#value input').value.length == 0) {
        alert("Please Enter a Task");
        e.preventDefault();
    }
    else {
        const list = document.createElement('span');
        const button = document.createElement('button');
        button.innerHTML = "Delete";
        button.classList.add('purple');
        let value = todovalue.elements.todo.value;
        list.append(value);
        listed.append(list);
        listed.append(button);
        todovalue.elements.todo.value = "";
        e.preventDefault();
    }
})



listed.addEventListener('click', (e) => {
    console.dir(e.target);
    if (e.target.nodeName === 'BUTTON') {
        e.target.previousSibling.remove();
        e.target.remove();
        e.stopPropagation();
    }
    else if (e.target.nodeName === 'SPAN') {
        e.target.classList.toggle('completed');
    }

})
