import Promise from "bluebird";
import models from "../../../models"
export class CoffeeDao {

  static getAll() {
    return new Promise((resolve, reject) => {
      models.Shop.findAndCountAll()
        .then(users => {
          //console.log(JSON.stringify(users));
          resolve(users);
        }, (error) => {
          reject(error);
        })
    })
  }

  static createNew(request) {
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew method in dao');
      models.Shop.create({
        name: request.name
      }).then(body => {
        resolve(body)
      })
        .catch(error => {
          reject(error)
        })
    })
  }





}
