module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', {
         id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
         },
         name: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
         },
         password_hash: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         date_age: {
            type: Sequelize.DATEONLY,
            allowNull: false,
         },
         type_user_id: {
            type: Sequelize.INTEGER,
            references: { model: 'permissions', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            defaultValue: 0,
         },
         created_at: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
         },
      });
   },

   down: queryInterface => {
      return queryInterface.dropTable('users');
   },
};
