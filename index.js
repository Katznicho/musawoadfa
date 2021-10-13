const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

var admin = require('firebase-admin');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get(`/:token`, async (req, res) => {
  await admin.messaging().sendToDevice(
    ['c2PcTyuLRrazTN0BJbsv-9:APA91bFca_WSEOrAeUN8ruxNZ2HgU0SCYwyLtqIvFpRiYuP5vO2yJRVMiT_yaGzV6xrgzykc68u00gcIa6NNH3rMjlYiF9K6aMXv7LjnAE9vn10ZJclBqf8ziIi2JlD4gPNidCG4vvYX'],
    {
      notification: {
        title: "Checking",
        body: "whatsuo bro",
      },
      data: {
        owner: 'Hellow',

      },
    },
    {
      // Required for background/quit data-only messages on iOS
      contentAvailable: true,
      // Required for background/quit data-only messages on Android
      priority: 'high',
    },
  );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})