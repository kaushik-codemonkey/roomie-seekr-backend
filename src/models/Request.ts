import { DataTypes, Model } from "sequelize";
import { compareSync } from "../util/encrypt";
import sequelizeConnection from "../db/connection";
import User from "./User";

class Request extends Model {
    public id!: number;
    public creator_id!: number;
    public location!: string;
    public address!: string;
    public city!: string;
    public state!: string;
    public area!: string;
    public description!: string;
    public budget_min: number;
    public budget_max!: number;
    public two_wheeler_parking: boolean;
    public four_wheeler_parking: boolean;
    public furnishing_status: 'none' | 'semi' | 'full';

    // timestamps!
    public readonly created_at!: Date;
    public readonly updated_at!: Date;

    // static validPassword: (password: string, hash: string) => boolean;
}

Request.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        creator_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        budget_min: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        budget_max: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        two_wheeler_parking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        four_wheeler_parking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        furnishing_status: {
            type: DataTypes.STRING,
            defaultValue: 'none' //'none' | 'semi' | 'full';
        },

    },
    {
        sequelize: sequelizeConnection,
        tableName: "request",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);


Request.belongsTo(User)

// Request.validPassword = (password: string, hash: string) => {
//     return compareSync(password, hash);
// };

export default Request;
