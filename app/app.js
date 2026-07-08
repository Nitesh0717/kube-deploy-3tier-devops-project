const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sanitizer = require("sanitizer");

const Docker = require("dockerode");
const docker = new Docker({
  socketPath: "/var/run/docker.sock",
});
const shell = require("shelljs");
const si = require("systeminformation");
const connectDB = require("./config/db");
const Task = require("./models/Task");

const app = express();
const PORT = process.env.PORT || 8000;
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* ---------------- TASK APIs ---------------- */

// GET ALL TASKS

app.get("/api/tasks", async (req, res) => {

  console.log("Tasks API called");

  try {

    const tasks = await Task.find({}).lean().maxTimeMS(5000);

    console.log(tasks);

    res.json(tasks);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message
    });

  }

});


// CREATE TASK

app.post("/api/tasks", async (req, res) => {

  try {

    const title = sanitizer.escape(req.body.title);

    if (!title) {

      return res.status(400).json({
        message: "Task title required",
      });

    }

    const task = await Task.create({

      title,
      status: "Pending",
      priority: "Medium",

    });

    res.status(201).json(task);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Unable to create task",
    });

  }

});


// UPDATE TASK

app.put("/api/tasks/:id", async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    if (!task) {

      return res.status(404).json({
        message: "Task not found",
      });

    }

    task.title = sanitizer.escape(req.body.title || task.title);
    task.status = req.body.status || task.status;
    task.priority = req.body.priority || task.priority;

    await task.save();

    res.json(task);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Unable to update task",
    });

  }

});


// DELETE TASK

app.delete("/api/tasks/:id", async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    if (!task) {

      return res.status(404).json({
        message: "Task not found",
      });

    }

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Unable to delete task",
    });

  }

});

/* ---------------- HEALTH ---------------- */

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    service: "KubeDeploy API",
  });
});

/* ---------------- CLUSTER ---------------- */

app.get("/api/cluster", (req, res) => {

  try {

    const pods = shell.exec(
      "kubectl get pods --no-headers",
      { silent: true }
    ).stdout.trim().split("\n").filter(Boolean);

    const deployments = shell.exec(
      "kubectl get deployments --no-headers",
      { silent: true }
    ).stdout.trim().split("\n").filter(Boolean);

    const services = shell.exec(
      "kubectl get services --no-headers",
      { silent: true }
    ).stdout.trim().split("\n").filter(Boolean);

    const nodes = shell.exec(
      "kubectl get nodes --no-headers",
      { silent: true }
    ).stdout.trim().split("\n").filter(Boolean);

    res.json({

      pods: pods.length,

      deployments: deployments.length,

      services: services.length,

      nodes: nodes.length,

      podList: pods.map(p => {

        const data = p.split(/\s+/);

        return {

          name: data[0],

          status: data[2]

        };

      })

    });

  }

  catch(err){

    console.log(err);

    res.status(500).json({
      message:"Unable to fetch Kubernetes data"
    });

  }

});


/* ---------------- ACTIVITY ---------------- */

app.get("/api/activity", (req, res) => {
  res.json([
    {
      title: "Frontend deployed successfully",
      time: "2 min ago",
    },
    {
      title: "Docker image built",
      time: "15 min ago",
    },
    {
      title: "GitHub Actions completed",
      time: "1 hour ago",
    },
    {
      title: "Kubernetes rollout successful",
      time: "Today",
    },
  ]);
});

/* ---------------- DEPLOYMENT ---------------- */

app.get("/api/deployment", (req, res) => {
  res.json({
    version: "v1.2.3",
    status: "Success",
    deployedAt: "02 Jul 2026 12:45 PM",
    duration: "2m 18s",
  });
});

/* ---------------- DOCKER ---------------- */

app.get("/api/docker", async (req, res) => {
  try {
    const containers = await docker.listContainers({
      all: true,
    });

    const result = containers.map((container) => ({
      id: container.Id.substring(0, 12),
      container: container.Names[0].replace("/", ""),
      image: container.Image,
      status: container.State,
      state: container.Status,
    }));

    res.json(result);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Unable to fetch Docker containers",
    });
  }
});


/* ---------------- MONITORING ---------------- */

app.get("/api/monitoring", async (req, res) => {

  try {

    const cpu = await si.currentLoad();

    const memory = await si.mem();

    const disk = await si.fsSize();

    const uptime = await si.time();

    res.json({

      cpu: cpu.currentLoad.toFixed(1),

      memory: (
        (memory.used / memory.total) * 100
      ).toFixed(1),

      disk: disk[0].use.toFixed(1),

      uptime: Math.floor(
        uptime.uptime / 3600
      )

    });

  }

  catch(err){

    console.log(err);

    res.status(500).json({
      message:"Unable to fetch system metrics"
    });

  }

});




/* ---------------- START SERVER ---------------- */

app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
});
