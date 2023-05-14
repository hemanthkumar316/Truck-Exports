import axios from "axios";
import React, { useState, useEffect } from "react";

const SubItems = () => {
  const [goods, setGoods] = useState([]);
  let invertoryGoods = [];
  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    const response = await axios.get("http://test.api.boxigo.in/sample-data/");
    invertoryGoods = response.data.Customer_Estimate_Flow.map((ele) =>
      setGoods(ele.items.inventory)
    );
  };
  return (
    <div>
      <div className="accordion  border" id="accordionFlushExample">
        {goods.map((items, index) => {
          return (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-secondary h2 text-warning"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  <h4>{items.displayName}</h4>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
                aria-labelledby={`heading${index}`}
              >
                <div className="accordion-body">
                  {items.category.map((item) => {
                    return (
                      <div>
                        <div>
                          {item.items.slice(0, 3).map((ele) => {
                            return (
                              <div className="row">
                                <table className="table table-borderless">
                                  <thead>
                                    <tr>
                                      <th scope="col">Product Name</th>
                                      <th scope="col">Order Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>{ele.displayName}</td>
                                      <td>{ele.order}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubItems;
