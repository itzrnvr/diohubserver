const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030;

app.use(express.json({extended: true, limit: '1mb'}))
app.use(express.urlencoded({ extended: true }));

const user = {
    phone: "",
    password: "",
    orders:[]
}


// api endpoint
app.post('/login', (req, res) => {
    const { phone, password } = req.body
    console.log(req.body)

    user.phone = phone
    user.password = password

    // resend json data
    res.status(200).json({ phone, email })
})

// api endpoint
app.post('/order', (req, res) => {
    const { id, kurta, pajama, shirt, tshirt, pant } = req.body
    console.log(req.body)

    const order = {
        id: id,
        kurta: kurta,
        pajama: pajama,
        shirt: shirt,
        tshirt: tshirt,
        pant: pant
    }

    user.orders.push(order)

    // resend json data
    res.status(200).json(order)
})

app.get('/', (req, res)=> {
    res.send(JSON.stringify(user))
})

app.listen(PORT)