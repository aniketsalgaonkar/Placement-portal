import React from "react"
import { NavLink } from 'react-router-dom';


const Profile = (props) => {
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
                  <NavLink className="nav-link active spaced-link" aria-current="page" to="/profile">
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
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
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
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
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
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
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
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Resume Builder
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/companiesvisited">
                    <svg xmlns="http://www.w3.org/2000/svg"
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
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <path d="M12 22s-8-4.488-8-12a8 8 0 0 1 16 0c0 7.512-8 12-8 12z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>

                    Companies Visited
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/placementstats">
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
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
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
              <h1 className="h1">My Profile</h1>
            </div>
            <section style={{ backgroundColor: '#eee', padding: '20px' }}>

              <div class="row">
                <div class="col-lg-4">
                  <div class="card mb-4">
                    <div class="card-body text-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        class="rounded-circle img-fluid" style={{ width: '150px' }}></img>
                      <h5 class="my-3">Student1</h5>
                      <p class="text-muted mb-1">MCA-VESIT</p>
                      <p class="text-muted mb-4">Full Stack Developer</p>
                      <div class="d-flex justify-content-center mb-2">
                        <button type="button" class="btn btn-outline-primary">Follow</button>
                        <button type="button" class="btn btn-outline-primary ms-2">Message</button>
                      </div>
                    </div>
                  </div>
                  <div class="card mb-4 mb-lg-0">
                    <div class="card-body p-0">
                      <ul class="list-group list-group-flush rounded-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-globe fa-lg text-warning"></i>
                          <p class="mb-0">https://sampleweb.com</p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-github fa-lg" style={{ color: '#333333' }}></i>
                          <p class="mb-0">sample-github</p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                          <p class="mb-0">@sampletwitter</p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                          <p class="mb-0">sampleinsta</p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                          <p class="mb-0">samplefacebook</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Name</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">Student1</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Class</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">FYMCA-B</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Mobile</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">(098) 765-4321</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">student1@gmail.com</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Address</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">Malabar Hill, Mumbai West</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                          <p class="mb-4"><span class="text-primary font-italic me-1">Coding Languages</span>
                          </p>
                          <p class="mb-1" style={{ fontSize: '.95rem' }}>Javascript</p>
                          <div class="progress rounded" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="80"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>Python</p>
                          <div class="progress rounded" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="72"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>Java</p>
                          <div class="progress rounded" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="89"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>SQL</p>
                          <div class="progress rounded" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="55"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>MERN Stack</p>
                          <div class="progress rounded mb-2" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="66"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                          <p class="mb-4"><span class="text-primary font-italic me-1">Courses</span>
                          </p>
                          <p class="mb-1" style={{ fontSize: '.95rem' }}>Simple React App from Scratch</p>
                          <div class="d-flex justify-content mb-2">
                            <button type="button" class="btn btn-outline-dark text-dark no-hover" style={{ fontSize: '.77rem' }}>Ongoing</button>
                            <button type="button" class="btn bg-success  border border-dark  text-white ms-2" style={{ fontSize: '.77rem' }}>Completed</button>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>Python for Data Analysis</p>
                          <div class="d-flex justify-content mb-2">
                            <button type="button" class="btn bg-success  border border-dark  text-white" style={{ fontSize: '.77rem' }}>Ongoing</button>
                            <button type="button" class="btn btn-outline-dark text-dark no-hover ms-2" style={{ fontSize: '.77rem' }}>Completed</button>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>DevOps Fundamentals</p>
                          <div class="d-flex justify-content mb-2">
                            <button type="button" class="btn bg-success  border border-dark  text-white" style={{ fontSize: '.77rem' }}>Ongoing</button>
                            <button type="button" class="btn btn-outline-dark text-dark no-hover ms-2" style={{ fontSize: '.77rem' }}>Completed</button>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>Fundamentals of Database Engineering</p>
                          <div class="d-flex justify-content mb-2">
                            <button type="button" class="btn btn-outline-dark text-dark no-hover" style={{ fontSize: '.77rem' }}>Ongoing</button>
                            <button type="button" class="btn bg-success  border border-dark  text-white ms-2" style={{ fontSize: '.77rem' }}>Completed</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
};

export default Profile;
