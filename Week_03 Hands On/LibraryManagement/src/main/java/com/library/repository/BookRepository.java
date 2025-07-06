package com.library.repository;

import java.util.ArrayList;
import java.util.List;

import com.library.model.Book;

public class BookRepository {
    private List<Book> books = new ArrayList<>();

    public void getAllBooks() {
        System.out.println("Books in Repository:");
        for (Book book : books) {
            System.out.println(book);
        }
    }

    public void addBook(Book book) {
        books.add(book);
        System.out.println("Added book: " + book);
    }
}
