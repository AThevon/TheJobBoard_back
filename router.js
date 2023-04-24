// Importation du module Router d'Express
const router = require("express").Router();


const {
    getOffers,
    getOffer,
    createOffer,
    updateOffer,
    deleteOffer,
} = require("./controllers/Offer");

router.get("/", getOffers);

router.get("/:id", getOffer);

router.post("/", createOffer);

router.patch("/:id", updateOffer);

router.delete("/:id", deleteOffer);

module.exports = router;