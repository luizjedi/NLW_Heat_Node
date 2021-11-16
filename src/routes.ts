import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserCotroller";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast5MessagesController } from "./controllers/GetLast5MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last5", new GetLast5MessagesController().handle);

router.get("/user_profile", ensureAuthenticated, new ProfileUserController().handle);

export { router }