import User from "../controllers/users";

export = (app) => {
    const endpoint = process.env.API_BASE + "users"
    app.put(endpoint + "/:id", User.update);
};