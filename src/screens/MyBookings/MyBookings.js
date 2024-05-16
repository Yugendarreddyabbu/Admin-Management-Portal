import React from "react";

const MyBookings = () => {
    return (
        <div class="wrapper">

            <div class="page-content-wrapper">

                <div class="page-content">
                    <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
                        {/* <div class="breadcrumb-title pe-3">My Bookings</div> */}
                        <div class="ps-3">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb mb-0 p-0 align-items-center">
                                    <li class="breadcrumb-item"><a href="/"><ion-icon name="home-outline"></ion-icon></a>
                                    </li>
                                    
                                    <li class="breadcrumb-item active " aria-current="page">My Bookings</li>
                                </ol>
                            </nav>
                        </div>
                        {/* <div class="ms-auto">
                            <div class="btn-group">
                                <button type="button" class="btn btn-outline-primary">Settings</button>
                                <button type="button" class="btn btn-outline-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="">Action</a>
                                    <a class="dropdown-item" href="">Another action</a>
                                    <a class="dropdown-item" href="">Something else here</a>
                                    <div class="dropdown-divider"></div>	<a class="dropdown-item" href="">Separated link</a>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div class="card radius-10 w-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <h6 class="mb-0">Recent Bookings</h6>
                                {/* <div class="fs-5 ms-auto dropdown">
                                    <div class="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i
                                        class="bi bi-three-dots"></i></div>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li>
                                            <hr class="dropdown-divider" />
                                        </li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div> */}
                            </div>
                            <div class="table-responsive mt-2">
                                <table class="table align-middle mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th>Reg. No</th>
                                            <th>Car Name</th>
                                            <th>Garage</th>
                                            <th>Customer Name</th>
                                            <th>Mobile</th>
                                            <th>Mail</th>
                                            <th>Amount</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody  style={{textAlign:"center"}}>
                                        <tr>
                                            <td>#89742</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="product-box ">
                                                        <img src="assets/images/products/car1.png" alt="" />
                                                    </div>
                                                    <div class="product-info">
                                                        <h6 class="product-name mb-1">Ford Focus</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Revamp Garage</td>
                                            <td> Robert</td>
                                            <td>1234567890</td>
                                            <td> Robert@gmail.com</td>
                                            <td>£173</td>
                                            <td>Jan 8, 2024</td>
                                            <td><span class="badge alert-success">Completed</span></td>
                                            
                                            <td>
                                                <div class="d-flex align-items-center gap-3 fs-6">
                                                    <a href="javascript:;" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="View detail" aria-label="Views">
                                                        <ion-icon name="eye-sharp"></ion-icon>
                                                    </a>
                                                    
                                                    <a href="invoices" class="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="Invoice" aria-label="Invoices">
                                                        <ion-icon name="newspaper-sharp"></ion-icon>
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#68570</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="product-box ">
                                                        <img src="assets/images/products/car2.png" alt="" />
                                                    </div>
                                                    <div class="product-info">
                                                        <h6 class="product-name mb-1">Range Rover</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Gear Force</td>
                                            <td>John</td>
                                            <td>1234567890</td>
                                            <td>John@gmail.com</td>
                                            <td>£123</td>
                                            <td>Apr 9, 2021</td>
                                            <td><span class="badge alert-success">Completed</span></td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3 fs-6">
                                                    <a href="javascript:;" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="View detail" aria-label="Views">
                                                        <ion-icon name="eye-sharp"></ion-icon>
                                                    </a>
                                                    
                                                    <a href="invoices" class="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="Invoice" aria-label="Invoices">
                                                        <ion-icon name="newspaper-sharp"></ion-icon>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#38567</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="product-box">
                                                        <img src="assets/images/products/car3.png" alt="" />
                                                    </div>
                                                    <div class="product-info">
                                                        <h6 class="product-name mb-1">Volkswagen Golf</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Speedy Repair</td>
                                            <td> William</td>
                                            <td>1234567890</td>
                                            <td> William@gmail.com</td>
                                            <td>£79</td>
                                            <td>Dec 10, 2023</td>
                                            <td><span class="badge alert-danger">Cancelled</span></td>  
                                            <td>
                                                <div class="d-flex align-items-center gap-3 fs-6">
                                                    <a href="javascript:;" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="View detail" aria-label="Views">
                                                        <ion-icon name="eye-sharp"></ion-icon>
                                                    </a>
                                                    
                                                    <a href="invoices" class="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="Invoice" aria-label="Invoices">
                                                        <ion-icon name="newspaper-sharp"></ion-icon>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#48572</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="product-box">
                                                        <img src="assets/images/products/car4.png" alt="" />
                                                    </div>
                                                    <div class="product-info">
                                                        <h6 class="product-name mb-1">BMW 3 Series</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Wheel Wizard</td>
                                            <td>Michael</td>
                                            <td>1234567890</td>
                                            <td>Michael@gmail.com</td>
                                            <td>£145</td>
                                            <td>Feb 23, 2024</td>
                                            <td><span class="badge alert-success">Completed</span></td>
                                            
                                            <td>
                                                <div class="d-flex align-items-center gap-3 fs-6">
                                                    <a href="javascript:;" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="View detail" aria-label="Views">
                                                        <ion-icon name="eye-sharp"></ion-icon>
                                                    </a>
                                                    
                                                    <a href="invoices" class="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="Invoice" aria-label="Invoices">
                                                        <ion-icon name="newspaper-sharp"></ion-icon>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#96857</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="product-box ">
                                                        <img src="assets/images/products/car5.png" alt="" />
                                                    </div>
                                                    <div class="product-info">
                                                        <h6 class="product-name mb-1">Audi A3</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Auto Haven</td>
                                            <td> James</td>
                                            <td>1234567890</td>
                                            <td> James@gmail.com</td>
                                            <td>£98</td>
                                            <td>Feb 23, 2024</td>
                                            <td><span class="badge alert-danger">Cancelled</span></td>
                                            
                                            <td>
                                                <div class="d-flex align-items-center gap-3 fs-6">
                                                    <a href="javascript:;" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="View detail" aria-label="Views">
                                                        <ion-icon name="eye-sharp"></ion-icon>
                                                    </a>
                                                    
                                                    <a href="invoices" class="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="Invoice" aria-label="Invoices">
                                                        <ion-icon name="newspaper-sharp"></ion-icon>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#96857</td>
                                            <td>
                                                <div class="d-flex align-items-center gap-3">
                                                    <div class="product-box ">
                                                        <img src="assets/images/products/car6.png" alt="" />
                                                    </div>
                                                    <div class="product-info">
                                                        <h6 class="product-name mb-1">Mercedes-Benz C-Class</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Motor Masters</td>
                                            <td> Maverick</td>
                                            <td>1234567890</td>
                                            <td>Maverick@gmail.com</td>
                                            <td>£128</td>
                                            <td>Mar 20, 2024</td>
                                            <td><span class="badge alert-warning">Pending</span></td>
                                            
                                            <td>
                                                <div class="d-flex align-items-center gap-3 fs-6">
                                                    <a href="javascript:;" class="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="View detail" aria-label="Views">
                                                        <ion-icon name="eye-sharp"></ion-icon>
                                                    </a>
                                                    
                                                    <a href="invoices" class="text-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                        title="" data-bs-original-title="Invoice" aria-label="Invoices">
                                                        <ion-icon name="newspaper-sharp"></ion-icon>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}
export default MyBookings;