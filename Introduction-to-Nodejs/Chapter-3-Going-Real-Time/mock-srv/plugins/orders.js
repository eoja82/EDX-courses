const { PassThrough } = require('stream')

const orderStream = new PassThrough({objectMode: true})

async function * realtimeOrders () {
  for await (const {id, total} of orderStream) {
    yield JSON.stringify({ id, total })
  }
}