# Peer server #

PeerServer helps establishing connections between PeerJS clients.

For more informations visit <https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/>

## Installing project ##

Open a terminal and go to `peer-server` directory:

Run npm install to install all dependencies

npm install

## Generate your certificates ##

In terminal go to cert folder, delete cert.pem and key.pem files
After that run this four commands to generate certificates:
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem

## Starting your peer server ##

Run npm start

## Now go to peerjs-video-chat, install and run this project to start video-chat app ##

<https://github.com/sandra-frontend/peerjs-video-chat>
