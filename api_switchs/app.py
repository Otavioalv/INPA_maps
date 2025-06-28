from flask import Flask, request, jsonify
from flask_cors import CORS
from controller.switchController import switchController

app = Flask(__name__, static_folder="../FrontEnd/src/assets/qrCode/", template_folder=".");
CORS(app);


# Pegar dados das portas do/s switchs
@app.route('/full_status_switch', methods=['GET'])
def full_status_switch():
    if request.method == "GET":
        switch_ctr = switchController()
        result = switch_ctr.get_full_status_port(["192.168.0.1"])
        return result
        # switchController.get_full_status_port(["192.168.0.1"])
        # return jsonify({
        #     "message": "requisição realizada com sucesso",
        #     "results": []
        # })


# # Listar historico qrcode
# @app.route('/qrcode/my_log', methods=['POST', 'GET'])
# @jwt_required
# def my_log(user_identify):
#     if request.method == 'POST':
#         if(user_identify):
#             controllerLog = ControllerLog.ControllerLog(user_identify);
#             result = controllerLog.listLog();
            
#             return result;
#         else:
#             return jsonify(
#                 {
#                     "message": "Token inválido.",
#                     "logList": []
#                 }
            # );
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True);