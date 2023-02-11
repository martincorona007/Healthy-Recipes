import { toast } from "react-toastify";

const successMessage = (message: string) => {
  toast.success(`${message}`, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
const errorMessage = (message: string) => {
  toast.error(`${message}`, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })
}
const warningMessage = (message: string) => {
  toast.warn(`${message}`, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })
}
export {successMessage,errorMessage,warningMessage}