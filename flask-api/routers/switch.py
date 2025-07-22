from flask import Blueprint, request
from controller.switchController import switchController

switch_bp = Blueprint('switch', __name__, url_prefix="/switch")

# Pegar dados das portas do/s switchs
@switch_bp.route('/full_status_switch', methods=['POST'])
def full_status_switch():
    if request.method == "POST":
        response = request.get_json()
        
        print(response)
        
        switch_ctr = switchController()
        result = switch_ctr.get_full_status_port(response)
        
        print(result)    
        return result