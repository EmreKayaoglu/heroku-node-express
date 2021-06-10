function getClientIp(req) {

  var ipAddress;
  // Amazon EC2 / Heroku workaround to get real client IP
  var forwardedIpsStr = req.header('x-forwarded-for');
  if (forwardedIpsStr) {

    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    // Ensure getting client IP address still works in
    // development environment
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
};

/*
 * GET home page.
 */

exports.index = function (req, res) {

  res.end(JSON.stringify([{
    "slug": "we-conect",
    "title": "We-Conect Home page",
    "url": "https://www.we-conect.com/",
    "color": "cyan",
    "children": [
      {
        "slug": "live-events",
        "title": "Live Event",
        "url": "https://www.we-conect.com/liveevents",
        "color": "red"
      },
      {
        "slug": "digital-managed-events ",
        "title": "Digital Managed Events ",
        "url": "https://www.we-conect.com/l digital-managed-events ",
        "color": "blue"
      }
    ]
  },
  {
    "slug": "google",
    "title": "Google",
    "url": "https://www.google.de",
    "color": "green"
  },
  {
    "slug": "Home",
    "title": "Home",
    "url": "https://www.we-conect.com/",
    "color": "yellow"
  }
  ]));
};
