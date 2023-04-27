const Offer = require("../models/Offer");


const getOffers = (req, res) => {
    Offer.find()
        .then((offers) => {
            res.json(offers);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};


const getOffer = (req, res) => {
    Offer.findById(req.params.id)
        .then((offer) => {
            res.json(offer);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};


const createOffer = async (req, res) => {
    const offer = req.body;

    if (!offer) {
        return res.status(400).send("Request body is missing");
    }

    const newOffer = new Offer({
        company: offer.company,
        logo: offer.logo,
        logoBackground: offer.logoBackground,
        position: offer.position,
        contract: offer.contract,
        location: offer.location,
        website: offer.website,
        apply: offer.apply,
        description: offer.description,
        requirements: offer.requirements,
        role: offer.role
    });

    try {
        console.log('newOffer:', newOffer);
        const savedOffer = await newOffer.save();
        console.log('savedOffer:', savedOffer);
        res.json(savedOffer);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


const updateOffer = async (req, res) => {
    Offer.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
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
            },
        },
        { new: true })
        .then((offer) => {
            res.json(offer);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};



const deleteOffer = (req, res) => {
    Offer.deleteOne({ _id: req.params.id })
        .then(() => res.json({ message: "Offer Deleted" }))
        .catch((err) => res.send(err));
};


const searchOffers = async (req, res) => {
    const query = req.query.q;
    const location = req.query.location;
    const isFullTime = req.query.isFullTime === 'true';

    const queryFormatted = new RegExp(query, 'i');
    const locationFormatted = new RegExp(location, 'i');


    const queryObject = {};

    if (query) {
        queryObject
            .$or = [
                { position: queryFormatted },
                { company: queryFormatted }
            ];
    }

    if (location) {
        queryObject.location = locationFormatted;
    }

    if (isFullTime) {
        queryObject.contract = 'full-time';
    }

    Offer.find(queryObject)
        .then((offers) => {
            res.json(offers);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};


module.exports = {
    getOffers,
    getOffer,
    createOffer,
    updateOffer,
    deleteOffer,
    searchOffers
};

