import Swal from "sweetalert2";

export const showAlert = ({
  type = "success",
  title,
  message,
  theme = "light",
  confirmText = "OK",
  callNumber = null, // optional phone number
}) => {
  const isDark = theme === "dark";

  return Swal.fire({
    icon: type,
    title,
    html: message, // allows HTML for line breaks
    background: isDark ? "#111" : "#ffffff",
    color: isDark ? "#fff" : "#111",
    confirmButtonText: confirmText,
    confirmButtonColor: type === "success" ? "#22c55e" : "#ef4444",
    showCancelButton: !!callNumber,
    cancelButtonText: "Call Now",
    cancelButtonColor: "#3b82f6",
    customClass: {
      popup: "rounded-2xl shadow-2xl p-6 max-w-md",
    },
    width: "90%",
    preConfirm: () => {
      // Do nothing, just close
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel && callNumber) {
      window.location.href = `tel:${callNumber}`;
    }
  });
};
