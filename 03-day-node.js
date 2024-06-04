
// ==== CONNECTING NODE WITH MONGOOSE ====
const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/e-comm')
    const productSchema = new mongoose.Schema({
        name: String,
    })
    const productModel = mongoose.model('products', productSchema)
    let data = new productModel({ name: 'm8' })
    const result = await data.save()
    console.log(result);
}
main()

// ==== CRUD OPERATION ====
const mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/e-comm')
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})

const createInDB = async () => {
    const productModel = mongoose.model('products', productSchema)
    const data = new productModel({ name: 'vivo', price: 250, brand: 'Vivo', category: 'mobile' })
    const result = await data.save();
    console.log(result)
}
createInDB()

// ==== READ DATA FROM MONGODB ====
const readInDB = async () => {
    const productModel = mongoose.model('products', productSchema)
    const data = await productModel.find();
    console.log(data);
}
readInDB()

==== UPDATE DATA IN MONGODB ====
const updateInDB = async () => {
    const productModel = mongoose.model('products', productSchema)
    const data = await productModel.updateOne({ name: 'vivo' }, { $set: { category: 'mobiles' } })
    console.log(data);
}
updateInDB()

// ==== DELETE DATA IN MONGODB ====
const deleteInDB = async () => {
    const productModel = mongoose.model('products', productSchema)
    const data = await productModel.deleteOne({ name: 'm8' })
    console.log(data);
}
deleteInDB()

// ==== SENDING DATA TO MONGODB USING POSTMAN API====
const mongoose = require('mongoose')
const express = require('express')

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/e-comm')
const productSchema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
})
const productModel = mongoose.model('products', productSchema)

app.use(express.json())

app.post('/create', async (req, resp) => {
    const data = new productModel(req.body);
    const result = await data.save();
    console.log(result);
    resp.send(result)
})
app.listen(3000)

// ==== GET, PUT AND DELETE ====
const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://0.0.0.0:27017/e-comm')
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})
const productModel = mongoose.model('products', productSchema)
// GET METHOD
app.get('/list', async (req, resp) => {
    const data = await productModel.find();
    console.log(data);
    resp.send(data)
})
app.listen(3000)

// DELETE METHOD
app.delete('/delete/:_id', async (req, resp) => {
    const data = await productModel.deleteOne(req.params);
    console.log(" Item deleted", req.params);
    resp.send(data)
})
app.listen(3000)

//PUT METHOD
app.use(express.json())
app.put('/update/:_id', async (req, resp) => {
    const data = await productModel.updateOne(req.params, { $set: req.body })
    resp.send(data)
})3
app.listen(3000)

// ==== SEARCH API IN NODE WITH MONGODB ====
const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://0.0.0.0:27017/e-comm')
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
})
const productModel = mongoose.model('products', productSchema)

app.get('/search/:key', async (req, resp) => {
    const data = await productModel.find(
        {
            '$or': [
                { "name": { $regex: req.params.key } }
            ]
        }
    )
    resp.send(data)
})
app.listen(3000)

// ==== FILE UPLOAD USING MULTTER MODULE ====
const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            // //uploads is a folder name
            callback(null, 'uploads')
        },
        filename: function (req, file, callback) {
            callback(null, file.filename + '-' + Date.now() + '.jpg')
        }
    })
}).single('user_file')
app.post('/fileupload', upload, (req, resp) => {
    resp.send('file uploaded')
})
app.listen(3000);


// ==== OS MODULE ====
const os = require('os')
console.log(os.arch());
console.log(os.platform());
console.log(os.freemem() / (1024 * 1024 * 1024));
console.log(os.hostname());
console.log(os.totalmem() / (1024 * 1024 * 1024));
console.log(os.uptime());

// ==== EventEmitter ====

let EventEmitter = require("node:events")

let event = new EventEmitter()

event.on("EvenOrOdd", (value) => {
    if (value % 2 == 0) {
        console.log("Even")
    }
})

event.on("EvenOrOdd", (value) => {
    if (value % 2 !== 0) {
        console.log("Even")
    }
})

event.emit("EvenOrOdd", 24)
event.emit("EvenOrOdd", 23)


// ==== EVENT USING API ====
const express = require('express')
const EventEmitter = require('events')
const app = express()

let event = new EventEmitter()

let count = 0;

event.on('counterAPI', () => {
    count++
    console.log("Counter ==>> " + count);
})

app.get('/', (req, resp) => {
    resp.send('event called')
    event.emit("counterAPI")
})
app.listen(3000)



