export default {
  path: '/api/flights',
  handler(req, res) {
    const mock = [
      {
        '@LanguageCode': 'xx',
        $: 'Frankfurt/Main International',
      },
      {
        '@LanguageCode': 'de',
        $: 'Frankfurt/Main International',
      },
      {
        '@LanguageCode': 'ru',
        $: 'Frankfurt/Main International',
      },
      {
        '@LanguageCode': 'ko',
        $: 'Frankfurt/Main International',
      },
    ]
    res.setHeader('Content-type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(mock))
  },
}
