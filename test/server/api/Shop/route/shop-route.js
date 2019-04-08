import ShopController from "../controller/shop-controller"

export default class ShopRoutes {
  static init(router) {
    console.log('getting');
    router
      .route('/routing')
      .post(ShopController.createNew)
      .get(ShopController.getAll);
    router
      .route('/routing/:id')
      .get(ShopController.getId)
      .delete(ShopController.deleteById)
      .put(ShopController.UpdateById);
  }


  }
