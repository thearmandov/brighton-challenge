const fs = require('fs')
const express = require('express')
const path = require('path')
const app = express()
const { getStoreData, generateHTML, getStoreCountByState } = require('./helper')

const filePath = path.join(__dirname, 'index.html')

async function main() {
  try {
    const data = await getStoreData()
    const storeCountByState = getStoreCountByState(data)

    Object.keys(storeCountByState).forEach(state => {
      console.log(`${state}: ${storeCountByState[state]}`)
    })

    const html = generateHTML(data)

    fs.writeFile(filePath, html, (err) => {
      if (err) {
        console.error('Error saving HTML file:', err)
        return;
      }
      console.log('HTML file saved!')
      startServer()
    });
  } catch (err) {
    console.error('Error in main function:', err)
  }
}

function startServer() {
  app.get('/', (req, res) => {
    res.sendFile(filePath);
  });

  app.listen(3000, () => {
    console.log('App listening at http://localhost:3000');
  })
}

main()