module.exports = (mongoose) => {
    const userSchema = mongoose.Schema({
        _id: { type: mongoose.Schema.Types.ObjectId },
        email: { type: String },
        full_name: { type: String },
        password: { type: String }
    },
        { timestamps: true }
    )
    const schema = mongoose.model("users", userSchema)
    return schema
}