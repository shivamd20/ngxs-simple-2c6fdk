import { State, Action } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}

export class ClearState{
    static readonly type = 'ClearState';
}

@State<{number: {
  value
}}>({
  name: 'count',
  defaults: {
    number: {
      value : 5
    } 
  }
})
export class CountState {

   @Action(ClearState)
  clear({ getState, setState }) {
    const state = getState();
    setState({});
  }


  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState({number : {
      value : Math.random() * 10
    }});

    console.log(state);
  }
}
