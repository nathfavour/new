import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import AdminBroMongoose from '@admin-bro/mongoose';

import { UserModel } from '../user/user.model';
import { CardsModel } from '../cards/cards.model';

AdminBro.registerAdapter(AdminBroMongoose);

const adminBroOptions = {
  resources: [
    {
      resource: UserModel,
      options: {
        /* resource options */
      },
    },
    // other resources...
    {
      resource: CardsModel,
      options: {
        /* resource options */
      },
    },
  ],
  // other options...
  rootPath: '/admin',
};

const adminBro = new AdminBro(adminBroOptions);

const router = AdminBroExpress.buildRouter(adminBro);

// const router = AdminBroExpress.buildRouter(adminBro)

export default router;
