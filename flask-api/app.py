from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, emit
from controller.switchController import switchController
from config.connectSwitch import connectSwitch

app = Flask(__name__)
socketio = SocketIO(app, debug=True, cors_allowed_origins="*", async_mode="eventlet")

# CORS(app, origins=["*"])


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
    

# @app.route("/free_access_sw", methods=["POST"])
# def free_access_sw():
#     if request.method == "POST":
#         response = request.get_json()
        
#         print("RESPONSE: ", response)
        
#         switch_ctr = switchController()
#         result = switch_ctr.terminal_mode(response)
        
#         # print(result)
        
#         return result

# ===============================================

# ======== Websocket ============================
@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on("event_test")
def checkping(json):
    print(json)
    print("Testado")
    # emit, nome_evento, dados a enviar, client tmb ouve0
    emit("servidorx", {"menssagem:": "Teste de socket io"})
    socketio.sleep(1)

net_connect = None
@socketio.on("free_access_sw")
def free_access_sw(json):
    if not json["ip_sw"]:
        print("IP NAO IDENTIFICADO")
        emit("get_res_access_sw", {"message": "Ip do switch não recebido"})
        return
    
    sw = json["ip_sw"]
    if net_connect == None:
        print("Not netconnect")
        net_connect = connectSwitch(sw)
    else: 
        print("Ja existe conexao")
    
    
    
    
    print("RESPOSTA")
    
    # Retorna o resultado da resposta do switch
    emit("get_res_access_sw", {"message": "Acesso realizado com sucesso"})



# Handle disconnects
@socketio.on('disconnect')
def handle_disconnect():
    emit("message", f"Client disconectado", broadcast=True)


# ===============================================


if __name__ == "__main__":
    # app.run(host="0.0.0.0", debug=True);
    socketio.run(app, host="0.0.0.0", debug=True)