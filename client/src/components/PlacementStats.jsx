import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";

const PlacementStats = (props) => {
  const [state] = useState({
    options: {
      chart: {
        id: "basic-bar444 ",
      },
      xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
      },
    },
    series: [
      {
        name: "Total number of offers",
        data: [583, 597, 687, 604, 630, 775, 529],
      },
      {
        name: "Total placed",
        data: [513, 549, 572, 498, 492, 623, 503],
      },
    ],
  });

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-4 col-lg-3 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active spaced-link"
                    aria-current="page"
                    to="/profile"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user"
                      aria-hidden="true"
                      style={{ marginRight: "8px" }} // Adjust spacing as needed
                    >
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M12 14c-2.67 0-8 1.337-8 4v2h16v-2c0-2.663-5.33-4-8-4z"></path>
                    </svg>
                    My Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/announcement">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-bell"
                      aria-hidden="true"
                      style={{ marginRight: "8px" }} // Adjust spacing as needed
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Announcements
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/recruitment">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-calendar"
                      aria-hidden="true"
                      style={{ marginRight: "8px" }} // Adjust spacing as needed
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Recruitment Schedule
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/resumebuild">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-file-text"
                      aria-hidden="true"
                      style={{ marginRight: "8px" }} // Adjust spacing as needed
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Resume Builder
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink
                    className="nav-link spaced-link"
                    to="/companiesvisited"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-map-pin"
                      aria-hidden="true"
                      style={{ marginRight: "8px" }} // Adjust spacing as needed
                    >
                      <path d="M12 22s-8-4.488-8-12a8 8 0 0 1 16 0c0 7.512-8 12-8 12z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Companies Visited
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link spaced-link"
                    to="/placementstats"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bar-chart-2"
                      aria-hidden="true"
                      style={{ marginRight: "8px" }} // Adjust spacing as needed
                    >
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    Placement Statistics
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-8 ms-sm-auto col-lg-9 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Placement Statistics</h1>
            </div>

            <div className="App">
              <h3>Previous Years Placement Record</h3>
              <div className="row">
                <div className="col-4">
                  <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="900"
                  />
                  <br />
                </div>
              </div>
            </div>

            <h3 className="justify-content-center">2023-24 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">61<sup className="supp">*</sup></h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">266<sup className="supp">*</sup></h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">14.5 LPA<sup className="supp">*</sup></h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">261<sup className="supp">*</sup></h5>
                  </div>
                </div>
              </div>
              <div className="asdf">
                <h6>
                  <br />* still counting...2024.</h6>
              </div>
            </div>
<br />
<br />
            <h3 className="justify-content-center">2022-23 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">96</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">529</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">29 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">503</h5>
                  </div>
                </div>
              </div>
            </div>


            <br />
<br />
            <h3 className="justify-content-center">2021-22 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">114</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">775</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">29.25 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">623</h5>
                  </div>
                </div>
              </div>
            </div>


            <br />
<br />
            <h3 className="justify-content-center">2020-21 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">94</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">630</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">22 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">492</h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
<br />
            <h3 className="justify-content-center">2019-20 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">95</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">604</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">14 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">498</h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
<br />
            <h3 className="justify-content-center">2018-19 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">79</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">687</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">15.9 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">572</h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
<br />
            <h3 className="justify-content-center">2017-18 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">52</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">597</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">16 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">549</h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
<br />
            <h3 className="justify-content-center">2016-17 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">51</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">583</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">16 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">513</h5>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;