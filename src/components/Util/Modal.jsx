import { Modal } from "antd";
import React, { memo, useState,useEffect } from "react";
import { withRouter } from "react-router-dom";
// import {Divider} from 'antd'
export default memo(
  withRouter(function Modal2({ children, history, match,title, urlReturn }) {
    const uno="/"
    const [visible,setVisible] = useState(true);
   
    function RedirectHome() {
      history.push(urlReturn===null?"/":urlReturn);
    }

    return (
      <>
      {/* {console.log(urlReturn)} */}
        <Modal
          title={title ? title : null}
          visible={visible}
          cancelText={"Cancelar"}
          okText={"Aceptar"}
          onOk={RedirectHome}
          onCancel={RedirectHome}
        >
          {/* {console.log(title)} */}
          {children}
          {/* <Divider/> */}
        </Modal>
      </>
    );
  })
);
