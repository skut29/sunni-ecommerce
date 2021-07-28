const firebase = require('firebase')
const puppeteer = require("puppeteer");


const firebaseConfig = {
    apiKey: "AIzaSyCZFfFde_6LyJVNNTACaB96egrvXFcRcmo",
    authDomain: "sunni-ecommerce.firebaseapp.com",
    databaseURL: "https://sunni-ecommerce-default-rtdb.firebaseio.com",
    projectId: "sunni-ecommerce",
    storageBucket: "sunni-ecommerce.appspot.com",
    messagingSenderId: "743617258354",
    appId: "1:743617258354:web:aee953fca2c0b03a20b3eb",
    measurementId: "G-PQ7LDD3KJW"
  };

firebase.initializeApp(firebaseConfig)
const database = firebase.database();
const db = firebase.database().ref();
const mensProducts = db.child("/mensProducts");

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://www.eyebuydirect.com/sunglasses/men")

  const img = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".event-list .lazyloaded")).map(
      imgs => imgs.src
    )
  )
  const name = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".name")).map(
        names => names.textContent
      )
  )
  const price = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".item-price")).map(
        prices => prices.textContent
      )
  )

  const addToFirebase = (img, name, price) => {
      let i = 0;
      let id = 0;
    while(i < img.length) {
        id++
        async function addData()  {
            try {
                await mensProducts.set({
                    "img": img,
                    "name": name,
                    "price": price,
                    "id": id
                })
                console.log("data added")
            }
            catch(error) {
                console.log(error)
            }
        }
    }
  }
//   console.log(img)
//   console.log(name)
//   console.log(price)
  await browser.close()
})()