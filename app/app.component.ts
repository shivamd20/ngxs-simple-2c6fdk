import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CountState, ClearState } from './app.state';

@Component({
  selector: 'my-app',
  template: `
    <h1>Count is {{count$ | async}}</h1>
    <button (click)="onClick()">Click Me</button>
      <button (click)="clearState()">Clear State</button>
  `
})
export class AppComponent  {

  @Select(state =>{
    
    console.log(state)

    return state.count.number.value
  
  }) count$: Observable<number>;

  constructor(private store: Store) {}

  clearState(){
    this.store.dispatch(new ClearState());
  }

  onClick() {
    this.store.dispatch(new Add());
  }
  
}
