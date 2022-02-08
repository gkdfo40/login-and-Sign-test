import dbConnect from "../../../lib/dbConnect"
import User from "../../../schema/User"

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'POST':
            try {
                const user = await User.findOne(req.body);
                if (!user) {
                    res.status(400).end()
                }
                else res.status(201).end()
            } catch (error) {
                console.log("dddd", error.message)
                res.status(400).end()
            }
            break
    }
}
