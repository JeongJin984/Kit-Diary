module.exports = (sequelize, DataTypes) => {
    const product =  sequelize.define(
      "product", // 테이블 이름
      {
        // 스키마 정의
        name: {
          // column 이름
          type: DataTypes.STRING(50), // 데이터 타입 설정
          allowNull: false // null 허용 설정
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        // 테이블 옵션
        timestamps: true,
      }
    );
    return product;
  };

  