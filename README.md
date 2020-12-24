# Peer server #

PeerServer helps establishing connections between PeerJS clients.

## Generate your certificates ##

In terminal go to cert folder, delete cert.pem and key.pem files
After that run this four commands to generate certificates:
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem

For more informations visit <https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/>

## How to use peer server ##

Open a terminal and go to `server` directory:

Run npm install to install all dependencies

Run npm start

## Now go to peerjs-video-chat, install and run this project ##