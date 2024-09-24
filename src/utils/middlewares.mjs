import { mockUsers } from "../utils/constants.mjs";

export const resolveIndexByUserId = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    res.status(400).send("Invalid id");
    return;
  }
  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (findUserIndex === -1) {
    res.status(404).send("User not found");
    return;
  }
  req.findUserIndex = findUserIndex;
  next();
};

export const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.sendStatus(401);
};
