from flask import Blueprint, request
from flask_socketio import emit, SocketIO
from config.connectSwitch import connectSwitch

# socketio_bp = Blueprint('socketio',  __name__)
socketio_bp = SocketIO(None, debug=True, cors_allowed_origins="*", async_mode="eventlet")


# ========== Websocket ============================
@socketio_bp.on('connect')
def handle_connect():
    client_id = request.sid
    print('Client connected: ', client_id)


@socketio_bp.on("event_test")
def checkping(json):
    print(json)
    print("Testado")
    # emit, nome_evento, dados a enviar, client tmb ouve0
    emit("servidorX", {"menssagem:": "Teste de socket io"})
    socketio_bp.sleep(1)


# Realiza conexão individual com o switch
net_connect_list = {}

@socketio_bp.on("connect_sw")
def connect_sw(jsonSkt):    
    try:
        print(net_connect_list)
        
        client_id = request.sid
        print('Client connected: ', client_id) 
        # Verifica se chaves existem
        if not all(key in jsonSkt for key in ["ip_sw"]):
            emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
            return
            
        # Verificar se existem valores nas chaves
        if not jsonSkt["ip_sw"]:
            emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
            return
        
        sw = jsonSkt["ip_sw"]
        if not client_id in net_connect_list:
            net_connect = connectSwitch(sw)
            net_connect.enable()
            print("Conexão do usuario adicionado na lista")
            net_connect_list[client_id] = net_connect
        
        # emit("get_res_access_sw", {"message": "Acesso realizado com sucesso " + client_id, "results": result})
        emit("res_connect_sw", {"message": "Success", "access": True, "results": ""})
    except Exception as e:
        print("Erro ao realizar requisição: ", e)
        emit("res_connect_sw", {"message": "Error", "access": False, "results": ""})
    
    
    
@socketio_bp.on("free_access_sw")
def free_access_sw(json):
    try:
        print(net_connect_list)
        
        client_id = request.sid
        print('Client connected: ', client_id) 
    
        # Verifica se chaves existem
        if not all(key in json for key in ["cmdl"]):
            emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
            return
            
        # Verificar se existem valores nas chaves
        if not json["cmdl"]:
            emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
            return
        
        # sw = json["ip_sw"]
        # is_connect = json["is_connect"]
        cmdl = json["cmdl"]
        
        result = net_connect_list[client_id].send_command(cmdl)
        
        emit("res_free_access_sw", {"message": "Success", "access": True, "results": result})
    except Exception as e:
        print("Erro ao realizar requisição: ", e)
        emit("res_free_access_sw", {"message": "Error", "access": False, "results": result})

# Handle disconnects
@socketio_bp.on('disconnect')
def handle_disconnect():
    emit("message", f"Client disconectado", broadcast=True)