import BookService from './services/BookService'

const bookService = new BookService();

import { format } from 'timeago.js';

class UI {

    async renderBooks() {
        const books = await bookService.getBooks();
        const booksCardContainer = document.getElementById('books-cards');
        booksCardContainer.innerHTML = '';
        books.forEach(book => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
                <div class="card m-2">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="http://localhost:3000${book.imagePath}" alt="" 
                            class="imag-fluid" />
                        </div>

                        <div class="col-md-8">
                            <div class="card-bock px-2">
                                <h4 class="card-title">${book.title}</h4>
                                <p class="card-text">${book.author}</p>
                                <a href="#" class="btn btn-danger delete" _id=${book._id}>X</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        ${format(book.created_at)}
                    </div>
                </div>
            `;
            booksCardContainer.appendChild(div);
        });
    }

    async AddANewBook(book) {
        await bookService.postBook(book);
        this.ClearBookForm();
        this.renderBooks();
    }

    ClearBookForm() {
        document.getElementById('book-form').reset();
    }

    RenderMessage() {

    }

    DeleteBook() {

    }
}

export default UI;