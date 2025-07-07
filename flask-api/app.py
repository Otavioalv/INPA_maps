from flask import Flask, request, jsonify
from flask_cors import CORS
from controller.switchController import switchController

app = Flask(__name__)

# CORS(app, origins=["http://localhost", "http://127.0.0.1:5173"])
# config para o docker
# CORS(app, origins=["http://localhost", "http://127.0.0.1"])
CORS(app, origins=["*"])

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
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True);