import Swal from 'sweetalert2';

export async function logoutApi() {

    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_PRE_PROD}/logout`, {
            method: 'POST',
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
                text: 'Error al intentar cerrar sesión',
            });
            return;
        }

        console.log( await response.json() );

        Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: 'Hasta luego!',
            showConfirmButton: false,
            timer: 1000
        });

    } catch (error) {
        console.error('Error fetching patients data:', error);
        Swal.fire({
            icon: 'error',
            title: 'Ups! Algo salió mal',
            text: 'Error al intentar cerrar sesión',
        });
    }

}