import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/shared/posts.service';
import { Post } from 'src/app/shared/interface';
import { Subscription } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = ''
  
  constructor(
    private postService: PostsService,
    private alert: AlertService
  ) {}  

  ngOnInit(): void {
    this.pSub = this.postService.getAll().subscribe((posts) => {
      this.posts = posts
    })
  }

  remove(id: string) {
    this.dSub = this.postService.delete(id).subscribe(() => {
      this.posts = this.posts.filter(post => {
        return post.id !== id
      })
      this.alert.warning('Post was removed')
    })
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.dSub) {
      this.dSub.unsubscribe()
    }

  }
}
