const PortfolioItem = (props) => {
    return (
      <div className="col-lg-4 col-md-6 portfolio-item ">
        <div className="portfolio-wrap">
          <img
            src={props.item.img}
            className="img-fluid"
            alt="portfolioImage"
          />
          <div className="portfolio-info">
            <h4>{props.item.title}</h4>
            <ul>
              <li>
                <strong>Category</strong>: {props.item.category}
              </li>
              <li>
                <strong>Client</strong>: {props.item.client}
              </li>
              <li>
                <strong>Project date</strong>: {props.item.date}
              </li>
              <li>
                <strong>Project URL</strong>:{" "}
                <a href={props.item.url} target="_blank" rel="noreferrer">MryImani/{props.item.title}</a>
              </li>
            </ul>

            <p className="d-none d-xxl-block">{props.item.description}</p>
          </div>
        </div>
      </div>
    );
}
export default PortfolioItem;