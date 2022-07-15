import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnDestroy,OnInit {

  comments: any[] = [];

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(private _commentsService: CommentService) {
    this.comments = [];
  }

  ngOnInit(): void {
    this._commentsService
      .getAll()
      .pipe(takeUntil(this._destroy$))
      .subscribe((response) => {
        if (response.items) {
          this.comments = response.items;
        }
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
