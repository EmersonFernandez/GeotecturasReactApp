import axios from 'axios';
import {backgroundColorPerfil} from '../utils/datas'

// Mensajes de Toas
export const showMessage = (sumarry, message, ref, severity) => {
    ref.current.show({ severity: severity, summary: sumarry, detail: message, life: 3000 });
};

export async function fetchData(url) {
    const token = await localStorage.getItem('token');
    try {
        const response = await axios.get(url, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error so callers can handle it
    }
}

// Colocar la primera letra en mayuscula
export function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Letra color perfil
export async function backgroundLetterProfil(letter) {
    const key = backgroundColorPerfil[await letter];
    return key.color;
}
