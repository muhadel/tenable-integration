import Toaster from "./toaster";

const actions = {
  SUCCESS_TOASTER: "SUCCESS_TOASTER",
  ERROR_TOASTER: "ERROR_TOASTER",
  triggerSuccess: message => dispatch => {
    dispatch({
      type: actions.SUCCESS_TOASTER
    });
    Toaster.success(message);
  },
  triggerError: message => dispatch => {
    dispatch({
      type: actions.SUCCESS_TOASTER
    });
    Toaster.error(message);
  }
};
export default actions;
