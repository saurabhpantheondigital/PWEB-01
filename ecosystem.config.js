module.exports = {
  apps: [
    {
      name: "pantheon-website",
      script: "npm",
      args: "start",
      cwd: "/var/www/pantheon",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
