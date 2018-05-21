import {Component, OnInit} from '@angular/core';
import {slugify} from '../../utils/misc';
import {FudService} from '../../providers/fud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  fudsList;

  constructor(private fudService: FudService,) {
    this.fudsList = this.fudService.getFuds();
    this.fudsList = this.fudsList.map((el) => {
      return {
        ...el,
        url: slugify(`${el.id} ${el.title}`)
      };
    });
  }

  ngOnInit() {
  }
}

