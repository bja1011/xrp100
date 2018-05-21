import {Component, OnInit} from '@angular/core';
import {FudService} from '../../providers/fud.service';
import {Fud} from '../../models/fud.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fud-view',
  templateUrl: './fud-view.component.html',
  styleUrls: ['./fud-view.component.scss']
})
export class FudViewComponent implements OnInit {

  fud: Fud;
  navParamSubscriber;

  constructor(private fudService: FudService,
              private route: ActivatedRoute,) {
    this.navParamSubscriber = route.params.subscribe((params) => {
      const fudId = params.fudSlug.split('-')[0];
      this.fud = this.fudService.getFudById(fudId);
    });
  }

  ngOnInit() {
  }

}
