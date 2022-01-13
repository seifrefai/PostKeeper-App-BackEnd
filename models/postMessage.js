import mongoose from 'mongoose'
//This is to create our schema structure
const postSchema= mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }, 
})

//this is to create our model that is responsible for creating our documents and allowing us to find and update and delete documents
const PostMessage= mongoose.model('PostMessage',postSchema)

export default PostMessage;