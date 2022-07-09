import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

export interface IBook {
  id: string;
  author: string;
  name: string;
  year: string;
  pages: string;
}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$: Observable<IBook[]>;

  constructor(
    private _store: Store<{ books: IBook[] }>,
    public bookSerivce: BookService
  ) {
    this.books$ = _store.select('books');
  }
}
