import csv

# Try-except nas funções em caso de erro
# testar retorno das funcoes
# Funcao para abrir planilha e retonrar a planilha


class switchModel():
    
    def __init__(self):
        print("switchModel iniciado")
    
    
    def sw_sh_status(self, net_connect, command):
        """ 
            :command: 'hostname_sw', 'status_sw', 'ip_sw', 'local_sw', 'version_sw', 'vlan_sw'
            :net_connect: objeto de conexão com o switch
        """
        
        try:     
            list_commands = {
                'hostname_sw': 'sh run | include hostname',
                'status_sw': 'sh int status',
                'ip_sw': 'sh run | include ip address',
                'local_sw': 'sh run | include snmp-server location',
                'version_sw': 'sh inventory | include NAME',
                'vlan_sw':  "show interfaces trunk"
            }
            
            status = net_connect.send_command(list_commands[command])
            
            return status
        except Exception as err:
            print(f"Erro ao executar comando ({err})")
            return ''
