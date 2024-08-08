import Swal from 'sweetalert2';

export async function GetPacientes() {

    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_PRE_PROD}/pacientes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        if (!response.ok) {
            console.log('RESPONSE: ', response);
            Swal.fire({
                icon: 'error',
                title: 'Ups! Algo salió mal',
                text: 'Error al obtener la lista de los pacientes',
            });
            return;
        }

        Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: 'Pacientes obtenidos exitosamente',
            showConfirmButton: false,
            timer: 800
        });

        return await response.json();

    } catch (error) {
        console.error('Error fetching patients data:', error);
        Swal.fire({
            icon: 'error',
            title: 'Ups! Algo salió mal',
            text: 'Error al obtener la lista de los pacientes',
        });
    }

}