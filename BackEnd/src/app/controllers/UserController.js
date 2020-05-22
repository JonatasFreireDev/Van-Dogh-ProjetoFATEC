import * as Yup from 'yup';

import Permissions from '../models/Permissions';
import User from '../models/User';

class UserController {
   async store(req, res) {
      const schema = Yup.object().shape({
         name: Yup.string().required(),
         email: Yup.string()
            .email()
            .required(),
         password: Yup.string()
            .min(6)
            .required(),
         date_age: Yup.string().required(),
         type_user_id: Yup.number().positive(),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      // Verifica se usuario ja existe
      const userExists = await User.findOne({
         where: { email: req.body.email },
      });

      if (userExists) {
         return res.status(400).json({ error: 'user already exists.' });
      }

      // Cria o novo usuario
      const { id, name, email, date_age, type_user_id } = await User.create(
         req.body
      );

      // Consulta o tipo de usuario para enviar na resposta
      const { name: name_permission } = await Permissions.findOne({
         where: { id: type_user_id },
      });

      return res.json({ id, name, email, date_age, name_permission });
   }

   async update(req, res) {
      const schema = Yup.object().shape({
         name: Yup.string(),
         email: Yup.string().email(),
         old_password: Yup.string().min(6),
         password: Yup.string()
            .min(6)
            .when('old_password', (old_password, field) =>
               old_password ? field.required() : field
            ),
         confirmPassword: Yup.string().when('password', (password, field) =>
            password ? field.required().oneOf([Yup.ref('password')]) : field
         ),
         date_age: Yup.string(),
      });

      if (!(await schema.isValid(req.body))) {
         return res.status(400).json({ error: 'Validation fails' });
      }

      // Procura o usuario no banco
      const user = await User.findByPk(req.userId);

      const { oldPassword } = req.body;

      // Se tentar o alterar o tipo de usuario, retorna erro
      if (req.type_user_id) {
         return res
            .status(400)
            .json({ error: 'You does not change your Type User' });
      }

      // Se alterar email, verifica se ja não existe o email
      if (req.body.email) {
         const verify_email = await User.findOne({
            where: { email: req.body.email },
         });
         if (verify_email) {
            return res.status(400).json({ error: 'Email already exists ' });
         }
      }

      // Se alterar a senha, Verifica se a senha antiga é igual a informada
      if (oldPassword && !(await user.checkPassword(oldPassword))) {
         return res.status(401).json({ error: 'Password does not match' });
      }

      // Altera os dados no Banco
      await user.update(req.body);

      // Consulta os novos Dados
      const user_update = await User.findByPk(req.userId);

      // Calcula idade da pessoa
      const age = user_update.checkAge();

      return res.json({ ...user_update, age });
   }

   async delete(req, res) {
      const user = await User.findByPk(req.params.id);

      if (!user) {
         return res.status(401).json({ error: 'User does not exists' });
      }

      await user.destroy();

      return res.json({
         sucess: 'User was deleted',
      });
   }
}

export default new UserController();
