module.exports = {
  apps : [{
    name   : "wanian-01",
    script : "./app.js",
    instances: 2,
        exec_mode: "cluster",
        watch: true,
        increment_var : 'PORT',
        env: {
            "PORT": 3000,
            "NODE_ENV": "development"
        }
  }]
}