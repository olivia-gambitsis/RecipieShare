import { Router as router } from "express";
import axios from "axios";

// define the default route that fetches all of our recipies
router.get("/", (req, res) => {
  // data the conserves our API quota for development
  const placeholderData = [
    {
      _id: "database1591127768852",
      recipie: "Hello",
      _createdOn: "2020-06-02T19:56:08.852Z",
      _lastModifiedOn: "2020-06-02T19:56:08.852Z",
    },
    {
      _id: "database1591134992139",
      recipie: "New recipie",
      _createdOn: "2020-06-02T21:56:32.139Z",
      _lastModifiedOn: "2020-06-02T21:56:32.139Z",
    },
  ];

  try {
    // add api call
    res.json({ recipies: placeholderData });
  } catch (e) {
    console.log(e);
    res.status(500).send("Error.");
  }
});

router.post("/add", (req, res) => {
  // extract recipie text from request body
  const { recipie } = req.body;

  const data = {
    recipie,
  };

  console.log(recipie);

  try {
    // add api call

    res.json({
      message: "recipie added",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send("Error.");
  }
});

router.post("/delete", (req, res) => {
  // extract the recipie id to delete from request body
  const { recipieId } = req.body;

  console.log(recipieId);

  try {
    // add api call

    res.send("recipie deleted");
  } catch (e) {
    console.log(e);
    res.status(500).send("Error.");
  }
});

export default router;
