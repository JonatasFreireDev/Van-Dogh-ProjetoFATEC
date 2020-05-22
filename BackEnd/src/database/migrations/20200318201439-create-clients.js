module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('clients', {
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
         cpf: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
         },
         cell: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         date_age: {
            type: Sequelize.DATEONLY,
            allowNull: false,
         },
         address_id: {
            type: Sequelize.INTEGER,
            references: { model: 'address', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
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
      return queryInterface.dropTable('clients');
   },
};
