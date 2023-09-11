import db from "../db";
export default async function (req, res) {
    if (req.method !== "POST") {
        res.status(500).json({ message: "Internal Server Error,  method is not defined.", status: 400 });
        return
    }
    try {

        const {
            first_name,
            last_name,
            email,
            phone,
            password
        } = req.body;
        const connection = await db.getConnection();
        await db.execute(
            'INSERT INTO users (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)',
            [first_name, last_name, email, phone, password]
        );
        connection.release();
        res.status(200).json({ status: 200, message: "Registered successfully!" });
    } catch (error) {
        console.log(error, " error");
        res.status(400).json({ message: "Internal Server Error", status: 400 });
    }
}
