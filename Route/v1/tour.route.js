const router = require('express').Router();
const tourCollectore = require('../../Collectore/tour.collectore');

router
	.route('/')
	.get(tourCollectore.getAllTourCollectore)
	.post(tourCollectore.postTourCollectore);

router.route('/:id').get(tourCollectore.getATourByIdCollectore);
router.route('');

module.exports = router;
