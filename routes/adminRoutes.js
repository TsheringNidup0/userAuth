const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/dashboard', adminController.getDashboard);


router.get('/add-Food', adminController.getAddfoodPage);
router.post('/add-Food', adminController.postAddFood);


router.get('/food', adminController.getAllFood);
router.get('/foods', adminController.getAllFood);

router.get('/edit-Food/:id', adminController.geteditFood);
router.post('/EditFood/:id', adminController.postEditFood);
router.post('/deleteFood/:id', adminController.deleteFood);

// Add this route
router.get('/addFood', (req, res) => {
  res.render('addFood'); 
});


module.exports = router;
