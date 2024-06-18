const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CENSmart CARDS',
      version: '1.0.0',
      description: 'fetch cards data below.',
    },
    servers: [
      {
        url: '/', // This sets the base URL for your API to the root
      },
    ],
  },
  apis: ['./index.js'], // Path to the files containing your API routes
};

const specs = swaggerJsdoc(options);
app.get('/cards', getAllCards); 


const { getAllCards } = require('./cards'); 

app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

// app.use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.render('index');
// });

app.get('/api', (req, res) => {
  res.json({"msg": " ROOT"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})