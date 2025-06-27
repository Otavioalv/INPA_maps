from netmiko import ConnectHandler
from netmiko.base_connection import BaseConnection

def connectSwitch(ip_switch):
    protocolos = ['cisco_ios', 'cisco_ios_telnet']

    credenciais = [
        {
            "username": "netadmins",
            "password": "n&w@pnI2d2R"
        },
        {
            "username": "netadmins",
            "password": "R2d2Inp1"
        },
        {
            "username": "toor",
            "password": "n&w@pnI2d2R"
        },
        {
            "username": "toor",
            "password": "R2d2Inp1"
        },
    ]
    
    net_connect: BaseConnection | None = None
    
    for protocolo in protocolos:
        for cred in credenciais:
            try:
                print(f"\nCredenciais de conexão\nProtocolo: {protocolo}\nusername: {cred['username']}\npassworld: {cred['password']}")

                cisco_device = {
                    'device_type': protocolo,
                    'ip': ip_switch,
                    'username': cred["username"],
                    'password': cred["password"],
                    'secret': cred["password"],
                }

                net_connect = ConnectHandler(**cisco_device)
                    
                print("\033[1;32;40mConexão realizada com sucesso\033[0m")
                break
            except Exception as e:
                print(f"\n\033[1;31;40mFalha ao conectar com credenciais\033[0m\n")
        
        if net_connect: break
        
    if not net_connect: 
        print("\033[1;31;40mNenhuma das credenciais foi bem sucedida\033[0m")
        return 
    
    net_connect.enable()
    
    return net_connect

# connectSwitch()