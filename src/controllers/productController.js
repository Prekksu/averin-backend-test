const db = require("../models");
const { Op } = require("sequelize");

const productController = {
	getAll: async (req, res) => {
		try {
			const product = await db.products.findAll();
			return res.status(200).send(product);
		} catch (error) {
			return res.status(500).send({
				message: error.message,
			});
		}
	},
	getProductById: async (req, res) => {
		const { id } = req.params;
		try {
			const productById = await db.products.findOne({ where: { id } });
			if (!productById) {
				return res.status(404).send({ message: "Product not found" });
			}
			return res.status(200).send(productById);
		} catch (error) {
			return res.status(500).send({
				message: error.message,
			});
		}
	},
	createProduct: async (req, res) => {
		const { product_name, product_desc, price } = req.body;
		try {
			const existingProduct = await db.products.findOne({
				where: { product_name },
			});

			if (existingProduct) {
				throw new Error("Product with the same name already exists");
			}

			await db.products.create({
				product_name,
				product_desc,
				price,
			});

			return res.status(200).send({ message: "Product has been created" });
		} catch (error) {
			return res.status(500).send({
				message: error.message,
			});
		}
	},
	editProduct: async (req, res) => {
		const { id } = req.params;
		const { product_name, product_desc, price } = req.body;
		try {
			const existingProduct = await db.products.findOne({
				where: {
					product_name,
					id: { [Op.not]: id },
				},
			});

			if (existingProduct) {
				throw new Error("Product with the same name already exists");
			}

			await db.products.update(
				{
					product_name,
					product_desc,
					price,
				},
				{
					where: {
						id: id,
					},
				}
			);
			return res.status(200).json({ message: "Product has been updated" });
		} catch (error) {
			return res.status(500).send({
				message: error.message,
			});
		}
	},
	deleteProduct: async (req, res) => {
		const { id } = req.params;
		try {
			const product = await db.products.findOne({ where: { id } });

			if (!product) {
				return res.status(404).send({ message: "Product not found." });
			}

			await db.products.destroy({
				where: { id: id },
			});

			return res.status(200).send({ message: "Product deleted successfully." });
		} catch (error) {
			return res.status(500).send({
				message: error.message,
			});
		}
	},
};
module.exports = productController;
