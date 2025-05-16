import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BLOG_POSTS, BlogPost } from '../blog-data';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule,MatListModule,
    MatDividerModule,MatCardModule,MatFormFieldModule,MatInputModule  ],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  blogPosts: BlogPost[] = BLOG_POSTS;

  addBlog(title: string, content: string) {
    const newBlog: BlogPost = {
      id: this.blogPosts.length + 1, // Az id az aktuális lista hosszától függ
      title,
      content,
      comments: [] // Alapértelmezett üres kommentek
    };

    // Új blog hozzáadása a lista végére
    this.blogPosts.push(newBlog);
  }
}
