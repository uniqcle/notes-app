const addBtn = document.getElementById('add'); 


addBtn.addEventListener('click', ()=>{
    addNewNote(); 
}); 

function addNewNote(){
    const note = document.createElement('div'); 
    note.classList.add('note'); 
    note.innerHTML = `
        <div class="tools">
            <button class = "edit"><i class="far fa-edit"></i></button>
            <button class = "delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
    `; 

    const editBtn = note.querySelector('.edit'); 
    const deleteBtn = note.querySelector('.delete'); 
    const main = note.querySelector('.main'); 
    const textArea = note.querySelector('textarea'); 

    deleteBtn.addEventListener('click', ()=>{
        note.remove(); 
    })

    editBtn.addEventListener('click', ()=>{
        main.classList.toggle('hidden'); 
        textArea.classList.toggle('hidden'); 
    }); 
    textArea.addEventListener("input", (e)=>{
        const {value} = e.target; 
        main.innerHTML = marked(value); 
    }); 

    

    document.body.appendChild(note); 
}



