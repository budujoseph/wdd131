

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const li = document.createElement('li');
const delBtn = document.createElement('button');

li.textContent = input.value;

delBtn.textContent = '❌';

li.appendChild(delBtn);

list.appendChild(li);

       


button.addEventListener('click', function() {
    if(input.value.trim() !== '') {
        li.textContent = input.value;
        li.appendChild(delBtn);
        list.appendChild(li);
        
    } else {
        alert('Please fill out this field');
        input.focus();
    }
});

delBtn.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();