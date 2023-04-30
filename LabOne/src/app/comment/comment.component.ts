import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../shared_classes_and_types/shared.classes';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostCommentService } from 'src/services/post-comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit{
  
  @Input() postId: any;
  commentsList:IComment[];
  ErrMsg:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postCommentsService:PostCommentService) { }
  
  ngOnInit(): void {

    this.postCommentsService.getCommentsApi(this.postId).subscribe(
      {
        next : data => this.commentsList = data,
        error: error=> this.ErrMsg = error
      }
    );
  }

}
