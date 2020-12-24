import jwt from "jsonwebtoken";

export const generateToken =(admin) => {
    return jwt.sign(
        {
            _id: admin._id,
            name: admin.name,
           email: admin.email,
           isAdmin: admin.isAdmin,
        },
        process.env.JWT_SECRET || 'somthingsecret',              
        {
            expiresIn: '30d'
        }
    )
};

export const isAdmin = (req, res, next) => {
    if (req.admin && req.admin.isAdmin) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Admin Token' });
    }
  };