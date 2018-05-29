import {Injectable} from '@angular/core';
import {Fud} from '../models/fud.model';

@Injectable({
  providedIn: 'root'
})
export class FudService {

  fuds: Fud[] = FUD_MOCKS;

  constructor() {
  }

  getFuds() {
    return this.fuds;
  }

  getFudById(fudId: number): Fud {
    return this.fuds.find((fud) => {
      return fud.id == fudId;
    });
  }
}

const FUD_MOCKS: Fud[] = [
  {
    id: 1,
    title: 'XRP is centralized',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
  {
    id: 1,
    title: 'XRP is not a cryptocurrency',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
  {
    id: 1,
    title: 'XRP is centralized',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
  {
    id: 1,
    title: 'XRP is centralized',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
  {
    id: 1,
    title: 'XRP is centralized',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
  {
    id: 1,
    title: 'XRP is centralized',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
];
