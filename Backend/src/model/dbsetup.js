const collection = require('../utilities/connection');

const customerDb = [
    {
        customerId: "P1001",
        customerName: "Tom",
        walletAmount: 0,
        customerType: "Platinum"
    },
    {
        customerId: "G1001",
        customerName: "John",
        walletAmount: 2000,
        customerType: "Gold"
    },
    {
        customerId: "S1001",
        customerName: "Steve",
        walletAmount: 4500,
        customerType: "Silver"
    }
]

const productsDb = [
    {
        name: "Tormove",
        saltCompostion: "paracetamol (500mg)",
        about :"Tormove Tablet is a medicine used to relieve pain and to reduce fever. It is used to treat many conditions such as headache, body ache, toothache and common cold.",
        use: ["pain relief", "fever"],
        sideEffects: ["dizziness", "lightheadedness"]

      },
      {
        name: "Morphine ",
        saltCompostion: "morphine sulfate",
        about :"Morphine is an opioid agonist used for the relief of moderate to severe acute and chronic pain.",
        use: ["pain relief"],
        sideEffects: ["drowsiness", "stomach pain and cramps","nervousness"]

      },

      {

        name: "Citracxt",
        saltCompostion: "Cetirizine (10mg)",
        about:"Citracxt 10mg Tablet belongs to a group of medicines called antihistamines. It is used to treat various allergic conditions such as hay fever, conjunctivitis and some skin reactions, and reactions to bites and stings. It relieves watery eyes, runny nose, sneezing, and itching.",
        use: ["runny nose", "sneezing"],
        sideEffects: ["dizziness"]

      },

      {

        name: "Diastag",
        saltCompostion: "loperamide (2mg)",
        about:"Diastag Tablet is used in the treatment of diarrhea. It should not be used in patients with dysentery (diarrhea with blood).",
        use: ["Diarrhea"],
        sideEffects: ["Constipation", "Nausea", "Stomach cramp"]

      },

      {

        name: "Acifier",
        saltCompostion: "Magnesium Hydroxide (0.291g), Aluminium Hydroxide(10mg), Oxetacaine (98mg)",
        about:"",
        use: ["Acidity","Heartburn,","Stomach ulcers"],
        sideEffects: ["Constipation","Diarrhea","Allergic Reaction"]

      },

      {

        name: "Mensarelief",
        saltCompostion: "Dicyclomine (20mg), Paracetamol (500mg)",
        about:"Mucaine Gel Mint is a prescription medicine that is used in the treatment of acidity, stomach ulcer and heartburn. It helps in relieving the symptoms of acidity and ulcers such as stomach pain, heartburn or irritation. It also neutralizes excessive acid in the stomach.",
        use: ["Abdominal pain"],
        sideEffects: ["Sleepiness", "Weakness","Nervousness"]

      },

      {

        name: "Felimine",
        saltCompostion: "Telmisartan (40mg), Metoprolol Succinate (25mg)",
        about:"Felimine tablet is a medicine used for treating high blood pressure. By reducing the blood pressure it helps in preventing future heart attack and stroke. Early treatment with this medicine also improves chances of survival in patients of heart attack.",
        use: ["Hypertension (high blood pressure)"],
        sideEffects: ["Slow heart rate","Weakness","Headache"]

      }
]

