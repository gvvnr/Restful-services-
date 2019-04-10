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
      models.coffee.create({
          name: request.name,
          type:request.type1,
          Shop:[
            {
              name:request.name1
            }
          ]
        },{
          include:[models.Shop]
        }
      )
        .then(body => {
          resolve(body)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

}
