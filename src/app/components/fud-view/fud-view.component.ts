import {Component, OnInit} from '@angular/core';
import {FudService} from '../../providers/fud.service';
import {Fud} from '../../models/fud.model';
import {ActivatedRoute} from '@angular/router';
import {slugify} from '../../utils/misc';

@Component({
  selector: 'app-fud-view',
  templateUrl: './fud-view.component.html',
  styleUrls: ['./fud-view.component.scss']
})
export class FudViewComponent implements OnInit {

  fud: Fud;
  fudsList: Fud[];
  navParamSubscriber;
  showSideNav: boolean;

  constructor(private fudService: FudService,
              private route: ActivatedRoute,) {
    this.fudsList = this.fudService.fuds.map((el) => {
      return {
        ...el,
        url: slugify(`${el.id} ${el.title}`)
      };
    });
    this.navParamSubscriber = route.params.subscribe((params) => {
      const fudId = params.fudSlug.split('-')[0];
      this.fud = this.fudService.getFudById(fudId);
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.showSideNav = true;
    }, 2000);
  }

}
