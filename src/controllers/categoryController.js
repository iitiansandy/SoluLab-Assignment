const categoryModel = require("../models/categoryModel");

const { isValidRequestBody, isValidObjectId, isValid } = require('../utils/utils');



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ Create Category +++++++++++++++++++++++++++++++++++++++++++++++++++ */


const createCategory = async function (req, res) {
    try {
        let data = req.body;
        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, message: " Enter data in body" });
        }

        let { categoryName } = data;

        if (!isValid(categoryName)) {
            return res
              .status(400)
              .send({ status: false, message: "Provide the categoryName " });
        }

        let savedData = await categoryModel.create(data)
        return res.status(201).send({ status: true, data: savedData });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
};

module.exports = { createCategory };
