import mongoose, { Schema, Document } from "mongoose";
import { Content } from "next/font/google";


export interface Message extends Document {
    content: string,
    createdAt: Date
}

const messageSchema : Schema<Message> = new Schema({

})