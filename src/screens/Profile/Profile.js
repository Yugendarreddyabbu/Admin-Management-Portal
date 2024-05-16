import React from "react";

const Profile = () => {
    return (
        <div class="wrapper">
            <div class="page-content-wrapper">

                <div class="page-content">
                    <div class="row">
                        <div class="col-12 col-lg-8 col-xl-9">
                            <div class="card overflow-hidden radius-10">
                                <div class="profile-cover bg-dark position-relative mb-4">
                                    <div class="user-profile-avatar shadow position-absolute top-50 start-0 translate-middle-x">
                                        <img src="assets/images/avatars/06.png" alt="..." />
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="mt-5 d-flex align-items-start justify-content-between">
                                        <div class="">
                                            <h3 class="mb-2">Jhon Deo</h3>
                                            <p class="mb-1">Chief Admin</p>
                                            <p>123 High Street
                                                London,
                                                England
                                                SW1A 1AA</p>
                                            {/* <div class="">
                                                <span class="badge rounded-pill bg-primary">UX Research</span>
                                                <span class="badge rounded-pill bg-primary">CX Strategy</span>
                                                <span class="badge rounded-pill bg-primary">Project Management</span>
                                            </div> */}
                                        </div>
                                        {/* <div class="">
                                            <a href="javascript:;" class="btn btn-primary"><ion-icon name="send-sharp"></ion-icon>Send Message</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="card ">
                                <div class="card-body">
                                    <h4 class="mb-2">About Me</h4>
                                    <p class="">As the Chief Administrator of our esteemed car servicing center,
                                        I bring a wealth of experience and dedication to ensuring seamless operations and unparalleled customer service.
                                        With a background deeply rooted in automotive management,
                                        I am committed to overseeing every aspect of our facility with precision and efficiency.
                                        My passion for cars extends beyond mere mechanics;
                                        it's a dedication to providing a superior experience for every client who entrusts us with their vehicle.
                                        From managing administrative tasks to fostering a culture of excellence among our team,
                                        I strive to uphold the highest standards of professionalism and integrity.
                                        With a keen eye for detail and a relentless pursuit of improvement,
                                        I am determined to ensure that our car servicing center remains a trusted destination for automotive care in our community.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 col-xl-3">
                            <div class="card radius-10">
                                <div class="card-body">
                                    <h5 class="mb-3">Location</h5>
                                    <p class="mb-0"><ion-icon name="compass-sharp" class="me-2"></ion-icon>123 High Street<br/>
                                        London,<br/>
                                        England<br/>
                                        SW1A 1AA</p>
                                </div>
                            </div>

                            <div class="card radius-10">
                                <div class="card-body">
                                    <h5 class="mb-3">Connect</h5>
                                    <p class=""><ion-icon name="mail-sharp" class="me-2"></ion-icon>johndeo@gmail.com</p>
                                    <p class=""><ion-icon name="logo-facebook" class="me-2"></ion-icon>Facebook</p>
                                    <p class=""><ion-icon name="logo-twitter" class="me-2"></ion-icon>Twitter</p>
                                    <p class="mb-0"><ion-icon name="logo-linkedin" class="me-2"></ion-icon>LinkedIn</p>
                                </div>
                            </div>

                            {/* <div class="card radius-10">
                                <div class="card-body">
                                    <h5 class="mb-3">Skills</h5>
                                    <div class="mb-3">
                                        <p class="mb-1">Web Design</p>
                                        <div class="progress" style={{ height: "5px" }}>
                                            <div class="progress-bar" role="progressbar" style={{ width: "45%" }}></div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="mb-1">HTML5</p>
                                        <div class="progress" style={{ height: "5px" }}>
                                            <div class="progress-bar" role="progressbar" style={{ width: "55%" }}></div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="mb-1">PHP7</p>
                                        <div class="progress" style={{ height: "5px" }}>
                                            <div class="progress-bar" role="progressbar" style={{ width: "65%" }}></div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="mb-1">CSS3</p>
                                        <div class="progress" style={{ height: "5px" }}>
                                            <div class="progress-bar" role="progressbar" style={{ width: "75%" }}></div>
                                        </div>
                                    </div>
                                    <div class="mb-0">
                                        <p class="mb-1">Photoshop</p>
                                        <div class="progress" style={{ height: "5px" }}>
                                            <div class="progress-bar" role="progressbar" style={{ width: "85%" }}></div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;