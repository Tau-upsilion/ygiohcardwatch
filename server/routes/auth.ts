import Auth from "../controllers/auth"

export = (app) => {
    app.post(process.env.API_BASE + "login", Auth.login);
};