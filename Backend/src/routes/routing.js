const express = require('express');
const routing = express.Router();
const create = require('../model/dbsetup');
const pharmaServ = require('../service/users');
// const FlightBooking = require('../model/flightbooking');

// DO NOT REMOVE THIS IMPORT STATEMENT
// const tester = require('../parser').reportGenerator

// setup db mongoose db
routing.get('/setupDb', (req, res, next) => {
    create.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

// to view all the booking details for all flights
routing.get('/getAllProducts', (req, res, next) => {
    pharmaServ.getAllProducts().then((products) => {
        res.json(products);
    }).catch((err) => next(err))
})

//Insert and update
// routing.post('/bookFlight', (req, res, next) => {
//     const flightBooking = new FlightBooking(req.body);    
//     flightBookingServ.bookFlight(flightBooking).then((bookingId) => {
//         res.json({ "message": "Flight booking is successful with booking Id :" + bookingId });
//     }).catch((err) => next(err))
// })

// // to view all the booking details for all flights
// routing.get('/getAllBookings', (req, res, next) => {
//     flightBookingServ.getAllBookings().then((bookings) => {
//         res.json(bookings);
//     }).catch((err) => next(err))
// })

//  to view all the bookings by a customer in a particular flight
// routing.get('/customerBookings/:customerId/:flightId', (req, res, next) => {
//     let customerId = req.params.customerId;
//     let flightId = req.params.flightId;
//     flightBookingServ.customerBookingsByFlight(customerId, flightId).then((bookings) => {
//         res.json(bookings);
//     }).catch((err) => next(err))
// })

// to view all the bookings in a flight
// routing.get('/bookingsByFlight/:flightId', (req, res, next) => {
//     let flightId = req.params.flightId;
//     flightBookingServ.getbookingsByFlightId(flightId).then((bookings) => {
//         res.json(bookings);
//     }).catch((err) => next(err))
// })


// update the noofTickets for already booked flight ticket
// routing.put('/updateBooking/:bookingId', (req, res, next) => {
//     let bookingId = parseInt(req.params.bookingId);
//     let noOfTickets = parseInt(req.body.noOfTickets);
//     flightBookingServ.updateBooking(bookingId, noOfTickets).then((flight) => {        
//         res.json({ "message": "Successfully updated flight details for booking id " + flight.bookings[0].bookingId});
//     }).catch((err) => next(err))
// })

// routing.delete('/delete/:id', (req, res, next) => {
//     const id = parseInt(req.params.id)
//     flightBookingServ.deleteBooking(id).then(deletedId => {
//         res.json({ "message": "Successfully deleted Id: " + deletedId.bookings[0].bookingId })
//     }).catch((err) => next(err))
// })

// DO NOT ALTER ANYTHING IN THIS ROUTE
// routing.get('/test', (req, res, next) => {
//     console.log(" Started Evaluation")
//     tester()
//         .then((data) => {
//             console.log("--- Evaluation Completed ---")
//             res.send(data);
//         }).catch((err) => {
//             next(err)
//         })
// })

module.exports = routing;