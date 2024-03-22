import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';

export interface VendorApplicationAttributes {
    id?: number;
    name: string;
    companyName?: string;
    phoneNumber: string;
    email: string;
    boothSize: string;
    boothType: string;
    approved: boolean;
    paid: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }

class VendorApplication extends Model<VendorApplicationAttributes> implements VendorApplicationAttributes {
  public id!: number;
  public name!: string;
  public companyName?: string;
  public phoneNumber!: string;
  public email!: string;
  public boothSize!: string;
  public boothType!: string;
  public approved!: boolean;
  public paid!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

VendorApplication.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boothSize: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boothType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'VendorApplication',
  }
);

export default VendorApplication;