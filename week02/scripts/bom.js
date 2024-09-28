

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
    if(trim()!== '') {
        
    }
})