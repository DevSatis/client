import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="category">
      <div className="col">
        <div className="row">
          <img
            src="https://media.istockphoto.com/id/821819846/photo/two-friends-shopping-for-clothes.jpg?s=1024x1024&w=is&k=20&c=1Jw833NPV__DH44cBi-4RFKsLM-BhojR8n2x3Xf_KZ8="
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1559034750-cdab70a66b8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1520013333831-acd77cc08fd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.unsplash.com/photo-1544596758-7339ae9a0432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Children
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.unsplash.com/photo-1550524587-6bcdc279ad98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Accessories
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
