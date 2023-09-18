import { createServer } from "./server";

const port = 5001;
console.log(port)
const server = createServer();

server.listen(port, () => {
    console.log(`api running on ${port}`);
});