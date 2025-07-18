from fastapi import FastAPI
from controller.switchController import switchController
from pydantic import BaseModel
import uvicorn
import socketio

sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
app = FastAPI()


# ============== Rotas Python Flask ================
@app.get('/health')
async def health():
    return {"status": "healthy"}


class FullStatusSwRequest(BaseModel):
    list_sw: list

# Pegar dados das portas do/s switchs
@app.post('/full_status_switch')
def full_status_switch(request_data: FullStatusSwRequest):
    print(request_data.model_dump())
    
    switch_ctr = switchController()
    result = switch_ctr.get_full_status_port(request_data.model_dump())

    return result


# =================================================    


# # ========== Websocket ============================

@sio.event
async def connect(sid, environ):
    print(f"Client connected: {sid}")


# @socketio.on('connect')
# def handle_connect():
#     client_id = request.sid
#     print('Client connected: ', client_id)


# @socketio.on("event_test")
# def checkping(json):
#     print(json)
#     print("Testado")
#     # emit, nome_evento, dados a enviar, client tmb ouve0
#     emit("servidorx", {"menssagem:": "Teste de socket io"})
#     socketio.sleep(1)


# # Realiza conexão individual com o switch
# net_connect_list = {}

# @socketio.on("connect_sw")
# def connect_sw(jsonSkt):    
#     try:
#         print(net_connect_list)
        
#         client_id = request.sid
#         print('Client connected: ', client_id) 
#         # Verifica se chaves existem
#         if not all(key in jsonSkt for key in ["ip_sw"]):
#             emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
#             return
            
#         # Verificar se existem valores nas chaves
#         if not jsonSkt["ip_sw"]:
#             emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
#             return
        
#         sw = jsonSkt["ip_sw"]
#         if not client_id in net_connect_list:
#             net_connect = connectSwitch(sw)
#             net_connect.enable()
#             print("Conexão do usuario adicionado na lista")
#             net_connect_list[client_id] = net_connect
        
#         # emit("get_res_access_sw", {"message": "Acesso realizado com sucesso " + client_id, "results": result})
#         emit("res_connect_sw", {"message": "Success", "access": True, "results": ""})
#     except Exception as e:
#         print("Erro ao realizar requisição: ", e)
#         emit("res_connect_sw", {"message": "Error", "access": False, "results": ""})
    
    
    
# @socketio.on("free_access_sw")
# def free_access_sw(json):
#     try:
#         print(net_connect_list)
        
#         client_id = request.sid
#         print('Client connected: ', client_id) 
    
#         # Verifica se chaves existem
#         if not all(key in json for key in ["cmdl"]):
#             emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
#             return
            
#         # Verificar se existem valores nas chaves
#         if not json["cmdl"]:
#             emit("get_res_access_sw", {"message": "Credenciais não preenchidas corretamente", "results": ""})
#             return
        
#         # sw = json["ip_sw"]
#         # is_connect = json["is_connect"]
#         cmdl = json["cmdl"]
        
#         result = net_connect_list[client_id].send_command(cmdl)
        
#         emit("res_free_access_sw", {"message": "Success", "access": True, "results": result})
#     except Exception as e:
#         print("Erro ao realizar requisição: ", e)
#         emit("res_free_access_sw", {"message": "Error", "access": False, "results": result})

# # Handle disconnects
# @socketio.on('disconnect')
# def handle_disconnect():
#     emit("message", f"Client disconectado", broadcast=True)


# # ===============================================


# if __name__ == "__main__":
    # app.run(host="0.0.0.0", debug=True);
    # socketio.run(app, host="0.0.0.0", debug=True)
    

# full_app = socketio.ASGIApp(sio, app)
    
if __name__=="__main__":
    # uvicorn.run("appFastApi:app", host="0.0.0.0", port=7777, lifespan="on", reload=True)
    # uvicorn.run(app, host="0.0.0.0", reload=True)
    uvicorn.run("appFastApi:app", host="0.0.0.0", reload=True)