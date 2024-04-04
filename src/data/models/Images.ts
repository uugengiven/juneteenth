import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';

class Image extends Model {
  public id!: number;
  public filename!: string;
  public collection!: string;
  public description!: string;
  public visible!: boolean;
}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collection: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Image',
    tableName: 'images',
  }
);

export default Image;