const express = require('express');
const router = express.Router();
const h = require('../handlers');

router.post('/mentor', h.mentor.create);
router.get('/mentor', h.mentor.index);
router.get('/mentor/:mentor_id', h.mentor.show);

router.post('/course', h.course.create);
router.get('/course', h.course.index);
router.get('/course/:course_id', h.course.show);

router.post('/course/subscribe', h.userCourse.create);

module.exports = router;