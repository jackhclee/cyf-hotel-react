import React from "react";

const TouristInfoCards = props => {
  const TouristInfoCard = city => {
    return (
      <div>
        <div>
          <img class="citycard" src={city.img} />
        </div>
        <h3>{city.name}</h3>
        <div>{city.description}</div>
        <button onClick={() => window.open(city.actionUrl, "_null")}>
          Click here for more info
        </button>
      </div>
    );
  };

  const cities = [
    {
      name: "Glasgow",
      img:
        "https://peoplemakeglasgow.com/imager/general/109009/City-centre-George-Square-Content-Block_665dc57d7dd27c7d58dad07788afb138.jpg",
      description: "Description of Glasgow",
      actionUrl: "https://peoplemakeglasgow.com/",
      cssClass: "one"
    },
    {
      name: "Manchester",
      img:
        "https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2Fcastlefield%287%29.jpg&action=FeaturedItems1x1",
      description: "Description of Manchester",
      actionUrl: "https://www.visitmanchester.com/",
      cssClass: "two"
    },
    {
      name: "London",
      img:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/ecommerce-and-advertising/ecommerce/tickets-and-offers-640x360.jpg?w=310&hash=22DA7386ED5644CBCC94B7FA6A12C1097286FDA6",
      description: "Description of London",
      actionUrl: "https://www.visitmanchester.com/",
      cssClass: "three"
    }
  ];

  return (
    <div class="TouristCards">{cities.map(city => TouristInfoCard(city))}</div>
  );
};

export { TouristInfoCards };
