const Guide = require("../models/guideInfo");

module.exports.guideSearch = async (req, res) => {
    try {
        const { query } = req.body;
        const search = await Guide.find({ city: query });
        res.json({ data: search });
    } catch (error) {
        console.log(error);
    }
};
