const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")
const formDelete = document.querySelector("#form-delete")

//Markup the current guide

for(item of menuItems){

    if(currentPage.includes(item.getAttribute("href"))){
        
        item.classList.add("active")    
    }
}

function paginate(selectedPage, totalPages){

    let pages = [],
        oldPage

    for(let currentPages = 1; currentPages <= totalPages; currentPages++){

        const firstAndLastPages = currentPages == 1 || currentPages == totalPages
        const pagesAfter = currentPages <= selectedPage + 2
        const pagesBefore = currentPages >= selectedPage - 2
    
        if(firstAndLastPages || pagesAfter && pagesBefore){
            if(oldPage && currentPages - oldPage > 2){
                pages.push("...")
            }
    
            if(oldPage && currentPages - oldPage == 2){
                pages.push(currentPages - 1)
            }
    
            pages.push(currentPages)
    
            oldPage = currentPages
        }
    }
    
    return pages
}

function createPagination(pagination){

    const filter = pagination.dataset.filter;
    const page = +pagination.dataset.page;
    const total = +pagination.dataset.total;
    const pages = paginate(page, total)

    let elements = ""

    for(let page of pages){

        if(String(page).includes("...")){
            elements += `<span>${page}</span>`  
        }else{

            if(filter){
                elements += `<a href="?page=${page}&filter=${filter}">${page}</a>`
            }else{
                elements += `<a href="?page=${page}">${page}</a>`
            }
        }
    }

    pagination.innerHTML = elements

}

const pagination = document.querySelector(".pagination");

if(pagination){
    createPagination(pagination)
}

// //Form Delete

// formDelete.addEventListener("submit", function(event){
    
//     const confirmation = confirm('Deseja deletar?')
//     if(!confirmation){
//         event.preventDefault()
//     }
// })