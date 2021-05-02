const mongoose = require('mongoose');
const connect = async () => {

    try {
        const connectDone = await mongoose.connect("mongodb://localhost:27017/Book_api", {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log("connection done....")
    }
    catch (e) {
        console.log("Something Wrong...");
    }

}
connect();