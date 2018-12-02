This project can be used to renew LetsEncrypt certs for a HTTPS server.  The server can be run stand-alone, or can be deployed along-side a "node_web_server" (https://github.com/alsack/node_web_server) server.

If running standalone, configure the port setting in '.env'.  Launch the server 'npm run start'.

run 'renewCert.sh' script passing in the domain for your server.  Example 'sudo ./renewCert www.example.com'