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
    excerpt: 'XRP is centralized',
    description: `
      There are many validators already running. You can configure the validators to trust using a [Unique Node List](They are the 
      lists of transaction validators a given participant believes will not conspire to defraud them.) (UNL).
      Everyone gets to choose who they trust.
      No one can be forced to trust anyone.
      Validators can't force others to trust them.
      Regardless: everyone can run a rippled node and/or validator and introduce transactions: if the transaction is valid (signed, etc.) 
      it's guaranteed to be included.
      Ripple is working on further decentralization.
    `,
    tweet: '988836581212487680'
  },
  {
    id: 2,
    title: 'Ripple can freeze your coins',
    excerpt: 'XRP is centralized shitcoin and Ripple can freeze Your tokens',
    description: 'The freeze feature only applies to issued currencies (Trusts, non-native assets on the XRP ledger). No one can freeze XRP, the native asset on the XRP ledger.',
    tweet: '977410157633093632'
  },
];
