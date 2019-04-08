import TodoRoutes from "../api/todo/route/todo-route";
import coffeeRoutes from "../api/coffee/route/coffee-route";

export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);

     coffeeRoutes.init(router);
     console.log('main roues page :');

     app.use("/", router);
     //app.use("/coffee",router);

   }
}
