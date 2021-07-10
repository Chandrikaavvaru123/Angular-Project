const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/";

// const customerSchema = Schema({
//     customerId: String,
//     customerName: String,
//     walletAmount: Number,
//     customerType: { type: String, enum: ['Platinum', 'Gold', 'Silver'] }
// }, { collection: "Customer" });

const productSchema = Schema({
    name: String,
    saltCompostion: String,
    about: String,
    use: { type: [] },
    sideEffects:{ type: [] }
}, { collection: "Products" });

const quaterSchema = Schema({
    sales:Number,
    otherIncome:Number,
    grossProfit:Number,
    Depreciation:Number,
    Interest:Number,
    Tax:Number,
    netProfit:Number,
})

const quaterInfoSchema = Schema({
    quater: String,
    result: { type: [quaterSchema], default: []  },
}, { collection: "quaterInfo" });


// const prooductSchema = Schema({
//     productId: String,
//     productName: String,
//     walletAmount: Number,
//     productType: { type: String, enum: ['Platinum', 'Gold', 'Silver'] }
// }, { collection: "Customer" });

// const flightBookingSchema = Schema({
//     customerId: String,
//     bookingId: { type: Number, unique: true },
//     noOfTickets: { type: Number, min: [1, "minimum number of tickets should be 1"], max: [5, "maximum 5 tickets can be booked by a customer"] },
//     bookingCost: { type: Number, min: [0, "Booking cost can't be negative"] }
// })

// const flightSchema = Schema({
//     flightId: String,
//     AircraftName: String,
//     fare: Number,
//     availableSeats: Number,
//     status: { type: String, enum: ['Running', 'Cancelled'] },
//     bookings: { type: [flightBookingSchema], default: [] }
// }, { collection: "Flight" })

let collection = {};

collection.getProdutCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Products', productSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getQuaterCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('quaterInfo', quaterInfoSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

module.exports = collection;