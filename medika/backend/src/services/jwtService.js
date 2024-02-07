import jwt from "jsonwebtoken";

export function userExists(req, res, next) {
    // Récupération du token dans le cookie
    let autorizationHeader = req.headers.authorization;

    const token = autorizationHeader.split(' ')[1]; // 'bearer JWT'
    // Si le cookie (jwt) n'existe pas
    if (token == null) req.user = null;
    jwt.verify(token, process.env.JWT_SECRET, (err, dataJwt) => { 
        // Erreur du JWT (n'est pas un JWT, a été modifié, est expiré)
        if(err) req.user = null;
        else {
            req.user_email = dataJwt.email;
            req.firstname = dataJwt.firstname;
            req.lastname = dataJwt.lastname;
        }
    });

    next();
}