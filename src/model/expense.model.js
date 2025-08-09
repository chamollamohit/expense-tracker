import { mongoose, Schema } from "mongoose";

const expenseSchema = new mongoose.Schema({
    description : {
        type: String,
        required: true,
        trim: true
    },
    amount : {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

export const expense = mongoose.model("expense", expenseSchema)