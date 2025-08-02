# Password-manager
Secure credential storage app

express: For routing and middleware

mongoose: To connect and interact with MongoDB

dotenv: To store secret keys in .env

cors: To allow frontend to call the backend

bcrypt: For hashing passwords

jsonwebtoken: For secure login tokens

crypto is built-in — no need to install it.


Folder/File	Purpose
controllers/	Logic for handling routes (like register, login)
models/	Mongoose schemas for MongoDB (User, Credential)
routes/	Define Express routes (/auth, /credentials)
middleware/	JWT auth checks, error handling, etc.
.env	Store your secrets like DB URI, JWT key
index.js	Starts your server and connects everything



