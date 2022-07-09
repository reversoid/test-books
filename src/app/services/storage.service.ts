import { Injectable } from '@angular/core';
import { IBook } from '../components/book-list/book-list.component';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public getBooks(): IBook[] {
    const localBooks = localStorage.getItem('books');
    if (!localBooks) return [];
    return JSON.parse(localBooks);
  }

  public setBooks(books: IBook[]) {
    localStorage.setItem('books', JSON.stringify(books));
  }
}
