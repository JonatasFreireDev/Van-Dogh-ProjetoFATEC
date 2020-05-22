import * as Yup from 'yup';

import Address from '../models/Address';

class AddressController {
   async index(req, res) {
      const { client_id } = req;

      // const address = await Address.findAll({
      //    where
      // })
   }

   async store(req, res) {}

   async update(req, res) {}

   async delete(req, res) {}
}

export default new AddressController();
