import React from "react";
import Header from "../../Layout/Header";
import BreadCrub from "../../Layout/BreadCrub";
import Footer from "../../Layout/Footer";

export const HowItWork = () => {
  const siteMapPath = [
    {
      name: "Home",
      clickable: true,
      isHome: true,
      path: "/home",
    },
    {
      name: "How it work",
      clickable: false,
      isHome: false,
      path: "/howitwork",
    },
  ];
  return (
    <>
      <div className="half-half-image-text-How">
        <div className="container">
          <Header />

          <BreadCrub siteMapPath={siteMapPath} />

          <div className="row">
            <img className="grp-14" src="../ui/Images/Group 14.png" alt="" />
            <img
              className="Ellipse-131"
              src="../ui/Images/Ellipse 131.png"
              alt=""
            />
            <div
              className="col-12"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h3>How does this work?</h3>
              <p className="p-desc">
                Lorem ipsum dolor sit amet consectetur. Lacus dolor netus amet
                neque id sed quis tellus fames. Massa ornare amet in senectus
                arcu orci fames. Cras consequat gravida.
              </p>
            </div>
          </div>
          <div className="row First">
            <img
              className="Ellipse-621"
              src="../ui/Images/Ellipse 621.png"
              alt=""
            />
            <div className="col-12 col-lg-6">
              <div className="content" style={{ display: "block" }}>
                <h3>Create Account</h3>
                <p>
                  we know your home is more than just a place to live, that’s
                  why we’re committed to providing the best home loan.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* <div
        class="img"
        style="
          background: url('../ui/Images/Group_1.png') no-repeat center;
          background-size: cover;
        "></div> */}
              <img src="../ui/Images/card-1.svg" style={{ float: "right" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div
                className="content"
                style={{ display: "block", float: "right" }}
              >
                <h3>Search for Services</h3>
                <p>
                  It’s the fast, easy way to apply for your mortgage and access
                  your application anytime, anywhere. With our mortgage access
                  center.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                className="img"
                style={{
                  background: 'url("../ui/Images/card-2.svg") no-repeat center',
                  backgroundSize: "cover",
                  height: 400,
                }}
              />
            </div>
          </div>
          <div className="row First">
            <div className="col-12 col-lg-6">
              <div className="content" style={{ display: "block" }}>
                <h3>Select Packages</h3>
                <p>
                  we know your home is more than just a place to live, that’s
                  why we’re committed to providing the best home loan.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* <div
        class="img"
        style="
          background: url('../ui/Images/Group_1.png') no-repeat center;
          background-size: cover;
        "></div> */}
              <img src="../ui/Images/card-1.svg" style={{ float: "right" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div
                className="content"
                style={{ display: "block", float: "right" }}
              >
                <h3>Payment</h3>
                <p>
                  It’s the fast, easy way to apply for your mortgage and access
                  your application anytime, anywhere. With our mortgage access
                  center.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                className="img"
                style={{
                  background: 'url("../ui/Images/card-4.svg") no-repeat center',
                  backgroundSize: "cover",
                  height: 400,
                }}
              />
            </div>
          </div>
          <div className="row First">
            <div className="col-12 col-lg-6">
              <div className="content" style={{ display: "block" }}>
                <h3>Submit your Requirements</h3>
                <p>
                  we know your home is more than just a place to live, that’s
                  why we’re committed to providing the best home loan.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* <div
        class="img"
        style="
          background: url('../ui/Images/Group_5.png') no-repeat center;
          background-size: cover;
        "></div> */}
              <img src="../ui/Images/card-5.svg" style={{ float: "right" }} />
            </div>
          </div>
          <div className="row">
            <img className="polygon" src="../ui/Images/Polygon 1.png" alt="" />
            <div className="col-12 col-lg-6">
              <div
                className="content"
                style={{ display: "block", float: "right" }}
              >
                <h3>Get delivery</h3>
                <p>
                  It’s the fast, easy way to apply for your mortgage and access
                  your application anytime, anywhere. With our mortgage access
                  center.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* <div
        class="img"
        style="
          background: url('../ui/Images/Group_6.png') no-repeat center;
          background-size: cover;
        "></div> */}
              <img src="../ui/Images/card-6.svg" />
            </div>
          </div>
          <div className="row First">
            <div className="col-12 col-lg-6">
              <div className="content" style={{ display: "block" }}>
                <h3>Revision Request (if any)</h3>
                <p>
                  we know your home is more than just a place to live, that’s
                  why we’re committed to providing the best home loan.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* <div
        class="img"
        style="
          background: url('../ui/Images/Group_7.png') no-repeat center;
          background-size: cover;
        "></div> */}
              <img src="../ui/Images/card-7.svg" style={{ float: "right" }} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div
                className="content"
                style={{ display: "block", float: "right" }}
              >
                <h3>Get Final delivery</h3>
                <p>
                  It’s the fast, easy way to apply for your mortgage and access
                  your application anytime, anywhere. With our mortgage access
                  center.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* <div
        class="img"
        style="
          background: url('../ui/Images/Group_8.png') no-repeat center;
          background-size: cover;
        "></div> */}
              <img src="../ui/Images/card-8.svg" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
