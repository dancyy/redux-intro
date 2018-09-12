import { LOAD_ITEM } from '../constants';

let initialState = {
  products: [
    { id: '1', price: 50, name: 'baby big foot' },
    { id: '2', price: 150, name: 'Mutated Hamster foot' },
    { id: '3', price: 5, name: 'sandwich' },
    { id: '4', price: 20, name: 'ninja turtle pizza' }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEM:
      return state;
    default:
      return state;
  }
};
