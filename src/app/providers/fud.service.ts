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
      return fud.id === fudId;
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
    id: 2,
    title: 'XRP is not a real cryptocurrency',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Definition of a blockchain: A blockchain is a continuously growing list of records, called blocks, which are linked and secured using cryptography, on a distributed ledger. Each block typically contains a cryptographic hash of the previous block, a timestamp and transaction data. This all applies on XRP.'
  },
  {
    id: 3,
    title: 'Ripple can freeze your coins',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
  {
    id: 4,
    title: 'XRP is centralized',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
  {
    id: 5,
    title: 'XRP is centralized',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
  {
    id: 6,
    title: 'XRP is centralized',
    photo: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'Not true,Not trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot trueNot true'
  },
];
