import jwt from 'jsonwebtoken';

export const generateToken = (userID, res, port) => {
    
    const token = jwt.sign({userID}, process.env.SECRET_KEY_JWT, {
        expiresIn : '7d'
    })

    const cookieName = `token_${port}`;
    res.cookie(cookieName, token, {
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
        secure : process.env.NODE_ENV !== "development",
        sameSite : "strict"
    })

    return token;
}
