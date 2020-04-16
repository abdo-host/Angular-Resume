const PROXY_CONFIG = [{
  context: [
    "",
    "/",
    "/api",
    "/ohmioapi"
  ],
  target: "http://domaincontrol.com:4200",
  changeOrigin: true,
  logLevel: "debug"

}]

module.exports = PROXY_CONFIG;
