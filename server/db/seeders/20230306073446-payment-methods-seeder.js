'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('payment_methods', [
			{
				method: 'UPI',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				method: 'Credit card',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				method: 'Debit card',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				method: 'Net banking',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				method: 'Free',
				createdAt: new Date(),
				updatedAt: new Date()
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('payment_methods', null, {});
	}
};