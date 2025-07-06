package com.library;

import com.library.model.Book;
import com.library.repository.BookRepository;
import com.library.service.BookService;
public class Main {
    public static void main(String[] args) {
       // ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        //BookService bookService = (BookService) context.getBean("bookService");
        BookRepository repo = new BookRepository();
        BookService service = new BookService(repo);

        Book b1=new Book("Harry Potter", "JK Rowling",1988);
        Book b2=new Book("The Hobbit", "J.R.R. Tolkien",2018);
        service.addBook(b1);
        service.addBook(b2);
        service.displayBooks();
    }
}
