import { createReducer, on } from '@ngrx/store';
import { IBook } from 'src/app/components/book-list/book-list.component';
import { StorageService } from 'src/app/services/storage.service';
import { addBook, editBook, removeBook } from './book.action';

const storageService = new StorageService();

const initalState: IBook[] = storageService.getBooks();

export const bookReducer = createReducer(
  initalState,

  on(addBook, (state, { bookToAdd }) => {
    const newState = [...state, bookToAdd];
    storageService.setBooks(newState);
    return newState;
  }),

  on(removeBook, (state, { bookToRemove }) => {
    const newState = state.filter((book) => book.id !== bookToRemove.id);
    storageService.setBooks(newState);
    return newState;
  }),

  on(editBook, (state, { oldBookData, newBookData }) => {
    const bookIndex = state.findIndex((book) => book.id === oldBookData.id);
    if (bookIndex === -1) return state;

    const newState = [...state];
    newState[bookIndex] = newBookData;
    storageService.setBooks(newState);
    return newState;
  })
);
