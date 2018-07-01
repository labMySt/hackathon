import React, { Component } from "react";

class Jobs extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "90px", backgroundColor: "#325C6A" }} />
        <div id="wrapper">
          <section className="candidates-search-bar">
            <div className="container">
              <form action="#">
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="text"
                      placeholder="Enter Job Title, Skills or Company"
                    />
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      placeholder="Enter City, State, Province or Country"
                    />
                  </div>
                  <div className="col-md-3">
                    <input type="text" placeholder="Category" />
                  </div>
                  <div className="col-md-1">
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          {/*SEARCH BAR SECTION END*/}
          {/*MAIN START*/}
          <div id="main">
            {/*RECENT JOB SECTION START*/}
            <section className="resumes-section padd-tb">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-sm-8">
                    <div className="resumes-content">
                      <div className="check-filter">
                        <form action="#">
                          <ul>
                            <li>
                              <input id="id1" type="checkbox" />
                              <label>All Jobs</label>
                            </li>
                            <li>
                              <input id="id2" type="checkbox" />
                              <label>Part Time</label>
                            </li>
                            <li>
                              <input id="id3" type="checkbox" />
                              <label>Full Time</label>
                            </li>
                            <li>
                              <input id="id4" type="checkbox" />
                              <label>Freelance</label>
                            </li>
                            <li>
                              <input id="id5" type="checkbox" />
                              <label>Contract</label>
                            </li>
                            <li>
                              <input id="id6" type="checkbox" />
                              <label>Internship</label>
                            </li>
                            <li>
                              <input id="id7" type="checkbox" />
                              <label>Temporary</label>
                            </li>
                          </ul>
                        </form>
                      </div>
                      <h2>Showing All Resumes</h2>
                      <div className="box">
                        <div className="frame">
                          <a href="#">
                            <img
                              src="images/resumes/resumes-img-1.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="text-box">
                          <h2>
                            <a href="#">Homer Simpson</a>
                          </h2>
                          <h4>
                            UX/UI Graphic Designer, Development (Mid Level)
                          </h4>
                          <div className="clearfix">
                            {" "}
                            <strong>
                              <i className="fa fa-map-marker" />Mountain View,
                              CA
                            </strong>{" "}
                            <strong>
                              <i className="fa fa-globe" />
                              <a href="#">https://www.jobinn.com</a>
                            </strong>{" "}
                          </div>
                          <span className="price">
                            <i className="fa fa-money" />$7000 - $7500
                          </span>
                          <div className="tags">
                            {" "}
                            <a href="#">
                              <i className="fa fa-tags" />Product Management,
                            </a>{" "}
                            <a href="#">Graphic Design,</a>{" "}
                            <a href="#">HTML,</a> <a href="#">Development,</a>{" "}
                            <a href="#">WordPress,</a> <a href="#">Content</a>{" "}
                          </div>
                          <div className="btn-row">
                            {" "}
                            <a href="#" className="resume">
                              <i className="fa fa-file-text-o" />Resume
                            </a>{" "}
                            <a href="#" className="contact">
                              Contact
                            </a>{" "}
                            <a href="#" className="login">
                              Login to Bookmark this Resume
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <div className="frame">
                          <a href="#">
                            <img
                              src="images/resumes/resumes-img-2.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="text-box">
                          <h2>
                            <a href="#">Rachael Smith</a>
                          </h2>
                          <h4>Sales And Marketing Executive</h4>
                          <div className="clearfix">
                            {" "}
                            <strong>
                              <i className="fa fa-map-marker" />Mountain View,
                              CA
                            </strong>{" "}
                            <strong>
                              <i className="fa fa-globe" />
                              <a href="#">https://www.jobinn.com</a>
                            </strong>{" "}
                          </div>
                          <span className="price">
                            <i className="fa fa-money" />$7000 - $7500
                          </span>
                          <div className="tags">
                            {" "}
                            <a href="#">
                              <i className="fa fa-tags" />Product Management,
                            </a>{" "}
                            <a href="#">Graphic Design,</a>{" "}
                            <a href="#">HTML,</a> <a href="#">Development,</a>{" "}
                            <a href="#">WordPress,</a> <a href="#">Content</a>{" "}
                          </div>
                          <div className="btn-row">
                            {" "}
                            <a href="#" className="resume">
                              <i className="fa fa-file-text-o" />Resume
                            </a>{" "}
                            <a href="#" className="contact">
                              Contact
                            </a>{" "}
                            <a href="#" className="login">
                              Login to Bookmark this Resume
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <div className="frame">
                          <a href="#">
                            <img
                              src="images/resumes/resumes-img-3.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="text-box">
                          <h2>
                            <a href="#">John Spectre</a>
                          </h2>
                          <h4>Inspection And Quality Assurance Officer</h4>
                          <div className="clearfix">
                            {" "}
                            <strong>
                              <i className="fa fa-map-marker" />Mountain View,
                              CA
                            </strong>{" "}
                            <strong>
                              <i className="fa fa-globe" />
                              <a href="#">https://www.jobinn.com</a>
                            </strong>{" "}
                          </div>
                          <span className="price">
                            <i className="fa fa-money" />$50/hr
                          </span>
                          <div className="tags">
                            {" "}
                            <a href="#">
                              <i className="fa fa-tags" />Product Management,
                            </a>{" "}
                            <a href="#">Graphic Design,</a>{" "}
                            <a href="#">HTML,</a> <a href="#">Development,</a>{" "}
                            <a href="#">WordPress,</a> <a href="#">Content</a>{" "}
                          </div>
                          <div className="btn-row">
                            {" "}
                            <a href="#" className="resume">
                              <i className="fa fa-file-text-o" />Resume
                            </a>{" "}
                            <a href="#" className="contact">
                              Contact
                            </a>{" "}
                            <a href="#" className="login">
                              Login to Bookmark this Resume
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <div className="frame">
                          <a href="#">
                            <img
                              src="images/resumes/resumes-img-4.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="text-box">
                          <h2>
                            <a href="#">Angela Haze</a>
                          </h2>
                          <h4>Lead User Interface/Visual Designer</h4>
                          <div className="clearfix">
                            {" "}
                            <strong>
                              <i className="fa fa-map-marker" />Mountain View,
                              CA
                            </strong>{" "}
                            <strong>
                              <i className="fa fa-globe" />
                              <a href="#">https://www.jobinn.com</a>
                            </strong>{" "}
                          </div>
                          <span className="price">
                            <i className="fa fa-money" />$6500 - $7000
                          </span>
                          <div className="tags">
                            {" "}
                            <a href="#">
                              <i className="fa fa-tags" />Product Management,
                            </a>{" "}
                            <a href="#">Graphic Design,</a>{" "}
                            <a href="#">HTML,</a> <a href="#">Development,</a>{" "}
                            <a href="#">WordPress,</a> <a href="#">Content</a>{" "}
                          </div>
                          <div className="btn-row">
                            {" "}
                            <a href="#" className="resume">
                              <i className="fa fa-file-text-o" />Resume
                            </a>{" "}
                            <a href="#" className="contact">
                              Contact
                            </a>{" "}
                            <a href="#" className="login">
                              Login to Bookmark this Resume
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div className="box">
                        <div className="frame">
                          <a href="#">
                            <img
                              src="images/resumes/resumes-img-5.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="text-box">
                          <h2>
                            <a href="#">Suzy Biggs</a>
                          </h2>
                          <h4>Interactice &amp; Multimedia Tech Designer</h4>
                          <div className="clearfix">
                            {" "}
                            <strong>
                              <i className="fa fa-map-marker" />Mountain View,
                              CA
                            </strong>{" "}
                            <strong>
                              <i className="fa fa-globe" />
                              <a href="#">https://www.jobinn.com</a>
                            </strong>{" "}
                          </div>
                          <span className="price">
                            <i className="fa fa-money" />$12000 - $13500
                          </span>
                          <div className="tags">
                            {" "}
                            <a href="#">
                              <i className="fa fa-tags" />Product Management,
                            </a>{" "}
                            <a href="#">Graphic Design,</a>{" "}
                            <a href="#">HTML,</a> <a href="#">Development,</a>{" "}
                            <a href="#">WordPress,</a> <a href="#">Content</a>{" "}
                          </div>
                          <div className="btn-row">
                            {" "}
                            <a href="#" className="resume">
                              <i className="fa fa-file-text-o" />Resume
                            </a>{" "}
                            <a href="#" className="contact">
                              Contact
                            </a>{" "}
                            <a href="#" className="login">
                              Login to Bookmark this Resume
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                      <div id="loadMore">
                        {" "}
                        <a href="#" className="load-more">
                          <i className="fa fa-user" />Load More Jobs
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <h2>Related People</h2>
                    <aside>
                      <div className="sidebar">
                        <div className="related-people">
                          <ul>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-1.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Bettymesfin</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Developer
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />Atlanta
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-2.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Cammy</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Front Desk
                                  Specialist
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />Berlin
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-3.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Jane Doe</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Marketing Online
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />Atlanta
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-4.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Angela Haze</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Accountant
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />Berlin
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-5.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Suzy Biggs</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />HR Manager Expert
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />London, UK
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-6.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Rachael Smith</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Lead Designer
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />New York, NY
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-1.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Bettymesfin</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Developer
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />Atlanta
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-2.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Cammy</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Front Desk
                                  Specialist
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />Berlin
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-3.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Jane Doe</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Marketing Online
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />Atlanta
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-4.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Angela Haze</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Accountant
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />Berlin
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-5.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Suzy Biggs</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />HR Manager Expert
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />London, UK
                                </span>{" "}
                              </div>
                            </li>
                            <li>
                              <div className="frame">
                                <a href="#">
                                  <img
                                    src="images/resumes/related-img-6.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="text-box">
                                {" "}
                                <strong className="name">
                                  <a href="#">Rachael Smith</a>
                                </strong>{" "}
                                <span>
                                  <i className="fa fa-tags" />Lead Designer
                                </span>{" "}
                                <span>
                                  <i className="fa fa-map-marker" />New York, NY
                                </span>{" "}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </section>
            {/*RECENT JOB SECTION END*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
