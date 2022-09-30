const express = require('express');
const router = express.Router();
const h = require('../handlers');
const utils = require('../utils');

router.post('/auth', h.auth.register);
router.post('/auth', h.auth.login);

router.post('/mentor', utils.middleware.authUser, h.mentor.create);
router.get('/mentor', utils.middleware.authUser, h.mentor.index);
router.get('/mentor/:mentor_id', utils.middleware.authUser, h.mentor.show);

router.post('/course', utils.middleware.authUser, h.course.create);
router.get('/course', utils.middleware.authUser, h.course.index);
router.get('/course/:course_id', utils.middleware.authUser, h.course.show);
router.post('/course/subscribe', utils.middleware.authUser, h.userCourse.create);

module.exports = router;