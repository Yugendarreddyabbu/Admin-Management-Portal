import React from "react";

const Invoices = () => {
    return(
        <div class="wrapper">
<div class="page-content-wrapper">

<div class="page-content">

<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
  {/* <div class="breadcrumb-title pe-3">Pages</div> */}
  <div class="ps-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-0 align-items-center">
        <li class="breadcrumb-item"><a href="/"><ion-icon name="home-outline"></ion-icon></a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Invoice</li>
      </ol>
    </nav>
  </div>
  <div class="ms-auto">
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
  </div>
</div>
<div class="card radius-10">
  <div class="card-header py-3">
       <div class="row align-items-center g-3">
         <div class="col-12 col-lg-6">
           <h5 class="mb-0">Customer Invoice</h5>
         </div>
         <div class="col-12 col-lg-6 text-md-end">
           <a href="" class="btn btn-primary me-2"><ion-icon name="file-tray-full-sharp"></ion-icon>Export as PDF</a>
           <a href="" onclick="window.print()" class="btn btn-secondary"><ion-icon name="print-sharp"></ion-icon>Print</a>
         </div>
       </div>
  </div>
  <div class="card-header py-2">
   
    <div class="row row-cols-1 row-cols-lg-3">
      <div class="col">
       <div class="">
         <strong>To</strong>
         <address class="m-t-5 m-b-5">
            <strong class="text-inverse">James</strong><br/>
            123  Rodeo Drive, 213 Mark Street<br/>
            Great City, 111111<br/>
            Phone: (123) 456-7890<br/>
            Fax: (123) 456-7890
         </address>
        </div>
      </div>
     <div class="col">
       <div class="">
         <strong>Invoice / Jan period</strong>
         <div class=""><small>Jan 30,2024</small></div>
         <div class="invoice-detail">
            ##12345<br/>
           Car Service
         </div>
       </div>
     </div>
    </div>
  </div>
 <div class="card-body">
   <div class="table-responsive">
     <table class="table table-invoice">
        <thead>
           <tr>
              <th class="text-center">Car Model</th>
              <th class="text-center" >Transmission</th>
              <th class="text-center" >Engine Type</th>
              <th class="text-center" >Last Oil Change</th>
              <th class="text-center" >Mileage Reading</th>
              <th class="text-center" >Next Oil Change</th>
              <th class="text-center" >Under Chassis</th>
              <th class="text-center" >Hood</th>
           </tr>
        </thead>
        <tbody>
           <tr>
              <td class="text-center">BMW 316i </td>
              <td class="text-center">Automatic</td>
              <td class="text-center">Gas</td>
              <td class="text-centert">Jan 20 2024</td>
              <td class="text-center">99000</td>
              <td class="text-center">Jan 20 2025</td>
              <td class="text-center">Tile Rod Ends, Idler Arm</td>
              <td class="text-center">Belts, Spark plugs,Oil, ATF</td>
           </tr>
        </tbody>
     </table>
  </div><br/>
  <div class="row row-cols-1 row-cols-lg-3">
  <div class="table-responsive">
  <strong>Materials</strong>
     <table class="table table-invoice">
        <thead>
           <tr>
              <th class="text-center">Particulars</th>
              <th class="text-center" >Amount</th>
           </tr>
        </thead>
        <tbody>
           <tr>
              <td class="text-center">oil </td>
              <td class="text-center">£20</td>
           </tr>
           <tr>
              <td class="text-center">Syntheticoil </td>
              <td class="text-center">£200</td>
           </tr>
           <tr>
              <td class="text-center">Spark Plugs </td>
              <td class="text-center">£100</td>
           </tr>
        </tbody>
     </table>
  </div>
  <div class="table-responsive">
  <strong>Labor</strong>
     <table class="table table-invoice">
        <thead>
           <tr>
              <th class="text-center">Particulars</th>
              <th class="text-center" >Amount</th>
           </tr>
        </thead>
        <tbody>
           <tr>
              <td class="text-center">Change Oil </td>
              <td class="text-center">£50</td>
           </tr>
           <tr>
              <td class="text-center">Belt replacements </td>
              <td class="text-center">£00</td>
           </tr>
        </tbody>
     </table>
  </div>
  </div>


  <div class="row bg-light align-items-center m-0">
    <div class="col col-auto p-4">
       <p class="mb-0">Total Labor Cost</p>
       <h4 class="mb-0">£150</h4>
    </div>
    <div class="col col-auto p-4">
       <i class="bi bi-plus-lg text-muted"></i>
    </div>
    <div class="col col-auto me-auto p-4">
       <p class="mb-0">Total Material Cost</p>
       <h4 class="mb-0">£320</h4>
    </div>
    <div class="col bg-primary col-auto p-4">
     <p class="mb-0 text-white">TOTAL</p>
     <h4 class="mb-0 text-white">£470</h4>
    </div>
  </div>

  <hr/>
<div class="my-3">
 * Make all cheques payable to Car Services<br/>
 * Payment is due within 30 days<br/>
 * If you have any questions concerning this invoice, contact revampgarage@gmail.com
</div>
 </div>

 <div class="card-footer py-3 bg-transparent">
     <p class="text-center mb-2">
        THANK YOU FOR YOUR BUSINESS
     </p>
     <p class="text-center d-flex align-items-center gap-3 justify-content-center mb-0">
        <span class=""><i class="bi bi-globe"></i> www.carservices.com</span>
        <span class=""><i class="bi bi-telephone-fill"></i> T:+11-0462879</span>
        <span class=""><i class="bi bi-envelope-fill"></i> carservices@gmail.com</span>
     </p>
 </div>
</div>
<div class="card radius-10">
  <div class="card-header py-3">
       <div class="row align-items-center g-3">
         <div class="col-12 col-lg-6">
           <h5 class="mb-0">Garage Invoice</h5>
         </div>
         <div class="col-12 col-lg-6 text-md-end">
           <a href="" class="btn btn-primary me-2"><ion-icon name="file-tray-full-sharp"></ion-icon>Export as PDF</a>
           <a href="" onclick="window.print()" class="btn btn-secondary"><ion-icon name="print-sharp"></ion-icon>Print</a>
         </div>
       </div>
  </div>
  <div class="card-header py-2">
   
    <div class="row row-cols-1 row-cols-lg-3">
      <div class="col">
       <div class="">
         <strong>To</strong>
         <address class="m-t-5 m-b-5">
            <strong class="text-inverse">Revamp Garage</strong><br/>
            ABERDEEN, AB10 6DN.<br/>
            73 HOLBURN STREET. 01224 <br/>
            Phone: (123) 456-7890<br/>
            Fax: (123) 456-7890
         </address>
        </div>
      </div>
     <div class="col">
       <div class="">
         <strong>Invoice / Jan period</strong>
         <div class=""><small>Jan 30,2024</small></div>
         <div class="invoice-detail">
            ##12345<br/>
           Car Service
         </div>
       </div>
     </div>
    </div>
  </div>
 <div class="card-body">
   <div class="table-responsive">
     <table class="table table-invoice">
        <thead>
           <tr>
              <th class="text-center">Car Model</th>
              <th class="text-center" >Transmission</th>
              <th class="text-center" >Engine Type</th>
              <th class="text-center" >Last Oil Change</th>
              <th class="text-center" >Mileage Reading</th>
              <th class="text-center" >Next Oil Change</th>
              <th class="text-center" >Under Chassis</th>
              <th class="text-center" >Hood</th>
              <th class="text-center" >Breaks Bearing and Shocks</th>
           </tr>
        </thead>
        <tbody>
           <tr>
              <td class="text-center">BMW 316i </td>
              <td class="text-center">Automatic</td>
              <td class="text-center">Gas</td>
              <td class="text-centert">Jan 20 2024</td>
              <td class="text-center">99000</td>
              <td class="text-center">Jan 20 2025</td>
              <td class="text-center">Tile Rod Ends, Idler Arm</td>
              <td class="text-center">Belts, Spark plugs,Oil, ATF</td>
              <td class="text-center">Wheel Cylinder</td>
           </tr>
        </tbody>
     </table>
  </div>

  <div class="row bg-light align-items-center m-0">
    <div class="col col-auto p-4">
       <p class="mb-0">SUBTOTAL</p>
       <h4 class="mb-0">£3,000</h4>
    </div>
    <div class="col col-auto p-4">
       <i class="bi bi-plus-lg text-muted"></i>
    </div>
    <div class="col col-auto me-auto p-4">
       {/* <p class="mb-0">PAYPAL FEE (5.4%)</p>
       <h4 class="mb-0">£108.00</h4> */}
    </div>
    <div class="col bg-primary col-auto p-4">
     <p class="mb-0 text-white">TOTAL</p>
     <h4 class="mb-0 text-white">£3000</h4>
    </div>
  </div>

  <hr/>
<div class="my-3">
 * Make all cheques payable to Car Services<br/>
 * Payment is due within 30 days<br/>
 * If you have any questions concerning this invoice, contact revampgarage@gmail.com
</div>
 </div>

 <div class="card-footer py-3 bg-transparent">
     <p class="text-center mb-2">
        THANK YOU FOR YOUR BUSINESS
     </p>
     <p class="text-center d-flex align-items-center gap-3 justify-content-center mb-0">
        <span class=""><i class="bi bi-globe"></i> www.revampgarages.com</span>
        <span class=""><i class="bi bi-telephone-fill"></i> T:+11-2345678</span>
        <span class=""><i class="bi bi-envelope-fill"></i> revampgarage@gmail.com</span>
     </p>
 </div>
</div>


   

</div>
</div>
</div>
)
}
export default Invoices;