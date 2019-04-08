
import Promise from "bluebird";
import models from "../../../models"
export class coffeeDao {

  static getAll() {
    return new Promise((resolve, reject) => {
      models.Shop.findAndCountAll()
        .then(users => {
          resolve(users);
          console.log(JSON.stringify(users))


        }, (error) => {

          reject(error);
          // console.log(JSON.stringify(error))
        })
    })
  }

  static createNew(request) {
    return new Promise((resolve, reject) => {
      console.log('enterd into createnew method in dao', request.shopId)

      models.Shop.create({
        name: request.name,
        type: request.type,


      }).then(body => {
        resolve(body)
      })
        .catch(error => {
          reject(error)
          console.log(error);

        })
    })

  }


  static getById(_id) {
    console.log(typeof _id);
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
          }
        }, (error) => {
          reject(error)
        })

    })
  }


  static deleteById(_id) {
    return new Promise((resolve, reject) => {
      console.log('In DAO page');
      models.Shop
        .destroy({
          where: {id: parseInt(_id)}

        })
        .then(body => {
          console.log('deleted', body)
        })
        .catch(error => {
          console.log('can not delete because =>', error);
        })
    })
  }

  static update(_reqBody, _id) {
    return new Promise((resolve, reject) => {
      console.log('modifying data');
      models.Shop
        .update({
            name: _reqBody.name
          },
          {where: {id: _id}, returning: true, plain: true})
        .then((projects) => {
          resolve(projects)
          console.log(JSON.stringify(projects));
        }, (error) => {
          reject(error)
        })
    })
  }








}
