// ==== CRUD OPERATION USING CORE MODULE ====

const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'fs-crud')
const fileName = `${dirPath}/data.txt`


// ==== CREATING FILE ====
fs.writeFileSync(fileName, 'Welcome to coding world')


// ==== READING FILE ====
fs.readFile(fileName, 'utf8', (err, data) => {
    if (!err) console.log(data);
})


// ==== UPDATING FILE CONTENT ====
fs.appendFile(fileName, ' adding text in to the data.txt in fs-curd folder', (err) => {
    if (!err) console.log("file has been updated");
})


// ==== RENAMING FILE NAME ====
fs.rename(fileName, `${dirPath}/node.txt`, (err) => {
    if (!err) {
        console.log("file has been renamed");
    }
})


// ==== DELETING FILE ====
fs.unlink(`${dirPath}/node.txt`, (err) => {
    if (!err) {
        console.log('Node file is deleted from fs-crud folder');
    }
})


// ==== ASYNCRONOUS OPERATION ====
let a = 10
let b = 20

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 1000)
})
    .then((data) => {
        console.log(a + data);
    }).catch((err) => {
        console.log(err);
    })


// ==== CREATING API USING EXPRESS ====
const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    resp.send(`<h1>Welcome to coding world</h1>`)
})
app.get('/about', (req, resp) => {
    resp.send('Welcome to the coding world')
})
app.get('/help', (req, resp) => {
    resp.send('This is the helping page')
})
app.listen(5000, () => console.log('server running'))


// ==== SENDING REQUEST FROM THE URL AND SHOWING DATA ON THE UI ====
const express = require('express')
const app = express()

app.get('/', (req, resp) => {
    console.log('getting data from the ui ----->>>', req.query.name);
    resp.send(`welcme to coding world ${req.query.name}`)
})
app.listen(3000, () => console.log('server running'))


// ==== RENDER HTML AND JSON DATA ====
const express = require('express')
const app = express()

app.get(`/`, (req, resp) => {
    resp.send(`<h1>Welcome to coding world ${req.query.nam}</h1> <h2> <a href='/about'>Go to about page</a> </h2>`)
})
app.get('/about', (req, resp) => {
    resp.send(`
    <input type='text' value='${req.query.name}' /> <button>click me </button>
    `)
})
app.get('/help', (req, resp) => {
    resp.send([
        { name: 'fake', email: 'fake@gmail.com' },
        { name: 'fake', email: 'fake@gmail.com' },
    ])
})
app.listen(3000, () => {
    console.log('server running');
})


// ==== STACTIC HTML PAGE LOAD ====
const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'public')

app.use(express.static(publicPath))
app.listen(3000)


// ==== REMOVE EXTENSION IN URI AND ADD 404 PAGE ====
const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'public')

app.get('/', (req, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about', (req, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('*', (req, resp) => {
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(3000)


// ==== USING EJS MODULE ====
const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs')

app.get('/', (req, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})

app.get('/profile', (req, resp) => {
    const user = {
        userName: 'fake',
        userEmail: 'fake@gmail.com',
        userCity: 'fakeCity'
    }
    resp.render('profile', { user })
})

app.listen(3000)


// ==== MIDDLEWARE ====
const express = require('express');
const app = express();


// Middleware function
const middleware = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age.");
    } else if (req.query.age < 18) {
        resp.send("You are not eligible to see the website content.");
    } else {
        next();
    }
};

app.get('/', (req, resp) => {
    resp.send('Welcome to the homepage!');
});

app.get('/about', middleware, (req, resp) => {
    resp.send('Welcome to the about page!');
});

// Create a router
const router = express.Router();

router.use(middleware);

router.get('/help', (req, resp) => {
    resp.send("Hello, welcome to the coding world!");
});

app.use('/', router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
