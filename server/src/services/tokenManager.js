const jwt = require("jsonwebtoken");

exports.createToken = async(user) => {
    const token = await jwt.sign({ id: user.id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "24h",
        }
    );
    return token;
};

exports.verifyToken = async(token) => {
    const payload = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return payload;
}

exports.decodeToken = async(token) => {
    const payload = await jwt.decode(token);
    return payload;
}

