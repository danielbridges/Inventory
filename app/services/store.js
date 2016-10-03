import Ember from 'ember';
import Tool from '../models/tool';

const tools = [];
const categories = [];
const electronics = [];

// when you're using real data, you'll have to use the built in
// store to call createRecord, which will wire your data to be 'observable'
tools.pushObject({
  id: '1',
  categoryId: 'tools',
  description: '17mm wrench',
  quantity: 1,
  brand: 'Craftsman'
});
tools.pushObject({
  id: '2',
  categoryId: 'tools',
  description: '13mm wrench',
  quantity: 4,
  brand: 'Craftsman',
  type: 'Open/Box combination'
});

electronics.pushObject({
  id: '1',
  categoryId: 'electronics',
  description: 'Thinkpad W520 laptop',
  quantity: 1,
  brand: 'Lenovo',
  type: 'Laptop'
});
electronics.pushObject({
  id: '2',
  categoryId: 'electronics',
  description: 'Desktop GT5628',
  quantity: 1,
  brand: 'Gateway',
  type: 'Desktop'
});
electronics.pushObject({
  id: '3',
  categoryId: 'electronics',
  description: 'Vizio 60" TV',
  quantity: 1,
  brand: 'Vizio',
  type: '4K Ultra HD LCD'
});

categories.pushObject({
  id: 'tools',
  description: 'Tools'
});
categories.pushObject({
  id: 'electronics',
  description: 'Electronics'
});
categories.pushObject({
  id: 'housewares',
  description: 'Housewares'
});
categories.pushObject({
  id: 'sportinggoods',
  description: 'Sporting Goods'
});

export default Ember.Service.extend({
  getAllTools() {
    return tools;
  },

  getToolById(id) {
    return this.getAllTools().findBy('id', id);
  },

  getAllCategories(){
    return categories;
  },
  getAllCategoriesById(id){
    return getAllCategories().findBy('id', id);
  },
  getAllElectronics(){
    return electronics;
  },
  getElectronicsById(id){
    return getAllElectronics().findBy('id', id);
  }
});
