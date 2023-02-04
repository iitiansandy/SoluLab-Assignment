const productModel = require("../models/productModel");

const { isValidRequestBody, isValidObjectId, isValid } = require('../utils/utils');




/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ Create Product +++++++++++++++++++++++++++++++++++++++++++++++++++ */




const createProduct = async function (req, res) {
    try {
        let data = req.body;
        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, message: "Please enter data in body" });
        }

        let { productName, qtyPerUnit, unitPrice, unitInStock, discontinued } = data;

        /* ****************** productName Validation ****************** */

        if (!isValid(productName)) {
            return res
              .status(400)
              .send({ status: false, message: "Provide the productName " });
        }
      
        /* ****************** qtyPerUnit Validation ****************** */

        if (!isValid(qtyPerUnit)) {
            return res
              .status(400)
              .send({ status: false, message: "qtyPerUnit is required" });
          }
          if (!/\d+(?:[.,]\d{0,2})?/.test(qtyPerUnit)) {
            return res
              .status(400)
              .send({ status: false, message: "qtyPerUnit Must be in Numbers" });
          }

        /* ****************** unitPrice Validation ****************** */

        if (!isValid(unitPrice)) {
            return res
              .status(400)
              .send({ status: false, message: "unitPrice is required" });
          }
          if (!/\d+(?:[.,]\d{0,2})?/.test(unitPrice)) {
            return res
              .status(400)
              .send({ status: false, message: "unitPrice Must be in Numbers" });
          }

        /* ****************** unitInStock Validation ****************** */
        
        if (!isValid(unitInStock)) {
            return res
              .status(400)
              .send({ status: false, message: "unitInStock is required" });
          }
          if (!/\d+(?:[.,]\d{0,2})?/.test(unitInStock)) {
            return res
              .status(400)
              .send({ status: false, message: "unitInStock Must be in Numbers" });
          }

          if (!isValid(discontinued)) {
            return res
              .status(400)
              .send({ status: false, message: "discontinued is required" });
          }
        
        let savedData = await productModel.create(data)
        return res.status(201).send({ status: true, data: savedData });

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message });
    }
};




/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ Get Product By Product ID +++++++++++++++++++++++++++++++++++++++++++++++++++ */



const getProductbyId = async function (req, res) {
    try {
      let Pid = req.params.productId;
  
      if (!isValidObjectId(Pid)) {
        return res.status(400).send({
          status: false,
          message: "Invalid Product ID please Provide Valid Product Id",
        });
      }
  
      const findProductDb = await productModel.findOne({
        _id: Pid,
        isDeleted: false,
      });
  
      if (!findProductDb) {
        return res.status(404).send({ status: false, message: "Product Not Found" });
      }
  
      return res.status(200).send({
        status: true,
        message: "Success",
        data: findProductDb,
      });
    } catch (err) {
      return res.status(500).send({ status: false, message: err.message });
    }
  };




/* +++++++++++++++++++++++++++++++++++++++++++++++++++++ Get Products +++++++++++++++++++++++++++++++++++++++++++++++++++ */




const getProduct = async function (req, res) {
    try {

        let products = await productModel.find();
        if (products.length == 0) return res.status(404).send({ status: false, message: "There are no products." });

        return res.status(200).send({ status: true, data: products });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
};




/* ++++++++++++++++++++++++++++++++++++++++++++ Update Products by Product ID ++++++++++++++++++++++++++++++++++++++++++ */




const updateProductbyId = async function (req, res) {
    try {
      let productId = req.params.productId;
      if (productId.length == 0 || productId == ":productId")
        return res
          .status(400)
          .send({ status: false, message: "Please enter productId in params" });
      if (!isValidObjectId(productId))
        return res
          .status(400)
          .send({ status: false, message: "Enter productId in valid Format" });
  
      let data = await productModel.findById(productId);
      if (!data)
        return res
          .status(404)
          .send({ status: false, message: "No Product found with this ID" });
      if (data.isDeleted == true) {
        return res
          .status(400)
          .send({ status: false, message: "This product is Deleted" });
      }
  
      let body = req.body;
  
      if (!isValidRequestBody(body)) {
        return res
          .status(400)
          .send({ status: false, message: "Please enter some data To update" });
      }
  
      let { productName, qtyPerUnit, unitPrice, unitInStock, discontinued } = body;
  
      if ("productName" in body) {
        if (!isValid(productName))
          return res
            .status(400)
            .send({ status: false, message: "productName should not be empty" });

        if (!isValid(productName))
          return res
            .status(400)
            .send({ status: false, message: "Enter Valid productName Name" });
  
        let isproductName = await productModel.findOne({ productName: productName.toLowerCase() });
  
        if (isproductName)
          return res
            .status(400)
            .send({ status: false, message: `${isproductName} is already exists` });
  
        let productName1 = productName
          .split(" ")
          .filter((e) => e)
          .join(" ");

        data.productName = productName1.toLowerCase();
      }
  
      
      if ("qtyPerUnit" in body) {
        if (!isValid(qtyPerUnit))
          return res
            .status(400)
            .send({ status: false, message: "qtyPerUnit should not be empty" });

        if (isNaN(parseInt(qtyPerUnit)))
          return res
            .status(400)
            .send({ status: false, message: "qtyPerUnit Should Be A Number" });

        data.qtyPerUnit = qtyPerUnit;
      }
  

      if ("unitPrice" in body) {
        if (!isValid(unitPrice))
          return res
            .status(400)
            .send({ status: false, message: "unitPrice should not be empty" });

        if (isNaN(parseInt(unitPrice)))
          return res
            .status(400)
            .send({ status: false, message: "unitPrice Should Be A Number" });

        data.unitPrice = unitPrice;
      }


      if ("unitInStock" in body) {
        if (!isValid(unitInStock))
          return res
            .status(400)
            .send({ status: false, message: "unitInStock should not be empty" });
            
        if (isNaN(parseInt(unitInStock)))
          return res
            .status(400)
            .send({ status: false, message: "unitInStock Should Be A Number" });

        data.unitInStock = unitInStock;
      }


      if ("discontinued" in body) {
        if (!isValid(discontinued))
          return res
            .status(400)
            .send({ status: false, message: "discontinued should not be empty" });

        data.discontinued = discontinued;
      }

  
      data.save();
      res.status(200).send({
        status: true,
        message: "Product details updated successfully",
        data: data,
      });
    } catch (err) {
      return res.status(500).send({ status: false, message: err.message });
    }
  };
  




/* ++++++++++++++++++++++++++++++++++++++++++++++++++++ Delete Products by Product ID ++++++++++++++++++++++++++++++++++++++++++++++++++ */



const deleteProductbyId = async function (req, res) {
    try {
      let Pid = req.params.productId;
  
      if (!isValidObjectId(Pid)) {
        return res.status(400).send({
          status: false,
          message: "Invalid ProductId! Please Provide Valid ProductId",
        });
      }
  
      const findProductDb = await productModel.findOneAndUpdate(
        {
          _id: Pid,
          isDeleted: false,
        },
        { isDeleted: true, deletedAt: new Date() },
        { new: true }
      );
  
      if (!findProductDb) {
        return res
          .status(404)
          .send({ status: false, message: "Product Not Found Or Already Deleted" });
      }
  
      return res.status(200).send({
        status: true,
        message: "Deleted Successfully",
      });
    } catch (err) {
      return res.status(500).send({ status: false, message: err.message });
    }
  };


module.exports = { createProduct, getProductbyId, getProduct, updateProductbyId, deleteProductbyId };

