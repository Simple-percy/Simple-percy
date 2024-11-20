const searchBar = document.querySelector('.search-boook');
const addBook =   document.querySelector('.add-book');
const bookSpace = document.querySelector('.books');
const form = document.querySelector('.book-form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const genre = document.querySelector('.genre');
const pages = document.querySelector('.pages');
const closeForm = document.querySelector('.cancel-form');
const confirm = document.querySelector('.done');
let authTest = false;
const allInput = form.querySelectorAll('input');
const library = document.querySelector('.book-place');
const body = document.querySelector('body');

const books = []



function newBook() {
    form.style.display = 'block';
}

function createLibrary() {

    formvalidation()

    if (authTest === true) {
        const book = {}
           
        book.title = title.value
        book.author = author.value
        book.genre = genre.value
        book.pages = pages.value

        books.push(book)
        createBook ()
        clearInput ()
        console.log(books);
        authTest = false;
    }
}

function closeF() {
    form.style.display = 'none'
}

function collectObject() {

}




function formvalidation () {
    const fields = ['title', 'author', 'genre', 'pages']
    const errors = []

    fields.forEach(field => {
        const value = document.querySelector(`.${field}`).value;
        const elementError = document.querySelector(`.error-${field}`);
        const fieldBorder = document.querySelector(`.${field}`)
        //console.log(value)
        if (value === null || value === ''){
            const errorMessage = 'Please in fill in field'
            errors.push(`${errorMessage + field}`)
            elementError.style.display = 'block'
            fieldBorder.style.border = 'solid 1.5px  rgb(164, 24, 24)'
            console.log(errors)
        } 
        else {
            elementError.style.display = 'none'
            fieldBorder.style.border = 'solid 1.5px black'
        
        }
    })
    if (errors.length === 0) {
        return authTest = true;
    }
}

function clearInput () {
    const fields = ['title', 'author', 'genre', 'pages']

    fields.forEach(field => {
        const fieldInput = document.querySelector(`.${field}`)
        fieldInput.value = ''
    })
}
function label(text) {
    const label = document.createElement('label')
    label.textContent = text

return label
}

function p (text) {
    const p = document.createElement('p');
    p.textContent = text;

return p

}
function createBook() {

    const titleValue = document.querySelector('.title').value;
    const authorValue = document.querySelector('.author').value;
    const genreValue = document.querySelector('.genre').value;
    const pagesValue= document.querySelector('.pages').value;
    const cardContainer = document.querySelector('.book-place');
    const removeLibrary = document.createElement('button')
    removeLibrary.textContent = 'Remove'

    const card = document.createElement('div');
    card.className = 'card-library'
    
    const titleLabel = label ('Title:');
    const titleLibrary = p (titleValue)

    const authorLabel = label ('Author:');
    const authorLibrary = p (authorValue);

    const genreLabel = label ('Genre:');
    const genreLibrary = p (genreValue);

    const pagesLabel = label ('Pages:');
    const pagesLibrary = p (pagesValue);

    card.appendChild(titleLabel);
    card.appendChild(titleLibrary);
    card.appendChild(authorLabel);
    card.appendChild(authorLibrary);
    card.appendChild(genreLabel)
    card.appendChild(genreLibrary)
    card.appendChild(pagesLabel)
    card.appendChild(pagesLibrary)
    card.appendChild(removeLibrary)

    removeLibrary.addEventListener('click', () => {
        card.remove()
    })
    
    cardContainer.appendChild(card)


}


confirm.addEventListener('click', formvalidation)
closeForm.addEventListener('click', closeF)
confirm.addEventListener('click', createLibrary)
addBook.addEventListener('click', newBook)