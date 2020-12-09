const nodemon = require("nodemon");
const suppliers = require("../models/suppliersSchema");

const createSupplier = (req, res) => {
  console.log(req.body);

  const supplier = new suppliers.suppliersModel(req.body);

  supplier.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message, message: "FAIL" });
    }
    res
      .status(201)
      .send({ status: true, message: "Fornecedor cadastrado com sucesso" });
  });
};

module.exports = { createSupplier };