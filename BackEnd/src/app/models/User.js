import bcrypt from 'bcryptjs';
import { differenceInCalendarYears, formatISO } from 'date-fns';
import Sequelize, { Model } from 'sequelize';

class User extends Model {
   static init(sequelize) {
      super.init(
         {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            date_age: Sequelize.DATE,
            age: Sequelize.VIRTUAL,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            type_user_id: Sequelize.STRING,
         },
         {
            sequelize,
         }
      );

      this.addHook('beforeSave', async user => {
         console.log(user);
         if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8);
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

export default User;
