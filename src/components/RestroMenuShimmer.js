const Shimmer = () => {
    return (
      <div className="Menu">
        <div className="restaurant-info">
          <div className="restro-details">
            <photo className="restromenu-name shine"></photo><br></br>
            <line className="restromenu-cuisine shine"></line><br></br>
            <line className="restromenu-area shine"></line>
          </div>
          <line className="restro-ratings shine"></line>
        </div>
        <div className="restro-cost-deltime ">
          <line className="shine"></line>{"\t"}<line className="shine"></line>
        </div>
        <hr className="restor-cost-line"></hr>
        <div className="menu-food-items">
          <div className="menu-section">
            <div className="menu-category">
              <line className="shine"></line>
              <div className="menu-display">
                <photo className="item-image shine"></photo>
                <div className="dish-info">
                  <line className="dish-name shine"></line><br></br>
                  <line className="dish-price shine"></line><br></br>
                  <line className="dish-description shine"></line><br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Shimmer;