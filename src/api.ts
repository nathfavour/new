import { Router } from 'express';

import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import AdminBroMongoose from '@admin-bro/mongoose';

import healthCheck from '@components/healthcheck/healthCheck.router';
import user from '@components/user/user.router';
import cards from '@components/cards/cards.router';

import { UserModel } from '@components/user/user.model';
import { CardsModel } from '@components/cards/cards.model';

AdminBro.registerAdapter(AdminBroMongoose);

// Configure AdminBro
const adminBroOptions = {
  resources: [
    {
      resource: UserModel,
      options: {
        /* ... */
      },
    },
    {
      resource: CardsModel,
      options: {
        /* ... */
      },
    },
  ],
  rootPath: '/admin', // Set your desired root path
  // ... other AdminBro options
};

const adminBro = new AdminBro(adminBroOptions);
const adminBroRouter = AdminBroExpress.buildRouter(adminBro);

const router: Router = Router();
const cors = require('cors');

router.use(cors());

router.use(adminBro.options.rootPath, adminBroRouter);
router.use(healthCheck);
router.use(user);
router.use(cards);

// errors!!!

export default router;
