module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('permissions', {
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
         per_create: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         per_update: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         per_delete: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         per_view: {
            type: Sequelize.STRING,
            allowNull: false,
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
      return queryInterface.dropTable('permissions');
   },
};
