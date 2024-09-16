var express = require('express');
var router = express.Router();

import PipelinesController from '../controllers/pipelinesController'

router.post('/parse', PipelinesController.parse);

module.exports = router;
