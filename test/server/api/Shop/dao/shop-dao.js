import Promise from "bluebird";
import models from "../../../models"
export class ShopDao {

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

  static getById(_id) {
    return new Promise((resolve, reject) => {
      console.log('getById Dao', _id);
      models.Shop
        .findAll({
          where: {id: parseInt(_id)}
        })
        .then((Shop) => {
          if (!Shop) {
            return reject(404)
          } else {
            console.log(JSON.stringify(Shop));
            return resolve(Shop);
          }
        }, (error) => {
          reject(error)
        })

    })
  }

  static deleteById(_id) {
    return new Promise((resolve, reject) => {
      models.Shop
        .destroy({
          where: {id: parseInt(_id)}

        })
        .then(body => {
          resolve(body)
        })
        .catch(error => {
          console.log('can not delete because =>', error);
          reject(error)
        })
    })
  }

  static update(_reqBody, _id) {
    return new Promise((resolve, reject) => {
      models.Shop
        .update({
            name: _reqBody.name
          },
          {where: {id: _id}, returning: true, plain: true})
        .then((projects) => {
          resolve(projects)
        }, (error) => {
          reject(error)
        })
    })
  }
}
