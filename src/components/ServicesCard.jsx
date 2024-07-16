import '../styles/ServicesCard.css'

export const ServicesCard = (props) => {
  return (
  <>
    
    <div className="service-card-container">
      <div className="service-image-c">
        <img src={props.image} className="service-img" alt=""/>
      </div>

      <div className="service-name-c">
        <h5 className="service-name">{props.serviceName}</h5>
      </div>

      <div className="service-desc-c">
        <h5 className="service-desc">{props.serviceDesc}</h5>
      </div>

    </div>
  </>
  )
}
