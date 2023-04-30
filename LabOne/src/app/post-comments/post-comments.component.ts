import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostCommentService } from 'src/services/post-comment.service';
import { IComment } from '../shared_classes_and_types/shared.classes';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {

  postId: any;
  commentsList:IComment[];
  ErrMsg:any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postCommentsService:PostCommentService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.postId = params.get('id');
    });
    
    this.router.navigate(['comments'] ,{ relativeTo: this.activatedRoute });
  }

}
