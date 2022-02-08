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
                    res.status(400).json({ success: false })
                }
                else res.status(201).json({ success: true, data: user })
            } catch (error) {
                console.log("dddd", error.message)
                res.status(400).json({ success: false })
            }
            break
    }
}
