let mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: true,
            trim: true
        },

        qtyPerUnit: {
            type: Number,
            required: true,
            trim: true,
        },

        unitPrice: {
            type: Number,
            required: true,
            trim: true,
        },

        unitInStock: {
            type: Number,
            required: true,
            trim: true,
        },

        discontinued: {
            type: Boolean,
            default: false,
            required: true,
        },

        categoryId: {
            type: mongoose.Types.ObjectId,
            ref:"Category",
            required:true,
            trim:true
        },

        deletedAt: { type: Date, default: null },

        isDeleted: { type: Boolean, default: false },

    }, { timestamps: true })

module.exports = mongoose.model("Product", productSchema);