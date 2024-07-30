
function call(event){
    event.target.remove()
    }
       let list=document.getElementById("list-container")
          let input=document.getElementById("input")
       let deleteitem=document.getElementById("delete")
       function add(){
          let listitem=document.createElement("li")
          listitem.innerHTML=input.value + "<button onclick='item(event)'>DELETE</button>"
          list.append(listitem)
       }
       function item(event){
          event.target.parentElement.remove(deleteitem)
    } 




