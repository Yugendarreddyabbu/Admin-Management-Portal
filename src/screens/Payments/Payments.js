import React from "react";

const Payments = () => {
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

									<li class="breadcrumb-item active " aria-current="page">Payments</li>
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
					{/* <h6 class="mb-0 text-uppercase">DataTable Import</h6>
					<hr /> */}

					<div class="card">
						<div class="card-body">
							<div class="table-responsive">
								<div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap5">
									<div class="row">
										<div class="col-sm-12 col-md-6">
											<div class="dt-buttons btn-group">
												<button class="btn btn-outline-secondary buttons-copy buttons-html5" tabindex="0" aria-controls="example2" type="button">
													<span>Copy</span>
												</button>
												<button class="btn btn-outline-secondary buttons-excel buttons-html5" tabindex="0" aria-controls="example2" type="button">
													<span>Excel</span>
												</button>
												<button class="btn btn-outline-secondary buttons-pdf buttons-html5" tabindex="0" aria-controls="example2" type="button">
													<span>PDF</span>
												</button>
												<button class="btn btn-outline-secondary buttons-print" tabindex="0" aria-controls="example2" type="button">
													<span>Print</span>
												</button>
											</div>
										</div>
										<div class="col-sm-12 col-md-6">
											<div id="example2_filter" class="dataTables_filter">
												<label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="example2" /></label>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
											<table id="example2" class="table table-striped table-bordered dataTable" role="grid" aria-describedby="example2_info">
												<thead>
													<tr role="row">
													<th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{ width: "192.438px" }}>Reg.No</th>
														<th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Name: activate to sort column descending" style={{ width: "192.438px" }}>Customer name</th>
														<th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style={{ width: "313.1px" }}>Garage</th>
														<th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style={{ width: "105.8px" }}>Amount</th>
														<th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style={{ width: "130.363px" }}>Payment date</th>
												</tr>
												</thead>
												<tbody>


													<tr role="row" class="odd">
														<td class="sorting_1">#9876</td>
														<td>Henry</td>
														<td>Motor Masters</td>
														<td>£33</td>
														<td>03/20/2024</td>
														
													</tr>
													<tr role="row" class="even">
													<td class="sorting_1">#9876</td>
														<td>James</td>
														<td>Wheel Wizard</td>
														<td>£19</td>
														<td>02/18/2024</td>
													</tr>
													<tr role="row" class="odd">
													<td class="sorting_1">#9876</td>
														<td>Michael</td>
														<td>Speedy Repai</td>
														<td>£20</td>
														<td>02/10/2024</td>
													</tr><tr role="row" class="even">
													<td class="sorting_1">#9876</td>
														<td>Veronica</td>
														<td>The Car Garage</td>
														<td>£51</td>
														<td>02/28/2024</td>
													</tr>
													<tr role="row" class="odd">
													<td class="sorting_1">#9876</td>
														<td>Samson</td>
														<td>Gear Force</td>
														<td>£43</td>
														<td>02/24/2024</td>
													</tr>
													
													<tr role="row" class="even">
													<td class="sorting_1">#9876</td>
														<td>John</td>
														<td>Revamp Garage</td>
														<td>£54</td>
														<td>11/28/2024</td>
													</tr>
													<tr role="row" class="odd">
													<td class="sorting_1">#9876</td>
														<td>kevin</td>
														<td>A & B Garage</td>
														<td>£23</td>
														<td>11/28/2024</td>
													</tr>
													<tr role="row" class="even">
													<td class="sorting_1">#9876</td>
														<td>Chris</td>
														<td>High-Performance</td>
														<td>£62</td>
														<td>01/02/2024</td>
													</tr>
													<tr role="row" class="odd">
													<td class="sorting_1">#9876</td>
														<td>Charlie</td>
														<td>Car Fix Up</td>
														<td>£34</td>
														<td>01/28/2024</td>
													</tr>
													<tr role="row" class="even">
													<td class="sorting_1">#9876</td>
														<td>Oliver</td>
														<td>Autobahn Service Center</td>
														<td>£65</td>
														<td>03/08/2024</td>
													</tr>
													<tr role="row" class="even">
													<td class="sorting_1">#9876</td>
														<td>David</td>
														<td>Auto Craft</td>
														<td>£29</td>
														<td>03/20/2023</td>
													</tr>
													<tr role="row" class="odd">
													<td class="sorting_1">#9876</td>
														<td>William</td>
														<td>Auto Care East</td>
														<td>£54</td>
														<td>08/18/2023</td>
													</tr><tr role="row" class="even">
													<td class="sorting_1">#9876</td>
														<td>Amelia</td>
														<td>Auto Clinic</td>
														<td>£43</td>
														<td>03/10/2023</td>
													</tr><tr role="row" class="odd">
													<td class="sorting_1">#9876</td>
														<td>George</td>
														<td>The Car Garage</td>
														<td>£33</td>
														<td>10/28/2023</td>
													</tr><tr role="row" class="even">
													<td class="sorting_1">#9876</td>
														<td>Charls</td>
														<td>Fast Lane Mechanics.</td>
														<td>£35</td>
														<td>12/2/2023</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<th rowspan="1" colspan="1">Name</th>
														<th rowspan="1" colspan="1">Customer Name</th>
														<th rowspan="1" colspan="1">Garage</th>
														<th rowspan="1" colspan="1">Amount</th>
														<th rowspan="1" colspan="1">Payment date</th>
													</tr>
												</tfoot>
											</table>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12 col-md-5">
											<div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
										</div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
											<ul class="pagination"><li class="paginate_button page-item previous disabled" id="example2_previous">

												<a href="#" aria-controls="example2" data-dt-idx="0" tabindex="0" class="page-link">Prev</a>
											</li>
												<li class="paginate_button page-item active">
													<a href="#" aria-controls="example2" data-dt-idx="1" tabindex="0" class="page-link">1</a>
												</li>
												<li class="paginate_button page-item ">
													<a href="#" aria-controls="example2" data-dt-idx="2" tabindex="0" class="page-link">2</a>
												</li>
												<li class="paginate_button page-item ">
													<a href="#" aria-controls="example2" data-dt-idx="3" tabindex="0" class="page-link">3</a>
												</li>
												<li class="paginate_button page-item ">
													<a href="#" aria-controls="example2" data-dt-idx="4" tabindex="0" class="page-link">4</a>
												</li>
												<li class="paginate_button page-item ">
													<a href="#" aria-controls="example2" data-dt-idx="5" tabindex="0" class="page-link">5</a>
												</li>
												<li class="paginate_button page-item ">
													<a href="#" aria-controls="example2" data-dt-idx="6" tabindex="0" class="page-link">6</a>
												</li>
												<li class="paginate_button page-item next" id="example2_next">
													<a href="#" aria-controls="example2" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
												</li>
											</ul>
										</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	)
}
export default Payments;