import dotenv from  'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import Routes from './routes/index.js';
import keys from './config/keys.js';
import mongoose from 'mongoose';
import passport from 'passport';
import passportJwt from './api/version1/utils/passport-jwt.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize());
passportJwt(passport);
app.use("/api/version1", Routes);


(async function startApp() {

  try {
    await mongoose.connect(keys.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("Connected to mongoDB.")
    });
    
    app.listen(PORT, () => {
      console.log(`Server Started On Port  ${PORT} ...`)
    })
  } catch (err) {
    throw new Error(err);
  }
})();