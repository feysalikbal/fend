import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from '../item.model';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  av = true;
  user = [new User("Faisal", "JS@ng.com", "image", 100)];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = [
      new Item("Book", "AngularJS", "image", this.av, this.user),
    ];
  }

}
