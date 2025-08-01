from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit, join_room, send
from controller.switchController import switchController
from config.connectSwitch import connectSwitch
from routers import switch, socketio_bp

app = Flask(__name__)
CORS(app, origins=["*"])
socketio = SocketIO(app, debug=True, cors_allowed_origins="*", async_mode="eventlet")

app.register_blueprint(switch.switch_bp)

socketio_bp.socketio_bp


# ============== Rotas Python Flask ================
@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"})
# =================================================    


# ========== Websocket ============================
""" @socketio.on('connect')
def handle_connect():
    client_id = request.sid
    print('Client connected: ', client_id)


@socketio.on("event_test")
def checkping(json):
    print(json)
    print("Testado")
    # emit, nome_evento, dados a enviar, client tmb ouve0
    emit("servidorx", {"menssagem:": "Teste de socket io"})
    socketio.sleep(1)


# Realiza conexão individual com o switch
net_connect_list = {}

@socketio.on("connect_sw")
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
    
    
    
@socketio.on("free_access_sw")
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
@socketio.on('disconnect')
def handle_disconnect():
    emit("message", f"Client disconectado", broadcast=True) """
# ===============================================


if __name__ == "__main__":
    # app.run(host="0.0.0.0", debug=True);
    socketio.run(app, host="0.0.0.0", debug=True)