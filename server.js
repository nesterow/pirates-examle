import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})


app.listen(8080, () => {
    console.log('√ the app is running on http://localhost:8080')
})

export default app