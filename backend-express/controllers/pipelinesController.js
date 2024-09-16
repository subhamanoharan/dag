import PipelinesParser from '../services/PipelinesParser'

const parse = (req, res, next) => {
  console.log(req.body)
  const {nodes, edges} = req.body
  PipelinesParser.parse({nodes, edges})
  res.json({success: true})
}

export default { parse }
