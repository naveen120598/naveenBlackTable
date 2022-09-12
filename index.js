
var redteamMembers = []
const CreateTable = ()=>{
    const name  = document.getElementById('name').value
    const age  = document.getElementById('age').value
    const canditate = {
        name : name,
        age : age
    }
    redteamMembers.push(canditate)
    var table = ''
    redteamMembers.map(item=>{
        table = table + `<tr>`
        table = table + `<td>${item.name}</td>`
        table = table + `<td>${item.age}</td>`
        table = table + `</tr>`

    })
    document.getElementById('tbody').innerHTML = table
}