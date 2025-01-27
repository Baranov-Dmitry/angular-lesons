import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from 'src/app/shared/posts.service';
import { switchMap } from 'rxjs/operators';
import { Post } from 'src/app/shared/interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  post: Post
  submited = false

  uSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private postServices: PostsService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.postServices.getById(params['id'])
        })
      ).subscribe((post: Post) => {
        this.post = post
        this.form = new FormGroup({
          title: new FormControl(post.title, Validators.required),
          text: new FormControl(post.text, Validators.required),
        })
      })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submited = true

    this.uSub = this.postServices.update({
      ...this.post,
      text: this.form.value.text,
      title: this.form.value.title
    }).subscribe(() => {
      this.submited = false
      this.alert.success('Post was updated')
    })

  }

  ngOnDestroy(): void {
    if (this.uSub) {
      this.uSub.unsubscribe()
    }
  }

}
