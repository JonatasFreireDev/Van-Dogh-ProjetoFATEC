import * as Yup from 'yup';

import Client from '../models/Client';

class ClientController {
   async store(req, res) {
      const schema = Yup.object().shape({
         name: Yup.string().required(),
         email: Yup.string()
            .email()
            .required(),
         password: Yup.string()
            .min(6)
            .required(),
         cpf: Yup.number()
            .positive()
            .required(),
         cell: Yup.number()
            .positive()
            .required(),
         date_age: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      const ClientExists = await Client.findOne({
         where: { email: req.body.email },
      });

      if (ClientExists) {
         return res.status(400).json({ error: 'Client already exists.' });
      }

      const { id, name, email, cell, date_age } = await Client.create(req.body);

      return res.json({ id, name, email, cell, date_age });
   }

   async update(req, res) {}

   async delete(req, res) {
      const client = await Client.findByPk(req.params.id);

      if (!client) {
         return res.status(401).json({ error: 'Client does not exists' });
      }

      await client.destroy();

      return res.json({
         sucess: 'client was deleted',
      });
   }
}

export default new ClientController();
