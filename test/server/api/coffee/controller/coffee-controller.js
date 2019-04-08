import {coffeeDao} from "../dao/coffee-dao";

export default class coffeeController {
  static getAll(req, res) {
    const _query = req.query;
    console.log("getALL")
    coffeeDao.getAll(_query)
      .then(users => {
        res.send(users);
      })

  }
  static createNew(req, res) {
    console.log("---->",req.body);
    const _reqBody = req.body;
    coffeeDao.createNew(_reqBody)
      .then(coffee => {
        console.log("ooooo");
        res.status(201)
          .json(coffee);

      })
      .catch(error => {
        console.log('error');

      });
  }
  static getId(req,res){
    console.log(req.params.id);
    let id=req.params.id
    coffeeDao.getById(id);
  }
  static deleteById(req){
    console.log('in controller page :');
    console.log(req);
    let id=req.params.id;
    coffeeDao.deleteById(id);
  }
  static UpdateById(req, res){
    let id=req.params.id;
    const _reqBody=req.body;
    console.log('id-->',id);
    console.log('body-->',_reqBody);
    coffeeDao.update(_reqBody,id);
  }

}
