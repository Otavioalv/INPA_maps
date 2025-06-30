/// <reference types="vite/client" />

// Tipar os dados de env 
// Porque?
//  R: Eu não sei
//  R: Acho que por questões de segurança de tipagem
//  R: Concordo
interface InportMetaEnv {
    // Tipar env credenciais API INFRA
    readonly VITE_API_INFRA_URL: string;
    readonly VITE_API_INFRA_PORT: string;
    
    // Tipar env credenciais API SWITCH
    readonly VITE_API_SW_URL: string;
    readonly VITE_API_SW_PORT: string;

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}