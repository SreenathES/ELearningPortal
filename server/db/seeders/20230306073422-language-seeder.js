'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('languages', [
			{
				language: 'English',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				language: 'Malayalam',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				language: 'Tamil',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				language: 'Hindi',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('languages', null, {});
	}
};