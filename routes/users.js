import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "johndoe@example.com",
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    email: "alicesmith@example.com",
  },
  {
    first_name: "David",
    last_name: "Johnson",
    email: "davidjohnson@example.com",
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    email: "emilybrown@example.com",
  },
  {
    first_name: "Michael",
    last_name: "Lee",
    email: "michaellee@example.com",
  },
  {
    first_name: "Sarah",
    last_name: "Taylor",
    email: "sarahtaylor@example.com",
  },
  {
    first_name: "Daniel",
    last_name: "Wilson",
    email: "danielwilson@example.com",
  },
  {
    first_name: "Olivia",
    last_name: "Davis",
    email: "oliviadavis@example.com",
  },
  {
    first_name: "James",
    last_name: "Miller",
    email: "jamesmiller@example.com",
  },
  {
    first_name: "Sophia",
    last_name: "Moore",
    email: "sophiamoore@example.com",
  },
];

// Getting the list of users from the mock database
router.get("/", (req, res) => {
  res.send(users);
});

// Adding users to our mock database

router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user.first_name} has been added to the Database`);
});

// get a particular user
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

// delete the user from the database
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`${id} deleted successfully from database`);
});

// Make a PATCH request to the database
router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { first_name, last_name, email } = req.body;

  const user = users.find((user) => user.id === id);

  if (first_name) user.first_name = first_name;
  if (last_name) user.last_name = last_name;
  if (email) user.email = email;

  res.send(`User with the ${id} has been updated`);
});
export default router;
