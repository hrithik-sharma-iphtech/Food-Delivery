import React from "react";
import trendFood from "./TrendingFood";

const Trending = () => {
  return (
    <div>
      <div
        className="card"
        style={{ margin: "20px", maxWidth: "100%"}}
      >
        <div className="card-body">
          <h3 className="card-title text-start">Trending</h3>
          <hr />
          <table className="table text-start">
            <tbody>
              {trendFood.map((food) => {
                const {
                  foodpic,
                  restaurantName,
                  foodDesciption,
                  foodCost,
                  rating,
                } = food;
                return (
                  <tr>
                    <td>
                      <img src={foodpic} height={100} alt="food" />
                    </td>
                    <td style={{ width: "60%" }}>
                      <h6 style={{ color: "#02851c" }}>{restaurantName}</h6>
                      <p style={{ fontSize: "13px", color: "#999" }}>
                        {foodDesciption}
                        <p>
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#ffcd1a", margin:'5px' }}
                          />
                          {rating}
                        </p>
                      </p>
                    </td>
                    <td>
                      <h5>${foodCost}</h5>
                      <button className="btn btn-success">ADD TO CART <span>+</span></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Trending;
