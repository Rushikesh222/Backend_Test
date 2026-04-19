const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./src/routes/auth.routes');


app.use(express.json());

const allowedOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({
	origin: allowedOrigin,
	credentials: true,
	methods: ['GET','POST','PUT','DELETE','OPTIONS'],
	allowedHeaders: ['Content-Type','Authorization']
}));
    


app.use('/api/auth', authRoutes);


module.exports = app;