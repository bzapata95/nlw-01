import {Response, Request} from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request:Request, response: Response) {
    const items = await  knex('items').select('*');

  const serializedItems = items.map(item => {
    return  {
      ...item,
      title: item.title,
      image_url: `http://192.168.1.7:3333/uploads/${item.image}`
    }
  })

  return  response.json(serializedItems);
  }
}

export default ItemsController;