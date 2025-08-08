import { mongoose } from "mongoose";

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
    }
})

export const expense = mongoose.model("expense", expenseSchema)