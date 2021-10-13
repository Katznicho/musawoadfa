const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

var admin = require('firebase-admin');

var serviceAccount = require("./musawoadfa.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.get('/', (req, res) => {
  res.send('We are gud!')
})
app.get('/token', async (req, res) => {
  const message = {
    token: 'c2PcTyuLRrazTN0BJbsv-9:APA91bFca_WSEOrAeUN8ruxNZ2HgU0SCYwyLtqIvFpRiYuP5vO2yJRVMiT_yaGzV6xrgzykc68u00gcIa6NNH3rMjlYiF9K6aMXv7LjnAE9vn10ZJclBqf8ziIi2JlD4gPNidCG4vvYX',
    notification: {
      body: 'whatsup',
      title: 'this is a notification',
    },

  };
  try {

    const send = await admin
      .messaging()
      .send(message)
    if (send) {
      console.log('sent')
    }
    else {
      console.log('errors')
    }

    // await admin.messaging().sendToDevice(
    //   ['c2PcTyuLRrazTN0BJbsv-9:APA91bFca_WSEOrAeUN8ruxNZ2HgU0SCYwyLtqIvFpRiYuP5vO2yJRVMiT_yaGzV6xrgzykc68u00gcIa6NNH3rMjlYiF9K6aMXv7LjnAE9vn10ZJclBqf8ziIi2JlD4gPNidCG4vvYX'],
    //   {

    //     data: {
    //       owner: 'Hello',

    //     },
    //   },
    //   {
    //     // Required for background/quit data-only messages on iOS
    //     contentAvailable: true,
    //     // Required for background/quit data-only messages on Android
    //     priority: 'high',
    //   },
    // );

  }
  catch (error) {
    console.log(JSON.stringify(error))
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})