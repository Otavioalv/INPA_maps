import {io} from 'socket.io-client';


// ws://localhost:5000 ou http://localhost:5000
const URL = "ws://localhost:5000"

export const socket = io(URL);