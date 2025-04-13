import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BLOG_POSTS, BlogPost } from '../blog-data';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule,    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, ],
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  blogPost: BlogPost | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Az URL-ből lekérjük a blog post id-t
    const id = +this.route.snapshot.paramMap.get('id')!;
    // Az id alapján lekérjük a megfelelő blog posztot
    this.blogPost = BLOG_POSTS.find(post => post.id === id);
  }

  deleteComment(commentId: number) {
    if (this.blogPost) {
      this.blogPost.comments = this.blogPost.comments.filter(comment => comment.id !== commentId);
    }
  }

  addComment(writer: string, content: string) {
    if (this.blogPost) {
      const newComment = {
        id: this.blogPost.comments.length + 1, // Új komment ID
        writer,
        content
      };
      this.blogPost.comments.push(newComment);
    }
  }
}