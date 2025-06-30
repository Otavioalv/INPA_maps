from flask import jsonify
import re
import csv
from model.switchModel import switchModel
from config.connectSwitch import connectSwitch

class switchController():
    
    def __init__(self):
        self.swModel = switchModel()
        
        
    def get_full_status_port(self, response):
        """ 
        Coleta status completo das portas em um switch, função feita para ser usado na API.
        
        :list_sw: lista com ips do switch. exp: ["192.168.0.1", "192.168.0.2", ...]
        :return: Retorna a lista com dados completos das portas dos switchs.
        """
        
        try:
            if not response:
                return jsonify({
                    "message": "Nenhum dado foi enviado",
                    "results": []
                }), 400
                
            
            list_sw: list = response["list_sw"]
            status_sw_results = []
            for sw in list_sw:
                status_sw = {}
                
                print(f"\n{sw}")
                
                # Parte de conexão
                net_connect = connectSwitch(sw)
                
                # resultado real ao conectar no switch
                if net_connect:
                    result_ports = self.swModel.sw_sh_status(net_connect, "status_sw")
                    output_ports = self._parse_sw_output(result_ports)
                    net_connect.disconnect()
                else: 
                    output_ports = []
                    
                status_sw = {
                    "sw_ip": sw,
                    "ports_info": output_ports
                }
                
                status_sw_results.append(status_sw)
              
                
                # output_ports = []
            return jsonify({
                "message": "Requisição realizada com sucesso",
                "results": status_sw_results
            }), 200

        except Exception as e:
            print(f"Erro ao coletar portas bloqueadas: {e}")
            
            return jsonify({
                "message": "Erro ao efetuar requisição",
                "results": []
            }), 500

    # Trata todos os resultados do comando int status, e coloca em um dicionario
    def _parse_sw_output(self, text: str):     
        # Separa o texto por linhas
        lines = text.strip().splitlines() # Separa tudo por linhas
        header_line = lines[0] # Pega somente o cabeçalho, na posição 0
        data_lines = lines[1:] # Pega o resto das linhas
        
        """ 
        Port, Name, Status, Vlan, Duplex, Speed Type
        """
        # descobrir os indices baseados no nome do cabeçalho 
        port_idx = header_line.index("Port")
        name_idx = header_line.index("Name")
        status_idx = header_line.index("Status")
        vlan_idx = header_line.index("Vlan")
        duplex_idx = header_line.index("Duplex")
        speed_idx = header_line.index("Speed")
        type_idx = header_line.index("Type")
        
        
        results = []
        for line in data_lines:
            port = line[port_idx:name_idx].strip()
            name = line[name_idx:status_idx].strip()
            status = line[status_idx:vlan_idx].strip()
            vlan = line[vlan_idx:duplex_idx].strip()
            duplex = line[duplex_idx:speed_idx].strip()
            speed = line[speed_idx:type_idx].strip()
            type_ = line[type_idx:].strip()
        
            results.append({
                'port': port,
                'name': name,
                'status': status,
                'vlan': vlan,
                'duplex': duplex,
                'speed': speed,
                'type': type_,
            })
        
        return results
        
    def terminal_mode(self, id_sw = ""):
        if not id_sw:
            print("Parametro de IP vazio, insira manualmente")
            id_sw = str(input(">>>"))
        
        
        opc = str(input("Entrar em modo terminal s/n: "))
        
        net_connect = connectSwitch(id_sw)    
        
    
        if opc.lower() == "s":
            text = ""
            while text != "/exit":
                text = input(">>>")
                result = net_connect.send_command(text)
                print(result)
        else: 
            print("Não entrou em modo terminal")
            