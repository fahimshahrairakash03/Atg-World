import React from "react";
import "./Modal.css";
import modalimg from "../../asset/modal-img.png";
import facebook from "../../asset/facebook.png";
import google from "../../asset/google.png";

const Modal = () => {
  return (
    <div>
      <div
        className=" modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="signup-modal modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div style={{ background: " #EFFFF4" }}>
              <p className="modal-head">
                Lets learn,share and inspire each other with our passion for
                computer engineering. Sign up now
              </p>
            </div>
            <div class="modal-body">
              <div className="d-flex justify-content-between align-items-center">
                <p className="modal-heading">Create Account</p>
                <p className="modal-para1">
                  Already have an account? <span>Sign In</span>
                </p>
              </div>
              <div className="d-flex align-items-center">
                <form className="form-submit ">
                  <table class="table table-bordered input-table">
                    <tbody>
                      <tr class="table-active">
                        <td class="table-active">First Name</td>
                        <td class="table-active">Last Name</td>
                      </tr>
                      <tr>
                        <td colspan="2" class="table-active">
                          Email
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" class="table-active">
                          Password
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" class="table-active">
                          Confirm Password
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
                <img className="modal-img" src={modalimg} alt="" />
              </div>

              <button className="signupBtn">Create Account</button>
              <br />
              <button className="fbsignup">
                <img className="me-2" src={facebook} alt="" />
                Signup with facebook
              </button>
              <button className="googlesignup">
                <img className="me-2" src={google} alt="" />
                Signup with google
              </button>
              <p className="endtext">
                By Signing up, you agree to our Terms & Conditions, Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
