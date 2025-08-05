import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1]; // remove 'Bearer'

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded payload from the token
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;


// Protect any backend route
// For example, if you have a route

// app.get('/api/protected', authMiddleware, (req, res) => {
//   res.json({ message: 'This is a protected route', userId: req.user.userId });
// });
// Only logged-in users with a valid JWT token can access it.