import swal from 'sweetalert2';

export const showAlertOkey = (props = {}) => {
  swal.fire({
    icon: 'success',
    title: props.title ? props.title : 'Jugador agregado con exito',
    showConfirmButton: true,
    confirmButtonColor: '#EF3D3D',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    cancelButtonAriaLabel: 'Cancelar',
    showCloseButton: true,
    closeButtonAriaLabel: 'Cerrar alerta',
    timer: props.timer ? props.timer : 5000,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false
  });
};

export const showAlertInfo = (props = {}) => {
  swal.fire({
    icon: 'info',
    title: props.title ? props.title : 'El equipo no puede tener mas de 5 jugadores',
    timer: props.timer ? props.timer : 5000,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,
    footer: props.footer ? props.footer : 'Importante!!'
  });
};

export const showAlertErr = (props = {}) => {
  swal.fire({
    icon: 'error',
    title: 'Error',
    text: props.text ? props.text : 'Upssss...!! ha sucedido un error',
    showConfirmButton: true
  });
};

const allFuntionAlert = {
  showAlertOkey,
  showAlertInfo,
  showAlertErr,
};

export default allFuntionAlert;