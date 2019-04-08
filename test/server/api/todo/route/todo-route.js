import TodoController from "../controller/todo-controller";

export default class TodoRoutes {
  static init(router) {
    router
    .route("/todos")
    .get(TodoController.getAll)
    .post(TodoController.createTodo);

    // router
    // .route("/todos/:id")
    // .delete(TodoController.deleteTodo);
  }
}
