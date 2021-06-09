import { offers } from '../../test/mocks/offers'

// TODO maybe add express for routing if I have some extra time
export default {
  path: '/api/offers',
  handler(_req, res) {
    res.setHeader('Content-type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(offers))
  },
}
