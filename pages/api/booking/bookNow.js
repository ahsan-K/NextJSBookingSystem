import db from "../db";
export default async function (req, res) {
    if (req.method !== "POST") {
        res.status(500).json({ message: "Internal Server Error,  method is not defined.", status: 400 });
        return
    }
    console.log(req.body, ' req.body')

    try {

        const {
            booking_name,
            user_name,
            contact,
            time,
            date,
            comment
        } = req.body;
        const connection = await db.getConnection();
        const query = 'SELECT * FROM bookings WHERE time = ? AND date = ?';
        const [rows] = await db.query(query, [time, date]);
        
        if (rows.length) {
            res.status(400).json({ status: 400, message: "This time slot is not available!" });
            connection.release();

            return
        }

        await db.execute(
            'INSERT INTO bookings (booking_name, user_name, contact, time, date, comment) VALUES (?, ?, ?, ?, ?, ?)',
            [booking_name, user_name, contact, time, date, comment]
        );
        res.status(200).json({ status: 200, message: "Booking successfully!" });
        connection.release();

    } catch (error) {
        console.log(error, " error");
        res.status(400).json({ message: "Internal Server Error", status: 400 });
    }
}


async function checkIsThereAnyBooking(db, time, date){
    const query = 'SELECT * FROM bookings WHERE time = ? AND data = ?';
    const [rows] = await db.query(query, [time, date]);

    console.log(rows, ' ssss')
}