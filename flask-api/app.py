from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit, join_room, send
from controller.switchController import switchController
from config.connectSwitch import connectSwitch

app = Flask(__name__)
CORS(app, origins=["*"])
socketio = SocketIO(app, debug=True, cors_allowed_origins="*", async_mode="eventlet")



# ============== Rotas Python Flask ================
@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"})


# Pegar dados das portas do/s switchs
@app.route('/full_status_switch', methods=['POST'])
def full_status_switch():
    if request.method == "POST":
        response = request.get_json()
        
        print(response)
        
        switch_ctr = switchController()
        result = switch_ctr.get_full_status_port(response)
        
        print(result)    
        return result

# =================================================    


# ========== Websocket ============================
@socketio.on('connect')
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
@socketio.on("free_access_sw")
def free_access_sw(json):
    client_id = request.sid
    print('Client connected: ', client_id) 
  
    # Verifica se chaves existem
    if not all(key in json for key in ["ip_sw", "cmdl"]):
        emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
        return
        
    # Verificar se existem valores nas chaves
    if not json["ip_sw"] or not json["cmdl"]:
        emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
        return
    
    sw = json["ip_sw"]
    # is_connect = json["is_connect"]
    cmdl = json["cmdl"]
    
    
    if not client_id in net_connect_list:
        net_connect = connectSwitch(sw)
        print("Conexão do usuario adicionado na lista")
        net_connect_list[client_id] = net_connect
    
    # Adicionar temporariamente / Adicionar individual somente para conectar
    # if not is_connect:
    #     net_connect_list[client_id].disconnect()
    #     print("Switch desconectado")
    #     emit("get_res_access_sw", {"message": "Switch desconectado com sucesso " + client_id, "results": ""})
    #     return 
    
    
    result = net_connect_list[client_id].send_command(cmdl)
    
    
    # Retorna o resultado da resposta do switch
    emit("get_res_access_sw", {"message": "Acesso realizado com sucesso " + client_id, "results": result})



# Handle disconnects
@socketio.on('disconnect')
def handle_disconnect():
    emit("message", f"Client disconectado", broadcast=True)


# ===============================================


if __name__ == "__main__":
    # app.run(host="0.0.0.0", debug=True);
    socketio.run(app, host="0.0.0.0", debug=True)