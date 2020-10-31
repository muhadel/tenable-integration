const DEV = true;
const PORT = 5001;
const HOST = DEV ? 'localhost' : 'backend.transacthq.com';
module.exports = {
  ROOT_URL: DEV ? `http://${HOST}:${PORT}` : `https://${HOST}`,
};
