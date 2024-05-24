const axios = require('axios')
const feed = process.env.FEED_URL

async function getStoreData() {
    try {
        const res = await axios.get(feed)
        return res.data
    } catch (err) {
        console.error('Error fetching feed: ', err)
        process.exit(1)
    }
}

function getStoreCountByState(data) {
    const storeCount = {}

    Object.keys(data).forEach(key => {
      const store = data[key]
      const state = store.state
      if (state) {
        if (!storeCount[state]) {
            storeCount[state] = 0
        }
        storeCount[state]++
      }
    })
  
    return storeCount
  }

  function generateHTML(data) {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Brighton Tech Challenge | Stores Output</title>
      <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .store-item {
            text-align: center;
        }

        .store-item img {
            max-width: 100%;
            height: auto;
        }

        @media (min-width: 768px) {
            .grid-container {
                grid-template-columns: repeat(6, 1fr);
            }
        }

        @media (max-width: 767px) {
            .grid-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
      </style>
    </head>
    <body>
      <div class="grid-container">`
    
        Object.keys(data).forEach((key, index) => {
            const store = data[key]

            html += `
                <div class="store-item">
                    <img src="${store.mainImageUrl}" alt="${store.name}-${store.name2}">
                    <h3>${store.name}, ${store.name2}</h3>
                </div>
            `
            })
  
    html += `
      </div>
    </body>
    </html>`
  
    return html
  }

  module.exports = {
    getStoreData,
    getStoreCountByState,
    generateHTML
  }