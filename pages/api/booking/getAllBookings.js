import db from '../db';
export default async function (req, res) {
    const connection = await db.getConnection();
    const [rows, fields] = await connection.query('SELECT * FROM bookings');
    connection.release();
    res.status(200).json(rows);
}