'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await queryInterface.createTable('classificacao', { 

    id: { 
      type:Sequelize.DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false 
    },
    like:{
      type:Sequelize.DataTypes.BOOLEAN,
      allowNull:false
    },
    questao_id:{
      type:Sequelize.DataTypes.BIGINT,
      references:{
        model:{
          tableName:'questao'
        },
        key:'id'
      }
    },
    created_at:{
      type:Sequelize.DataTypes.DATE,
      allowNull:false
    },
    updated_at:{
      type:Sequelize.DataTypes.DATE,
      allowNull:false
    }
    
  });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('classificacao');
 
  }
};