'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'users',
      'avatar_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id'},
        onUpdate: '',
        onDelete: '',
        allowNull: true,
      }
    );
     
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'avatar_id');
  }
};
