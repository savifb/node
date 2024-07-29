const http = require("http");
const ip = '127.0.0.1';
const portaInicial = 3000;
const numServidores = 5; // Número de servidores que você deseja criar

for (let i = 0; i < numServidores; i++) {
    const porta = portaInicial + i; // Calcula a porta baseada no índice do loop
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`Bem-vindo ao website em node na porta ${i}`);
    });

    server.listen(porta, ip, () => {
        console.log(`Website rodando no http://${ip}:${i}/`);
    });
}
