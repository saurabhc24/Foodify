const Shimmer = () => {
  return (
    <div className="Menu">
      <div className="restaurant-info">
        <div className="restro-details">
          <div className="resto-disp-image shine"></div>
          <div className="restromenu-details">
            <photo className="restromenu-name shine"></photo>
            <br></br>
            <line className="restromenu-cuisine shine"></line>
            <br></br>
            <line className="restromenu-area shine"></line>
          </div>
        </div>
        <line className="restro-ratings shine"></line>
      </div>
      <div className="restro-cost-deltime ">
        <line className="shine"></line>
        {"\t"}
        <line className="shine"></line>
      </div>
      <hr className="restor-cost-line"></hr>
    </div>
  );
};

export default Shimmer;
