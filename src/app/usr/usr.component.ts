import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usr',
  templateUrl: './usr.component.html',
  styleUrls: ['./usr.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsrComponent implements OnInit {

  constructor(private route: ActivatedRoute ) { 
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
  }

}
