import Sequelize, { Model } from 'sequelize';

class Permissions extends Model {
   static init(sequelize) {
      super.init(
         {
            name: Sequelize.STRING,
            per_create: Sequelize.STRING,
            per_update: Sequelize.STRING,
            per_delete: Sequelize.STRING,
            per_view: Sequelize.STRING,
         },
         {
            sequelize,
         }
      );

      return this;
   }

   static associate(models) {
      this.belongsToMany(models.User, {
         foreignKey: 'user_id',
         as: 'user',
      });
   }
}

export default Permissions;
