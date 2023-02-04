const ObjectId = require('mongoose').Types.ObjectId;

const isValidRequestBody = (requestBody) => {
    return Object.keys(requestBody).length > 0;
}

const isValidObjectId = (objectId) => {
    if (!ObjectId.isValid(objectId)) return false;
    return true;
};

const isValid = (value) => {
    if (typeof value === "undefined" || typeof value === null) return false;
    if (typeof value === "string" && value.trim().length == 0) return false;
    return true;
}

module.exports = { isValidRequestBody, isValidObjectId, isValid };