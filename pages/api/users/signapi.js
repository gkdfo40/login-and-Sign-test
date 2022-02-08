import dbConnect from "../../../lib/dbConnect"
import User from "../../../schema/User"

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const data = await User.find({ username: req.body.username })
        if (!!data) {
          await User.create(req.body);
          res.status(201).end()
        }
        else res.status(400).end()
      } catch (error) {
        res.status(400).end()
      }
      break
    case 'GET':
      try {

      } catch (error) {

      }
  }
}
