import TodoRoutes from "../api/todo/route/todo-route";
import ShopRoutes from "../api/Shop/route/shop-route";
import CoffeeRoutes from "../api/coffee/route/coffee-route"
export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);

     ShopRoutes.init(router);

     CoffeeRoutes.init(router);
     app.use("/", router);

   }
}
