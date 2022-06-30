var trash = document.getElementsByClassName('fa-trash')
Array.from(trash).forEach(elem => elem.addEventListener('click', deleteOne))

// Array.from(trash).forEach((element) => {
//     element.addEventListener('click', function(){
//         const taskS = this.parentNode.parentNode.childNodes[1].innerText
//         fetch('tasks', {
//             method: 'delete',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 'task': taskS
//             })
//         }).then(res => {
//             window.location.reload()
//         })
//     })
// })

// Array.from(trash).forEach((element) => element.addEventListener('click', function(){
    
// }))

async function deleteOne(){
    const sTask = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('deleteTask', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'taskS': sTask
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}

// deleteButton.addEventListener('click', _ => {
//     fetch('/tasks', {
//         method: 'delete',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             task: 'Groceries'
//         })
//     })
// })
//     .then(res => {
//         if(res.ok) return res.json()
//     })
//     .then(data => {
//         window.location.reload()
//     })


