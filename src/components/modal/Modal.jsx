import { Fragment, useRef } from "react"
import { useClickOutside } from "../../hooks/UseClickOutside"

const Modal = ({ children, show, close }) => {
  const modalref = useRef(null)
  if (!show) return
  return (
    <Fragment>
      {show && <div className={`backdrop fade`}></div>}
      <div className={`modal ${show ? "show" : ""}`}>
        <div className="dialog" ref={modalref}>
          <div className="content">
            <span className="close" onClick={close} />
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
const Title = ({ children }) => {
  return (
    <div className="modal_title">
      <h4>{children}</h4>
    </div>
  )
}
const Body = ({ children }) => {
  return <div className="modal_body">{children}</div>
}
const Footer = ({ children }) => {
  return <div className="modal_Footer">{children}</div>
}

export default Object.assign(Modal, {
  Title: Title,
  Body: Body,
  Footer: Footer,
})
