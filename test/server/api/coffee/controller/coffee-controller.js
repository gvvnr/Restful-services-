import {CoffeeDao} from "../dao/coffee-dao";

export default class CoffeeController {
  static getAll(req, res) {
    CoffeeDao.getAll()
      .then(ShopDao => {
        res.status(201).json(ShopDao);
      })
      .catch(error => {
        res(error).json(error);
      })

  }
  static createNew(req, res) {
    console.log("---->",req.body);
    console.log('In coffe-route controller')
    const _reqBody = req.body;
    CoffeeDao.createNew(_reqBody)
      .then(ShopDao => {
        res.status(201).json(ShopDao);
      })
      .catch(error => {
        console.log(error);
      });
  }




}
