// module.exports = {
//   apps: [
//     {
   
//       script: "npm",
//       args: "start"
//     }
//   ]
// };



module.exports = {
  apps: [
    {
      name: "aws-node-deploy",
      script: "npm",
      env: {
        PORT: 3000,
        NODE_ENV: "production"
      }
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-18-221-52-202.us-east-2.compute.amazonaws.com",
      // key: "~/.ssh/node-app.pem",
      key: "~/documents/vgg-learn/node-app.pem",
      ref: "origin/master",
      repo: "https://github.com/geraldanosike/aws-node-deploy.git",
      path: "/home/ubuntu/aws-node-deploy",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};