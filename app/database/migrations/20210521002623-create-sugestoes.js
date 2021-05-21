'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await queryInterface.createTable('sugestoes', { 

    id: { 
      type:Sequelize.DataTypes.BIGINT,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false 
    },
    descricao:{
      type:Sequelize.DataTypes.STRING,
      allowNull:false
    },
    nps_id:{
      type:Sequelize.DataTypes.BIGINT,
      references:{
        model:{
          tableName:'nps'
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
   
     await queryInterface.dropTable('sugestoes');
 
  }
};