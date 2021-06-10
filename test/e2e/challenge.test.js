import { resolve } from 'path'
import { Nuxt } from 'nuxt'

// We keep a reference to Nuxt so we can close
// the server at the end of the test
let nuxt = null

describe('Challenge', () => {
  beforeAll(async () => {
    const rootDir = resolve(__dirname, '../..')
    let config = {}
    config = require(resolve(rootDir, 'nuxt.config.js'))
    config.rootDir = rootDir // project folder
    config.dev = false // production build
    nuxt = new Nuxt(config)

    await nuxt.listen(4000, 'localhost')
    await nuxt.renderAndGetWindow('http://localhost:4000/')
  }, 5000)

  test('Route / exits and render HTML', async () => {
    const context = {}

    const { html } = await nuxt.renderRoute('/', context)
    expect(html).not.toBeNull()
  })

  // TODO add some integration tests

  afterAll(() => {
    nuxt.close()
  })
})
