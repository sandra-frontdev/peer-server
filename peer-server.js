/* 
 *** Creating peer server 
*/
const { PeerServer } = require('peer');
const fs = require('fs');

const peerServer = PeerServer({ 
	port: 443, 
	path: '/peerjs',    
	ssl: {
	key: fs.readFileSync('./cert/key.pem', 'utf8'),
	cert: fs.readFileSync('./cert/cert.pem', 'utf8')
}});