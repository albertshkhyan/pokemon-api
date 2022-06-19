import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';

export enum TOAST_TYPES {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
  DEFAULT = 'default',
}

const initialOptions: ToastOptions<{}> = {
  position: 'top-right',
  theme: 'dark',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const successToast = (
  message: string,
  options?: ToastOptions<{}> | undefined,
) => {
  toast(message, {
    ...initialOptions,
    ...options,
    type: TOAST_TYPES.SUCCESS,
  });
};

export const errorToast = (
  message: string,
  options?: ToastOptions<{}> | undefined,
) => {
  toast(message, {
    ...initialOptions,
    ...options,
    type: TOAST_TYPES.ERROR,
  });
};
