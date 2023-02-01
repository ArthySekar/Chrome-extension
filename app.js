const saveEl = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const UlEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")


function render(leads){
    let listitems = " "
    for(let i=0; i< leads.length; i++){
       // UlEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        //let li = document.createElement("li")
        //li.textContent = myLeads[i]
       // UlEl.append(li)

       listitems += `<li>
                     <a  href = '#' target = '"${leads[i]}"' >
                     ${leads[i]}
                     </a>
                     </li>
                     `
       //console.log(listitems)
    }
    
    UlEl.innerHTML = listitems
    }

//save button 
saveEl.addEventListener("click", function(){
    
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})


//belete button
delBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads = " "
    render(myLeads)
   
   })
   
   