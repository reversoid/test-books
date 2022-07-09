import { createAction, props } from '@ngrx/store';
import { IBook } from 'src/app/components/book-list/book-list.component';

export const addBook = createAction(
  '[Book Collection] Add Book',
  props<{ bookToAdd: IBook }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookToRemove: IBook }>()
);

export const editBook = createAction(
  '[Book Collection] Edit Book',
  props<{ oldBookData: IBook; newBookData: IBook }>()
);
