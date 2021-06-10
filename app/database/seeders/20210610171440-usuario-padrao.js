'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('usuario', [{
      nome: 'Administrador',
      email:'adm@adm.com',
      senha:'$2b$10$6gPQxkCFsZt0M/JUd8o76eitvFG9A4vBChMEd7rsaIXlQ9dGSiRxC',
      created_at:new Date(),
      updated_at:new Date()
     }], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
