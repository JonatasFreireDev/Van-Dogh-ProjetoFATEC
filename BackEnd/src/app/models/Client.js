import bcrypt from 'bcryptjs';
import { differenceInCalendarYears, formatISO } from 'date-fns';
import Sequelize, { Model } from 'sequelize';

class Client extends Model {
   static init(sequelize) {
      super.init(
         {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            cpf: Sequelize.INTEGER,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            cell: Sequelize.INTEGER,
            date_age: Sequelize.DATE,
         },
         {
            sequelize,
         }
      );

      this.addHook('beforeSave', async client => {
         console.log(client);
         if (client.password) {
            client.password_hash = await bcrypt.hash(client.password, 8);
         }
      });

      return this;
   }

   checkPassword(password) {
      return bcrypt.compare(password, this.password_hash);
   }

   checkAge() {
      const today = new Date();
      return differenceInCalendarYears(today, formatISO(this.date_age));
   }
}

export default Client;
