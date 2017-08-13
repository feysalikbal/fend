import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  post: any;
  what: string = '';
  where: string = '';
  when: string = '';

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) {
                this.searchForm = fb.group({
                  'what': [null, Validators.required],
                  'where': [null],
                  'when': [null]
                });
               }

  ngOnInit() {
  }

  onSearch(post){
    this.what = post.what;
    this.where = post.where;
    this.when = post.when;
    console.log("..."+this.what+"..."+this.where+"..."+this.when);
    this.router.navigate(['item-list']);
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['signin']);
    }
}
