
const express = require('express');
const router = express.Router();
const Offer = require('../models/offers');


// Get all offers
router.get('/', async (req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one offer
router.get('/:id', getOffer, (req, res) => {
    res.send(res.offer);
});

// Create one offer
router.post('/', async (req, res) => {
    const offer = new Offer([{
        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,
        requirements: {
            content: req.body.requirements.content,
            items: req.body.requirements.items
        },
        role: {
            content: req.body.role.content,
            items: req.body.role.items
        }
    }]);

    console.log(offer);

    try {
        const newOffer = await offer.save();
        res.status(201).json(newOffer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Update one offer
router.patch('/:id', getOffer, async (req, res) => {

    const fieldsToUpdate = [
        'company', 
        'logo', 
        'logoBackground',
        'position', 
        'postedAt', 
        'contract', 
        'location', 
        'website', 
        'apply', 
        'description', 
        'requirements', 
        'role'
    ];

    fieldsToUpdate.forEach(key => {
        if (req.body[key] != null) {
            res.offer[key] = req.body[key];
        }
    });
    
    try {
        const updatedOffer = await res.offer.save();
        res.json(updatedOffer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Delete one offer
router.delete('/:id', getOffer, async (req, res) => {
    try {
        await res.offer.deleteOne()
        res.json({ message: 'Offer deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



async function getOffer(req, res, next) {
    let offer;
    try {
        offer = await Offer.findById(req.params.id);
        if (offer == null) {
            return res.status(404).json({ message: 'Cannot find offer' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.offer = offer;
    next();
}


module.exports = router;