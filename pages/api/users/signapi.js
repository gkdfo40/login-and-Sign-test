import dbConnect from "../../../lib/dbConnect"
import User from "../../../schema/User"

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'GET':
      try {

      } catch (error) {

      }
  }
}
