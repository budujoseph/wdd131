

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || []; 

chaptersArray.forEach(chapter =>  {
    displayList(chapter);
});

button.addEventListener('click', function() {
    if(input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();


      
    } else {
        alert('Please fill out this field');
        input.focus();
    }
});

function displayList(item){
      const li = document.createElement('li');
        const delBtn = document.createElement('button');

        li.textContent = input.value;
        delBtn.textContent = '❌';
        delBtn.classList.add('delete');

        li.appendChild(delBtn);
        list.appendChild(li);

        input.value = '';
        input.focus();


        delBtn.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });

        console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList(){
    localStorage.setItem('myBOMChapters', JSON.stringify(chaptersArray));
}


function getChapterList(){
    return JSON.parse(localStorage.getItem('myBOMChapters'));
}


function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length-1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
