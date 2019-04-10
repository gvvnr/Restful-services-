import {ShopDao} from "../dao/shop-dao";

export default class ShopController {

  static getAll(req, res) {
    console.log('you are in shop');
    ShopDao.getAll()
      .then(ShopDao => {
        res.status(201).json(ShopDao);
      })
      .catch(error => {
        res(error).json(error);
      })

  }
  static createNew(req, res) {
    console.log("---->",req.body);
    const _reqBody = req.body;
    ShopDao.createNew(_reqBody)
      .then(ShopDao => {
        res.status(201).json(ShopDao);
      })
      .catch(error => {
        res(error).json(error);
      });
  }
  static getId(req,res){
    let id=req.params.id;
    console.log('id is ->',id);
    ShopDao.getById(id).then(ShopDao =>{
      res.send(ShopDao);
    })
      .catch(error => {
        res(error).json(error);

      });;
  }
  static deleteById(req,res){
    let id=req.params.id;
    ShopDao.deleteById(id)
      .then(ShopDao => {
        res.status(201).json(ShopDao);

      })
      .catch(error => {
        res.status(401).json(error);

      });
  }
  static UpdateById(req, res){
    let id=req.params.id;
    const _reqBody=req.body;
    console.log('id-->',id);
    console.log('body-->',_reqBody);
    ShopDao.update(_reqBody,id)
      .then(ShopDao => {
        res.status(201).json(ShopDao);

      })
      .catch(error => {
        res(error).json(error);

      });
  }





}

/*static patch(req,res){
    const _reqBody=req.body;
    ShopDao.patchData(_reqBody);
  }*/
