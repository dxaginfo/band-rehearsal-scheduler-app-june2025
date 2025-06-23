import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

/**
 * @swagger
 * components:
 *   schemas:
 *     Band:
 *       type: object
 *       required:
 *         - name
 *         - createdBy
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the band
 *         name:
 *           type: string
 *           description: Name of the band
 *         description:
 *           type: string
 *           description: Description of the band
 *         logoUrl:
 *           type: string
 *           format: uri
 *           description: URL to band's logo image
 *         createdBy:
 *           type: string
 *           format: uuid
 *           description: ID of the user who created the band
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the band was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the band was last updated
 */
class Band extends Model {}

Band.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Band name cannot be empty',
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    logoUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: true,
  }
);

export default Band;