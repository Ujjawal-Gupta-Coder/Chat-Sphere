import jwt from 'jsonwebtoken';

// accept *port* as third parameter in development for test multiple users
export const generateToken = (userID, res) => {
    
    const token = jwt.sign({userID}, process.env.SECRET_KEY_JWT, {
        expiresIn : '7d'
    })

    // Only in case of Development when we have to test application for multiple users by using different port
    // const cookieName = `token_${port}`;
    // pass this *cookieName* to res.cookie();
    
    res.cookie("token", token, {
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
        secure : process.env.NODE_ENV !== "development",
        sameSite :process.env.NODE_ENV !== "development" ? "none" : "strict"
    })

    return token;
}
