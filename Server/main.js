const express = require('express');
const productRouter = require('./routers/productRouter');
const customerRouter = require('./routers/customerRouter');

const cors = require('cors')



const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended : false}));


require('./configs/database');


app.use('/api/products',productRouter);
app.use('/api/customers',customerRouter);


app.listen(8000);