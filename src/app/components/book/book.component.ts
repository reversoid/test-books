import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeBook } from 'src/app/NgRx/book/book.action';
import { BookService } from 'src/app/services/book.service';
import { IBook } from '../book-list/book-list.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() bookInfo!: IBook;

  constructor(public bookService: BookService) {}
}
