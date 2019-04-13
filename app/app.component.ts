import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CountState, ClearState } from './app.state';

//Click on click me button and you will see a ramdom number is printed and if you click on clearState button you will see that the number has gone from the UI. Now if you click on click me you will see that state is getting updated but UI is not getting updated

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
    try {
    console.log(state)

    return state.count.number.value
    }catch (err){
      console.log(err)
      throw err;
    }
  
  }) count$: Observable<number>;  // here the selector updates only till it gets state.count not undefined 

  constructor(private store: Store) {}

  clearState(){
    this.store.dispatch(new ClearState());
  }

  onClick() {
    this.store.dispatch(new Add());
  }
  
}
