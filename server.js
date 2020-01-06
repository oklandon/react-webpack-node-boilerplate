const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.use('/static', express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('./index.ejs')
})

app.listen(port, () => console.log('listening on port ' + port))





