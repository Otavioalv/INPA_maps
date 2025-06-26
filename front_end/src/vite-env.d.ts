/// <reference types="vite/client" />

// Tipar os dados de env 
// Porque?
//  R: Eu não sei
//  R: Acho que por questões de segurança de tipagem
//  R: Concordo
interface InportMetaEnv {
    readonly VITE_API_INFRA_URL: string;
    readonly VITE_API_INFRA_PORT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}