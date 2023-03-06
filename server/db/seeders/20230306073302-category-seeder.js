'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('course_categories', [
			{
				category: 'Business and management',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				category: 'Programming',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				category: 'Design and development',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				category: 'Information technology',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				category: 'Human resources',
				createdAt: new Date(),
				updatedAt: new Date()
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('course_categories', null, {});
	}
};