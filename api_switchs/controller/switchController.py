import re
import csv
from model.switchModel import switchModel
from config.connectSwitch import connectSwitch

class switchController():
    
    def __init__(self):
        self.swModel = switchModel()
        
    
    # Coleter portas bloqueadas
    def get_blocked_ports(self, list_sw:list) -> list:
        try:
            
            list_blocked_ports = []
            
            for sw in list_sw:
                # print(f"\n{sw}")
                
                net_connect = connectSwitch(sw[1])
                
                if not net_connect:
                    print("Ignorado")
                    continue
                
                
                list_status_port = self._get_status_ports(net_connect)
                
                # blocked_ports = [port[0] for port in list_status_port if port[1] in ["err-disabled", "disabled"]]
                blocked_ports = ", ".join([port[0] for port in list_status_port if port[1] in ["err-disabled", "disabled"]])
                
                # print("blocked: ", blocked_ports)
                dic_blocked_ports = {
                    "name": sw[0],
                    "ip": sw[1],
                    "list_blocked": blocked_ports
                }
                
                list_blocked_ports.append(dic_blocked_ports)
                
                net_connect.disconnect()
                
            return list_blocked_ports
        
        except Exception as e:
            print(f"Erro ao coletar portas bloqueadas: {e}")
            return []
            
    def _get_status_ports(self, net_connect) -> list:
        # Logica pra chamar model
        result = """
Port      Name               Status       Vlan       Duplex  Speed Type
Fa0/1                        connected    1          a-full  a-100 10/100BaseTX
Fa0/2                        err-disabled 1            auto   auto 10/100BaseTX
Fa0/3                        notconnect   1            auto   auto 10/100BaseTX
Fa0/4                        notconnect   1            auto   auto 10/100BaseTX
Fa0/5                        err-disabled 1          a-full  a-100 10/100BaseTX
Fa0/6                        notconnect   1            auto   auto 10/100BaseTX
Fa0/7                        err-disabled 1          a-full  a-100 10/100BaseTX
Fa0/8                        connected    1          a-full   a-10 10/100BaseTX
Fa0/9                        err-disabled 1            auto   auto 10/100BaseTX
Fa0/10                       notconnect   1            auto   auto 10/100BaseTX
Fa0/11                       disabled     1          a-full  a-100 10/100BaseTX
Fa0/12                       notconnect   1            auto   auto 10/100BaseTX
Fa0/13                       connected    1          a-full  a-100 10/100BaseTX
Fa0/14                       err-disabled 1            auto   auto 10/100BaseTX
Fa0/15                       connected    1          a-full  a-100 10/100BaseTX
Fa0/16                       disabled     1            auto   auto 10/100BaseTX
Fa0/17                       notconnect   1            auto   auto 10/100BaseTX
Fa0/18                       connected    1          a-full  a-100 10/100BaseTX
Fa0/19                       connected    1          a-full  a-100 10/100BaseTX
Fa0/20                       disabled     1            auto   auto 10/100BaseTX
Fa0/21                       notconnect   1            auto   auto 10/100BaseTX
Fa0/22                       notconnect   1            auto   auto 10/100BaseTX
Fa0/23                       err-disabled 1            auto   auto 10/100BaseTX
Fa0/24                       notconnect   1            auto   auto 10/100BaseTX
Gi0/1                        err-disabled 1          a-full a-1000 1000BaseLX SFP
Gi0/2                        notconnect   1            auto   auto Not Present
"""
        
        result = self.swModel.sw_sh_status(net_connect, "status_sw")
        
        print(result)
        
        list_status_ports = re.findall(r"^(\S+)\s+.*\b(err-disabled|disabled|connected|notconnect|inactive|suspend)\b", result, re.MULTILINE)
        
        return list_status_ports
    
    # Coleta lista dos switchs
    def get_list_switchs(self) -> list:
        try:
            list_switchs = self.swModel.r_list_sw()
            return list_switchs
        except Exception as e:
            print(f"Erro ao coletar lista de switchs: {e}")
            return []    
        
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
            
    def write_csv(self, data: list, csvfile):
        w_text = csv.writer(csvfile, delimiter=",", lineterminator="\n", quotechar='"')
        
        w_text.writerow(data)
            
        print(f"\n\033[1;49;33mLinha salva no SCV:\033[0m {data}\n")
        