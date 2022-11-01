
const list = document.querySelector('.list-box')
const add = document.querySelector('.add-btn')
const err = document.querySelector('.error-message')

let listitem = []

add.addEventListener("click",function(e){
   e.preventDefault()

   let content = document.querySelector('#content').value
    if (!content){
        err.innerHTML = `<span class="text-danger">please enter a to-do</span>`
        return
    }
    let listelem = document.createElement('li');
     let done = document.createElement('button');
     let del = document.createElement('button');
     
    done.innerText="Done";
    del.innerText="delete";
    listelem.innerText = content;
    

    list.appendChild(listelem);
    listelem.appendChild(done)
    listelem.appendChild(del)


    // styling
    done.style.borderRadius="15px";
    done.style.backgroundColor="yellow";
    done.style.color="black";
    done.style.padding="12px";
    done.style.fontWeight="bold";
    
    done.style.marginLeft="30%";
    listelem.style.marginLeft="20%";
    listelem.style.fontSize="20px";
    listelem.style.fontWeight="bold";

    del.style.borderRadius="15px";
    del.style.backgroundColor="red";
    del.style.color="black";
    del.style.padding="12px";
    del.style.fontWeight="bold";
    del.style.marginLeft="10%";
   


// button fuctionality

    done.addEventListener('click',function() {
        listelem.style.textDecoration="line-through";
        
    })
    del.addEventListener('click',function() {
        listelem.remove();
        
    })
    

    document.querySelector('#content').value ="";
     


    
    
})

