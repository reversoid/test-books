import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { IBook } from '../components/book-list/book-list.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { addBook, editBook, removeBook } from '../NgRx/book/book.action';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private _store: Store<{ books: IBook[] }>,
    public dialog: MatDialog
  ) {}

  /**
   * Open dialog and add a new book as a result of the dialog.
   */
  public openAddDialog(): void {
    this._openDialog();
  }

  /**
   * Open dialog for editing the book. Old state must be passed.
   */
  public openEditDialog(book: IBook): void {
    this._openDialog(book);
  }

  /**
   * Template for open dialog.
   * If we pass a book here, then this object
   * will be found in Store and his props will match the result of the dialog.
   */
  private _openDialog(book?: IBook): void {
    const _dialogRefData: IBook = book
      ? { ...book }
      : {
          id: nanoid(),
          name: '',
          author: '',
          year: '',
          pages: '',
        };
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '320px',
      data: _dialogRefData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      if (book) this._editBook(book, result);
      else this.addBook(result);
    });
  }

  /**
   * Add book to the store.
   */
  public addBook(bookToAdd: IBook) {
    this._store.dispatch(addBook({ bookToAdd }));
  }

  /**
   * Remove book from the store
   */
  public removeBook(bookToRemove: IBook) {
    this._store.dispatch(removeBook({ bookToRemove }));
  }

  /**
   * Replace old book data with new one.
   */
  private _editBook(oldBookData: IBook, newBookData: IBook) {
    this._store.dispatch(editBook({ oldBookData, newBookData }));
  }
}
