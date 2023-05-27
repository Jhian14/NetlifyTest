module.exports = (mongoose) => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.ATLAS_URI,
        { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection

    db.on("error", ((error) => console.log(error)))
    db.once("open", (() => console.log("Connected to Database")))
}