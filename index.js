import express from "express";
import { Passport } from "passport";
import GoogleStrategy from "passport-google-oauth20";

const app = express();

console.log("dsadsaxxx");
console.log("dsadsaxxxsss");

Passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 6000;
app.listen(PORT);
