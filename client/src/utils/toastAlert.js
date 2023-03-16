import { Slide, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const currentOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide
};

const notify = (message = "") => {
    return {
        success(options = {}) {
            return toast.success(message, { ...currentOptions, ...options });
        },
        info(options = {}) {
            return toast.info(message, { ...currentOptions, ...options });
        },
        warning(options = {}) {
            return toast.warning(message, { ...currentOptions, ...options });
        },
        error(options = {}) {
            return toast.error(message, { ...currentOptions, ...options });
        },
    }
}

export default notify