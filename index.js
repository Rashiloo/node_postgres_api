require ('dotenv').config()

const server = require ('./server');
const PORT = process.env.ROOT || 8090;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