const quaterInfoDb = [
    {

        quater: "Q32018",

        result: [
            {
            sales: 2800156,
            otherIncome: 349.7,
            grossProfit: 217993.4,
            Depreciation: 2992.8,
            Interest: 10899.67,
            Tax: 27249.2,
            netProfit: 176851.7
            }
        ]

    },

    {

        quater: "Q42018",

        result:[
             {
            sales:1903562,
            otherIncome: 289.58,
            grossProfit:177309.7,
            Depreciation:3802.8,
            Interest:8865.49,
            Tax:22163.7,
            netProfit:142477.7
        }
    ]

    },

    {

        quater: "Q12019",

        result:[
             {

            sales: 1732405,
            otherIncome: 416.23,
            grossProfit: 182456.1,
            Depreciation: 3674.8,
            Interest: 9122.8,
            Tax: 22807,
            netProfit: 146851.5
        }
    ]

    },

    {

        quater: "Q22019",

        result: [
            {

            sales: 1689401,
            otherIncome: 289.58,
            grossProfit: 177309.7,
            Depreciation: 3802.8,
            Interest: 8865.49,
            Tax: 22163.7,
            netProfit: 142477.7

        }]

    },

    {

        quater: "Q32019",

        result:[
             {

            sales: 1547681,
            otherIncome: 126.3,
            grossProfit: 100912.4,
            Depreciation: 4009.6,
            Interest: 5045.62,
            Tax: 12614.05,
            netProfit: 79245.13
        }
    ]

    },

    {

        quater: "Q42019",

        result: [{

            sales: 1809213,
            otherIncome: 320.5,
            grossProfit: 209113.1,
            Depreciation: 2988.9,
            Interest: 10455.65,
            Tax: 26139.14,
            netProfit: 169529.4

        }
    ]

    },

    {

        quater: "Q12020",

        result: [{

            sales: 2187960,
            otherIncome: 319.6,
            grossProfit: 890567.7,
            Depreciation: 1128.5,
            Interest: 44528.4,
            Tax: 111320.9,
            netProfit: 733589.9

        }
    ]

    }

]


const flightDb = [
    {
        flightId: "IND-101",
        AircraftName: "Delta Airlines",
        fare: 600,
        availableSeats: 10,
        status: "Running",
        bookings: [
            {
                customerId: "P1001",
                bookingId: 2001,
                noOfTickets: 3,
                bookingCost: 1800
            },
            {
                customerId: "S1001",
                bookingId: 2003,
                noOfTickets: 2,
                bookingCost: 1200
            }
        ]
    },
    {
        flightId: "IND-102",
        AircraftName: "JetBlue",
        fare: 750,
        availableSeats: 20,
        status: "Running",
        bookings: [
            {
                customerId: "P1001",
                bookingId: 2002,
                noOfTickets: 3,
                bookingCost: 2250
            },
            {
                customerId: "G1001",
                bookingId: 2004,
                noOfTickets: 2,
                bookingCost: 1500
            }
        ]
    },
    {
        flightId: "IND-103",
        AircraftName: "United Airlines",
        fare: 800,
        availableSeats: 10,
        status: "Cancelled",
        bookings: [
            {
                customerId: "S1001",
                bookingId: 2005,
                noOfTickets: 1,
                bookingCost: 800
            },
            {
                customerId: "G1001",
                bookingId: 2006,
                noOfTickets: 4,
                bookingCost: 3200
            }
        ]
    }
]

// exports.setupDb = () => {
//     return collection.getCustomerCollection().then((customer) => {
//         return customer.deleteMany().then(() => {
//             return customer.insertMany(customerDb).then(() => {
//                 return collection.getFlightCollection().then((booking) => {
//                     return booking.deleteMany().then(() => {
//                         return booking.insertMany(flightDb).then((data) => {
//                             if (data) return "Insertion Successful"
//                             else {
//                                 let err = new Error("Insertion failed");
//                                 err.status = 400;
//                                 throw err;
//                             }
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }

// return product.insertMany((productsDb).then(()=>{
//     return collection.getQuaterCollection().then((quater) =>{
//         return quater.deleteMany().then(() =>{
//             return quater.insertMany(quaterInfoDb).then((data)=>{
//                 if(data) return "Insertion Successful!"
//                 else{
//                     let err = new Error("Insertion Failed!");
//                     err.status = 400;
//                     throw err;
//                 }
//             })
//         })
//     })
// }) )

exports.setupDb = () =>{
    return collection.getProdutCollection().then((product) =>{
        return product.deleteMany().then(()=>{
            return product.insertMany(productsDb).then(() =>{
                return collection.getQuaterCollection().then((quater) =>{
                    return quater.deleteMany().then(() =>{
                        return quater.insertMany(quaterInfoDb).then((data)=>{
                            if(data) return "Insertion Successful!"
                            else{
                                let err = new Error("Insertion Failed!");
                                err.status = 400;
                                throw err;
                            } 
                        })
                    })
                })
            })

        })
    })
}