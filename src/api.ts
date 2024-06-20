import { Router } from 'express';

import healthCheck from '@components/healthcheck/healthCheck.router';
import user from '@components/user/user.router';
import cards from '@components/cards/cards.router';
// import { adminBro, adminBroRouter } from '@components/adminbro/adminbro.router';
import adminBro from '@components/adminbro/adminbro.router';

const router: Router = Router();
const cors = require('cors');

router.use(cors());

router.use(adminBro.options.rootPath, router);
// router.use('/admin', adminBroRouter);

router.use(healthCheck);
router.use(user);
router.use(cards);
// router.use(adminBro.options.rootPath, adminBroRouter);

export default router;
