const saveEl = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const UlEl = document.getElementById("ul-el")
const delBtn = document.getElementById("del-btn")
const tabBtn = document.getElementById("tab-btn")

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
   
   