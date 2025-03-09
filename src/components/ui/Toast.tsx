import toast from "react-hot-toast";

const Toast = (message: string) => {
  toast(`${message}`, {
    style: {
      borderRadius: "8px",
      background: "#000",
      color: "#fff",
      padding: "12px",
      fontSize: "16px",
    },
  });
};
export default Toast;
