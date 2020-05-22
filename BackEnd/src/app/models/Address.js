import Sequelize, { Model } from 'sequelize';

class Address extends Model {
   static init(sequelize) {
      super.init(
         {
            street: Sequelize.STRING,
            number: Sequelize.INTEGER,
            neighborhood: Sequelize.STRING,
            city: Sequelize.STRING,
            state: Sequelize.STRING,
            country: Sequelize.STRING,
            postal_code: Sequelize.INTEGER,
         },
         {
            sequelize,
         }
      );

      return this;
   }

   static associate(models) {
      this.belongsTo(models.Client, {
         foreignKey: 'user_id',
         as: 'user',
      });
   }
}

export default Address;
