import React from 'react'

const Serviceoption = ({service}) => {
  return (
    <div style={{ marginRight: "10px" }} className="col-up">
            <div className={service.className}></div>
            <div className="service-title">
              <a href=""> {service.title}</a>
              <p>
                {service.desc}
              </p>
            </div>
          </div>
  )
}

export default Serviceoption            