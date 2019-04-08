import TodoRoutes from "../api/todo/route/todo-route";
import ShopRoutes from "../api/Shop/route/shop-route";

export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);

     ShopRoutes.init(router);

     app.use("/", router);
     //app.use("/coffee",router);

   }
}
