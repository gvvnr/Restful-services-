import ShopController from "../controller/shop-controller"

export default class ShopRoutes {
  static init(router) {
    console.log('getting');
    router
      .route('/shop')
      .post(ShopController.createNew)
      //.patch(ShopController.patch);
      .get(ShopController.getAll);
    router
      .route('/shop/:id')
      .get(ShopController.getId)
      .delete(ShopController.deleteById)
      .put(ShopController.UpdateById);
  }


  }
