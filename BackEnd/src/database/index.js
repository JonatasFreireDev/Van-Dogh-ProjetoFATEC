import { Sequelize } from 'sequelize';

import Address from '../app/models/Address';
import Client from '../app/models/Client';
import Permissions from '../app/models/Permissions';
import User from '../app/models/User';
import configDatabase from '../config/database';

const models = [Address, Permissions, User, Client];

class Database {
   constructor() {
      this.init();
   }

   init() {
      this.sequelize = new Sequelize(configDatabase);

      models.map(model => model.init(this.sequelize));
      // models.map(
      //    model => model.associate && model.associate(this.connection.models)
      // );
   }
}

export default new Database();
