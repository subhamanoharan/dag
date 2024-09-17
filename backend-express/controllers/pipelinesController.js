import PipelinesParser from '../services/PipelinesParser'

const parse = (req, res, next) => {
  const {nodes, edges} = req.body
  res.json(PipelinesParser.parse(nodes, edges))
}

export default { parse }
