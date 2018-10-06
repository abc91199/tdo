import feathers from '@feathersjs/client';
import io from 'socket.io-client';

const SERVER_ADDRESS = 'http://192.168.200.106:52648';
var _service = null;
var _socket = null;

export const getService = () => {
    if (!_service) {
        const socket = io(SERVER_ADDRESS);
        const feathersApp = feathers();
        feathersApp.configure(feathers.socketio(socket));
        _service = feathersApp.service('tdo');
        _socket = socket;
    }
    return _service;
}


export const getSocket = () => {
    if (!_socket) {
        const socket = io(SERVER_ADDRESS);
        const feathersApp = feathers();
        feathersApp.configure(feathers.socketio(socket));
        _service = feathersApp.service('tdo');
        _socket = socket;
    }
    return _socket;
}
