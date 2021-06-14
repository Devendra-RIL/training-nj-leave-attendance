const Data = {
    absent_count: 9,

    absents_details: [
        "2021-06-01",
        "2021-06-02",
        "2021-06-03",
        "2021-06-04"
    ],

    leaveBalance: [
        {
            leave: "Contingency Leave",
            days_remain: 6,
            validity: "2021-12-31"
        },

        {
            leave: "Optional Holiday",
            days_remain: 3,
            validity: "2021-12-31"
        },

        {
            leave: "Special Privilege Leave",
            days_remain: 10,
            validity: "2021-12-31"
        }
    ],

    holidays: [
        {
            date: "15th August",
            day: "Sunday",
            description: "Independence Day",
        },
        {
            date: "10th Septempber",
            day: "Friday",
            description: "Ganesh Chaturthi",
        },
        {
            date: "2nd October",
            day: "Saturday",
            description: "Gandhi Jayanti",
        }
    ]
}

module.exports = Data