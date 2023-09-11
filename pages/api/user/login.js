import db from "../db";
export default async function (req, res) {
    if (req.method !== "POST") {
        res.status(500).json({ message: "Internal Server Error,  method is not defined.", status: 400 });
        return
    }
    try {
        const {
            email,
            password
        } = req.body;
        const connection = await db.getConnection();
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows] = await db.query(query, [email]);
        if (rows.length === 0) {
            res.status(400).json({ status: 400, message: "User not found!" });
            return
        }
        const user = rows[0];
        if (user.password !== password) {
            res.status(404).json({ status: 404, message: "invalid username or password" });
            return
        }

        res.status(200).json({ status: 200, data: user });
        connection.release();
        
    } catch (error) {
        console.log(error, " error");
        res.status(400).json({ message: "Internal Server Error", status: 400 });
    }
}
