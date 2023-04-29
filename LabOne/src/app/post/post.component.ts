import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  postsList:any[];
  ErrMsg:any;

  constructor(private postService:PostService, private router:Router, private activatedRoute:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.postService.getPostsApi().subscribe({
      next:data=>this.postsList=data,
      error:error=>this.ErrMsg=error
    });
  }

  goToComments(postId:number){
    this.router.navigate(['/posts', postId]);
  }

  // goToComments()
  // {
  //   //localhost:4200/posts/1/comments
  //   this.router.navigate(['comments'],{relativeTo:this.activatedRoute});
  // }

}
