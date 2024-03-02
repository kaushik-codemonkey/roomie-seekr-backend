import { DataTypes, Model } from "sequelize";
import { compareSync } from "../util/encrypt";
import sequelizeConnection from "../db/connection";
import Request from "./Request";

class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public first_name!: string;
  public last_name: string;
  public mobile!: string;
  public deleted!: boolean;
  public city!: string;

  // timestamps!
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  static validPassword: (password: string, hash: string) => boolean;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    mobile: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: "",
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: sequelizeConnection,
    tableName: "user",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

User.validPassword = (password: string, hash: string) => {
  return compareSync(password, hash);
};

User.hasMany(Request, {
  foreignKey: 'creator_id',
  onDelete: "RESTRICT",
  onUpdate: "CASCADE"
})

Request.belongsTo(User)

export default User;
