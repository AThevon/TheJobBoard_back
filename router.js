// Importation du module Router d'Express
const router = require("express").Router();

const {
    getOffers,
    getOffer,
    createOffer,
    updateOffer,
    deleteOffer,
    searchOffers
} = require("./controllers/Offer");

router.get("/offers", getOffers);

router.get("/search", searchOffers);

router.get("/offers/:id", getOffer);

router.post("/offers", createOffer);

router.patch("/offers/:id", updateOffer);

router.delete("/offers/:id", deleteOffer);


module.exports = router;