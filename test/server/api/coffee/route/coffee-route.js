import coffeeController from "../controller/coffee-controller"
import Promise from "bluebird";
import models from "../../../models";


export default class coffeeRoutes {
  static init(router) {
    console.log('getting');
    router
      .route('/routing')
      .post(coffeeController.createNew)
        .get(coffeeController.getAll);
    console.log('got zxcv');
    router
      .route('/routing/:id')
      .get(coffeeController.getId)
      .delete(coffeeController.deleteById)
      .put(coffeeController.UpdateById);
  }


  }
