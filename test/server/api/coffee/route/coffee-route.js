import CoffeeController from "../controller/coffee-controller"

export default class CoffeeRoutes {
  static init(router) {
    console.log('getting');
    router
      .route('/routing')
      .post(CoffeeController.createNew)
      .get(CoffeeController.getAll);
    /*router
      .route('/routing/:id')
      .get(ShopController.getId)
      .delete(ShopController.deleteById)
      .put(ShopController.UpdateById);*/
  }


  }
