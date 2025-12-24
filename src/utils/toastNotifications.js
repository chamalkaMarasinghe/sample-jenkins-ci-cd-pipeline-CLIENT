const  toast = () => {};

const showToast = (type, message) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        style: { fontSize: '14px', backgroundColor: "white" }
      });
      break;
    default:
      toast(message, {
        style: { fontSize: '14px', backgroundColor: "white" }
      });
      break;
  }
};

export default showToast;
