import Task from "../controllers/tasks";

export = (app) => {

    const endpoint = process.env.API_BASE + "tasks";

    app.put(endpoint + "/:id", Task.update);
};
