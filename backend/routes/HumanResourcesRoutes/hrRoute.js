const express = require('express');
const hrController = require('../../controllers/HumanResourcesController')
const router = express.Router();

router
    .route('/humanresources')
    .get()
    .post();
router
    .route('/humanresources/:hrId')
    .put()
    .delete();

module.exports = router;