const express = require('express');
const { getForm, createPost } = require('../controllers/form.js');

const router = express.Router();

router.get('/', getForm);
router.post('/', createPost);

module.exports = router;
