module.exports = (sequelize, Sequelize) => {
	const products = sequelize.define(
		"products",
		{
			product_name: Sequelize.STRING,
			product_desc: Sequelize.TEXT,
			price: Sequelize.INTEGER,
		},
		{
			paranoid: true,
		}
	);
	return products;
};
