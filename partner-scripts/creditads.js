// Create a div element for the widget
var widgetContainer = document.createElement('div');

// Add your widget HTML content
widgetContainer.innerHTML = `
    <div id="widget">
<main class="snipcss-18UkG">
  <section class="pt-10 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body p-5">
              <h2 class="fw-bold">LET'S GET STARTED</h2>
              <p class="lead">What are you looking for in a card?. </p>
              <p>Aenean auctor orci nec nunc tristique ornare. Integer bibendum nisl sed metus pharetra hendrerit. Suspendisse rhoncus facilisis enim, vel cursus felis euismod in.</p>
              <p class="mb-0"><a href="#!" class="btn-link fw-bold border-bottom border-2 border-primary fs-5 ms-2" onclick="openModal()">Advertiser Disclosure</a></p>
            <div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal()">&times;</span>
    <h2>Advertiser Disclosure</h2>
    <p>Paygeon.com is an independent, advertising-supported comparison service. The offers that appear on this site are from companies from which Paygeon.com receives compensation. This compensation may impact how and where products appear on this site, including, for example, the order in which they may appear within listing categories. Other factors, such as our own proprietary website rules and the likelihood of applicants' credit approval also impact how and where products appear on this site. Paygeon.com does not include the entire universe of available financial or credit offers.</p>
    <p>Paygeon has partnerships with issuers including, but not limited to, American Express, Bank of America, Capital One, Chase, Citi, and Discover.</p>
    <h3>How we make money</h3>
    <p>Paygeon.com is an independent, advertising-supported publisher and comparison service. Paygeon is compensated in exchange for featured placement of sponsored products and services, or your clicking on links posted on this website. This compensation may impact how, where, and in what order products appear. Paygeon.com does not include all companies or all available products.</p>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pb-10">
    <div class="container">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="table-responsive card">
            <table class="table table-success table-striped mb-0 text-nowrap text-lg-wrap" id="cardCollapse">
              <thead class="table-light">
                <tr>
                  <th scope="col">Card</th>
                  <th scope="col">Name</th>
                  <th scope="col">Annual Fee</th>
                  <th scope="col">Cashback</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td>
                    <div>
                      <div class="cred">
                        <div class="cred-inner">
                          <div class="cred-front">
                            <img src="https://images.ctfassets.net/ns4x1kunro08/2SmRxp59ZjtIqKVKUtX8iB/b556b2248c41189e71f51b4261aeb9be/NewAffinitiCardArt.png" width="230">
                          </div>
                          <div class="cred-back">
                            <img src="https://vashong.github.io/widgets/images/CARD%20FRAME%20back%20side%20(2).svg" width="250px">

                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                  <td class="w-lg-30 align-middle">
                    <h4>Affiniti Business Mastercard®</h4>
                    <p class="mb-0 text-warning fs-5">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </p>
                  </td>
                  <td class="align-middle">$0</td>
                  <td class="align-middle">2.5%</td>
                  <td class="align-middle"> <a href="#!" class="btn btn-secondary btn-sm">Apply Now</a>
                    <div class="mt-3"><a class="btn-link border-bottom border-primary border-2 fw-bold fs-5" data-bs-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne"> Expand Details </a></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="5" class="p-0 ">
                    <div class="collapse  p-5 border" id="collapseOne" aria-labelledby="collapseOne" data-bs-parent="#cardCollapse">
                      <div class="row g-3">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">Card Information</h4>
                              <ul class="list-unstyled fs-5 mb-0  ">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$150 bonus when you spend $10,000 in 3 months</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$500 bonus when you spend $30,000 in 3 months†</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>2.5% back on regular purchases</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What We Like</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No hard personal credit check</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Dedicated Vendor Negotiation Specialist</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No cost unlimited employee cards</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No annual fee</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What to Consider</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Regular APR: Prime Rate + 10.99% to Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Statement Mailing Fee: $20.00</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Penalty APR: Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Weekly autopay required for 2.5%, else 1.5%</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="mt-4">
                            <h4>Related Information</h4>
                            <p class="fs-5 mb-0">View full <a href="https://affiniti.finance/cardholder-agreement/affiniti/">Terms & Conditions</a> for Affiniti Business Mastercard®</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div class="cred">
                        <div class="cred-inner">
                          <div class="cred-front">
                            <img src="https://vashong.github.io/widgets/images/ACCA_Card_Design.png" width="230">
                          </div>
                          <div class="cred-back">
                            <img src="https://vashong.github.io/widgets/images/CARD%20FRAME%20back%20side%20(2).svg" width="250px">

                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                  <td class="w-lg-30 align-middle">
                    <h4>ACCA Business Mastercard®</h4>
                    <p class="mb-0 text-warning fs-5">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </p>
                  </td>
                  <td class="align-middle">$0</td>
                  <td class="align-middle">2.5%</td>
                  <td class="align-middle"> <a href="#!" class="btn btn-secondary btn-sm">Apply Now</a>
                    <div class="mt-3"><a class="btn-link border-bottom border-primary border-2 fw-bold fs-5" data-bs-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Expand Details </a></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="5" class="p-0 ">
                    <div class="collapse  p-5 border" id="collapseTwo" aria-labelledby="collapseTwo" data-bs-parent="#cardCollapse">
                      <div class="row g-3">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">Card Information</h4>
                              <ul class="list-unstyled fs-5 mb-0  ">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$150 bonus when you spend $10,000 in 3 months</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$500 bonus when you spend $30,000 in 3 months†</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>2.5% back on regular purchases</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What We Like</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No hard personal credit check</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Dedicated Vendor Negotiation Specialist</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No cost unlimited employee cards</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No annual fee</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What to Consider</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Regular APR: Prime Rate + 10.99% to Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Statement Mailing Fee: $20.00</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Penalty APR: Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Weekly autopay required for 2.5%, else 1.5%</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="mt-4">
                            <h4>Related Information</h4>
                            <p class="fs-5 mb-0">View full <a href="https://affiniti.finance/cardholder-agreement/acca/">Terms & Conditions</a> for ACCA Business Mastercard®</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div class="cred">
                        <div class="cred-inner">
                          <div class="cred-front">
                            <img src="https://vashong.github.io/widgets/images/APMA_Card_Design__1__12.png" width="230">
                          </div>
                          <div class="cred-back">
                            <img src="https://vashong.github.io/widgets/images/CARD%20FRAME%20back%20side%20(2).svg" width="250px">

                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                  <td class="w-lg-30 align-middle">
                    <h4>APMA Business Mastercard® </h4>
                    <p class="mb-0 text-warning fs-5">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </p>
                  </td>
                  <td class="align-middle">$0</td>
                  <td class="align-middle">5%</td>
                  <td class="align-middle"> <a href="#!" class="btn btn-secondary btn-sm ">Apply Now</a>
                    <div class="mt-3"><a class="btn-link border-bottom border-primary border-2 fw-bold fs-5" data-bs-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Expand Details </a></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="5" class="p-0">
                    <div class="collapse  p-5 border" id="collapseThree" aria-labelledby="collapseThree" data-bs-parent="#cardCollapse">
                      <div class="row g-3">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">Card Information</h4>
                              <ul class="list-unstyled fs-5 mb-0  ">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$150 bonus when you spend $10,000 in 3 months</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$500 bonus when you spend $30,000 in 3 months†</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>2.5% back on regular purchases</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What We Like</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No hard personal credit check</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Dedicated Vendor Negotiation Specialist</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No cost unlimited employee cards</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No annual fee</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What to Consider</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Regular APR: Prime Rate + 10.99% to Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Statement Mailing Fee: $20.00</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Penalty APR: Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Weekly autopay required for 2.5%, else 1.5%</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="mt-4">
                            <h4>Related Information</h4>
                            <p class="fs-5 mb-0">View full <a href="https://affiniti.finance/cardholder-agreement/apma/">Terms & Conditions</a> for APMA Business Mastercard®</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <div class="cred">
                        <div class="cred-inner">
                          <div class="cred-front">
                            <img src="https://vashong.github.io/widgets/images/AC_Mastercard.png" width="230">
                          </div>
                          <div class="cred-back">
                            <img src="https://vashong.github.io/widgets/images/CARD%20FRAME%20back%20side%20(2).svg" width="250px">

                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                  <td class="w-lg-30 align-middle">
                    <h4>The Aesthetics Business Mastercard® </h4>
                    <p class="mb-0 text-warning fs-5">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </p>
                  </td>
                  <td class="align-middle">$0</td>
                  <td class="align-middle">5%</td>
                  <td class="align-middle"> <a href="#!" class="btn btn-secondary btn-sm ">Apply Now</a>
                    <div class="mt-3"><a class="btn-link border-bottom border-primary border-2 fw-bold fs-5" data-bs-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Expand Details </a></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="5" class="p-0">
                    <div class="collapse  p-5 border" id="collapseFour" aria-labelledby="collapseFour" data-bs-parent="#cardCollapse">
                      <div class="row g-3">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">Card Information</h4>
                              <ul class="list-unstyled fs-5 mb-0  ">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$150 bonus when you spend $10,000 in 3 months</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$500 bonus when you spend $30,000 in 3 months†</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>2.5% back on regular purchases</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What We Like</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No hard personal credit check</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Dedicated Vendor Negotiation Specialist</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No cost unlimited employee cards</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No annual fee</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What to Consider</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Regular APR: Prime Rate + 10.99% to Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Statement Mailing Fee: $20.00</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Penalty APR: Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Weekly autopay required for 2.5%, else 1.5%</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="mt-4">
                            <h4>Related Information</h4>
                            <p class="fs-5 mb-0">View full <a href="https://affiniti.finance/cardholder-agreement/aesthetics/">Terms & Conditions</a> for Aesthetics Business Mastercard®</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </td>
                </tr>
                <tr>
                  <td class="border-bottom-0">
                    <div>
                      <div class="cred">
                        <div class="cred-inner">
                          <div class="cred-front">
                            <img src="https://vashong.github.io/widgets/images/MAG_Mastercard_Design__1_.png" width="230">
                          </div>
                          <div class="cred-back">
                            <img src="https://vashong.github.io/widgets/images/CARD%20FRAME%20back%20side%20(2).svg" width="250px">

                          </div>
                        </div>
                      </div>

                    </div>
                  </td>
                  <td class="w-lg-30 align-middle border-bottom-0">
                    <h4>MAG Business Mastercard® </h4>
                    <p class="mb-0 text-warning fs-5">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </p>
                  </td>
                  <td class="align-middle border-bottom-0">$0</td>
                  <td class="align-middle border-bottom-0">5%</td>
                  <td class="align-middle border-bottom-0"> <a href="#!" class="btn btn-secondary btn-sm ">Apply Now</a>
                    <div class="mt-3"><a class="btn-link border-bottom border-primary border-2 fw-bold fs-5" data-bs-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive"> Expand Details </a></div>
                  </td>
                </tr>
                <tr>
                  <td colspan="5" class="p-0 border-bottom-0 ">
                    <div class="collapse  p-5 border" id="collapseFive" aria-labelledby="collapseFive" data-bs-parent="#cardCollapse">
                      <div class="row g-3">
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">Card Information</h4>
                              <ul class="list-unstyled fs-5 mb-0  ">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$150 bonus when you spend $10,000 in 3 months</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>$500 bonus when you spend $30,000 in 3 months†</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>2.5% back on regular purchases</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What We Like</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No hard personal credit check</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Dedicated Vendor Negotiation Specialist</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No cost unlimited employee cards</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>No annual fee</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div class="card ">
                            <div class="card-body">
                              <h4 class="mb-3">What to Consider</h4>
                              <ul class="list-unstyled fs-5 mb-0">
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Regular APR: Prime Rate + 10.99% to Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Statement Mailing Fee: $20.00</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Penalty APR: Prime Rate + 25.99%</li>
                                <li class="d-flex align-items-start mb-2"><i class="bi bi-check-circle-fill me-2 text-primary"></i>Weekly autopay required for 2.5%, else 1.5%</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-12">
                          <div class="mt-4">
                            <h4>Related Information</h4>
                            <p class="fs-5 mb-0">View full <a href="https://affiniti.finance/cardholder-agreement/mag/">Terms & Conditions</a> for MAG Business Mastercard®</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
    </div>
`;

// Add your widget CSS styles
var widgetStyles = `
@import url('https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900&display=swap'); 
@font-face { 
  font-display:block;
  font-family:bootstrap-icons;
  src:url("https://easetemplate.com/borrow/assets/libs/bootstrap-icons/font/fonts/bootstrap-icons.woff2?dd67030699838ea613ee6dbda90effa6") format("woff2"),url("https://easetemplate.com/borrow/assets/libs/bootstrap-icons/font/fonts/bootstrap-icons.woff?dd67030699838ea613ee6dbda90effa6") format("woff");
} 
  body {  
    color:var(--bs-body-color);
    font-family:var(--bs-body-font-family);
    font-size:var(--bs-body-font-size);
    font-weight:var(--bs-body-font-weight);
    line-height:var(--bs-body-line-height);
    text-align:var(--bs-body-text-align);
    letter-spacing:-.25px;
  }  
body { 
/* CSS Variables that may have been missed get put on body */ 
    --bs-gutter-x:  32px;  
    --bs-gutter-y:  0;  
    --bs-gutter-x:  32px;  
    --bs-gutter-y:  0;  
    --bs-card-spacer-y:  1.5rem;  
    --bs-card-spacer-x:  1.5rem;  
    --bs-card-border-width:  var(--bs-border-width);  
    --bs-card-border-color:  #e9ecef;  
    --bs-card-border-radius:  0.5rem;  
    --bs-card-inner-border-radius:  calc(0.5rem - var(--bs-border-width));  
    --bs-card-bg:  #fff;  
    --bs-table-color-type:  initial;  
    --bs-table-bg-type:  initial;  
    --bs-table-color-state:  initial;  
    --bs-table-bg-state:  initial;  
    --bs-table-color:  var(--bs-emphasis-color);  
    --bs-table-bg:  var(--bs-body-bg);  
    --bs-table-border-color:  var(--bs-border-color);  
    --bs-table-accent-bg:  transparent;  
    --bs-table-striped-color:  var(--bs-emphasis-color);  
    --bs-table-striped-bg:  #f8f9fa;  
    --bs-table-active-color:  var(--bs-emphasis-color);  
    --bs-table-hover-color:  var(--bs-emphasis-color);  
    --bs-border-opacity:  1;  
    --bs-btn-font-weight:  400;  
    --bs-btn-color:  var(--bs-link-color);  
    --bs-btn-bg:  transparent;  
    --bs-btn-border-color:  transparent;  
    --bs-btn-hover-color:  var(--bs-link-hover-color);  
    --bs-btn-hover-border-color:  transparent;  
    --bs-btn-active-color:  var(--bs-link-hover-color);  
    --bs-btn-focus-shadow-rgb:  122,102,255;  
    --bs-link-color-rgb:  var(--bs-link-hover-color-rgb); 
    --bs-table-color-type:  var(--bs-table-striped-color);  
    --bs-table-bg-type:  var(--bs-table-striped-bg); 
    --bs-text-opacity:  1;  
    --bs-btn-padding-x:  1.25rem;  
    --bs-btn-padding-y:  0.75rem;  
    --bs-btn-font-size:  0.875rem;  
    --bs-btn-font-weight:  600;  
    --bs-btn-line-height:  1.6;  
    --bs-btn-color:  var(--bs-body-color);  
    --bs-btn-bg:  transparent;  
    --bs-btn-border-width:  var(--bs-border-width);  
    --bs-btn-border-color:  transparent;  
    --bs-btn-border-radius:  0.25rem;  
    --bs-btn-hover-border-color:  transparent;  
    --bs-btn-focus-box-shadow:  0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb),.5);  
    --bs-btn-color:  #fff;  
    --bs-btn-bg:  #6c757d;  
    --bs-btn-border-color:  #6c757d;  
    --bs-btn-hover-color:  #fff;  
    --bs-btn-hover-bg:  #5c636a;  
    --bs-btn-hover-border-color:  #565e64;  
    --bs-btn-focus-shadow-rgb:  130,138,145;  
    --bs-btn-padding-y:  0.5rem;  
    --bs-btn-padding-x:  0.875rem;  
    --bs-btn-font-size:  0.875rem;  
    --bs-btn-border-radius:  var(--bs-border-radius-sm); 
    --bs-gutter-x:  1rem; 
    --bs-gutter-y:  1rem; 
    --bs-text-opacity:  1;  
} 

* { 
    box-sizing: border-box;
} 

body { 
    background-color: var(--bs-body-bg); 
    color: var(--bs-body-color); 
    font-family: var(--bs-body-font-family); 
    font-size: var(--bs-body-font-size); 
    font-weight: var(--bs-body-font-weight); 
    line-height: var(--bs-body-line-height); 
    margin: 0; 
    text-align: var(--bs-body-text-align); 
    -webkit-text-size-adjust: 100%; 
    -webkit-tap-highlight-color: rgba(0,0,0,0);
} 

body { 
    -webkit-font-smoothing: antialiased; 
    letter-spacing: -.25px;
} 

:root { 
    --bs-primary-rgb: 98,75,255; 
    --bs-warning-rgb: 255,193,7; 
    --bs-body-font-family: "Inter","sans-serif"; 
    --bs-body-font-size: 1rem; 
    --bs-body-font-weight: 400; 
    --bs-body-line-height: 1.6; 
    --bs-body-color: #6c757d; 
    --bs-body-bg: #f8f9fa; 
    --bs-emphasis-color: #000; 
    --bs-heading-color: #151e28; 
    --bs-link-color: #624bff; 
    --bs-link-color-rgb: 98,75,255; 
    --bs-link-hover-color: #4e3ccc; 
    --bs-link-hover-color-rgb: 78,60,204; 
    --bs-border-width: 1px; 
    --bs-border-style: solid; 
    --bs-border-color: #e9ecef; 
    --bs-border-radius-sm: 0.2rem; 
    --bs-border-radius-xxl: 2rem; 
    --bs-border-radius-2xl: var(--bs-border-radius-xxl); 
} 

@media (prefers-reduced-motion: no-preference){ 
  :root { 
    scroll-behavior: smooth;
  } 
}     

*,:after,:before { 
    box-sizing: border-box;
} 

.pt-10 { 
    padding-top: 4.5rem!important;
} 

.pb-5 { 
    padding-bottom: 2rem!important;
} 

.pb-10 { 
    padding-bottom: 4.5rem!important;
} 

/* Modal styles */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}


.container { 
    --bs-gutter-x: 32px; 
    --bs-gutter-y: 0; 
    margin-left: auto; 
    margin-right: auto; 
    padding-left: calc(var(--bs-gutter-x)*.5); 
    padding-right: calc(var(--bs-gutter-x)*.5); 
    width: 100%;
} 

@media (min-width: 576px){ 
  .container { 
    max-width: 540px;
  } 
}     

@media (min-width: 768px){ 
  .container { 
    max-width: 720px;
  } 
}     

@media (min-width: 992px){ 
  .container { 
    max-width: 960px;
  } 
}     

@media (min-width: 1200px){ 
  .container { 
    max-width: 1140px;
  } 
}     

.row { 
    --bs-gutter-x: 32px; 
    --bs-gutter-y: 0; 
    display: flex; 
    flex-wrap: wrap; 
    margin-left: calc(var(--bs-gutter-x)*-.5); 
    margin-right: calc(var(--bs-gutter-x)*-.5); 
    margin-top: calc(var(--bs-gutter-y)*-1);
} 

.row > *  { 
    flex-shrink: 0; 
    margin-top: var(--bs-gutter-y); 
    max-width: 100%; 
    padding-left: calc(var(--bs-gutter-x)*.5); 
    padding-right: calc(var(--bs-gutter-x)*.5); 
    width: 100%;
} 

.col-12 { 
    flex: 0 0 auto; 
    width: 100%;
} 

@media (min-width: 576px){ 
  .col-sm-12 { 
    flex: 0 0 auto; 
    width: 100%;
  } 
}     

@media (min-width: 768px){ 
  .col-md-12 { 
    flex: 0 0 auto; 
    width: 100%;
  } 
}     

@media (min-width: 992px){ 
  .col-lg-12 { 
    flex: 0 0 auto; 
    width: 100%;
  } 
}     

@media (min-width: 1200px){ 
  .col-xl-12 { 
    flex: 0 0 auto; 
    width: 100%;
  } 
}     

.card { 
    --bs-card-spacer-y: 1.5rem; 
    --bs-card-spacer-x: 1.5rem; 
    --bs-card-border-width: var(--bs-border-width); 
    --bs-card-border-color: #e9ecef; 
    --bs-card-border-radius: 0.5rem; 
    --bs-card-inner-border-radius: calc(0.5rem - var(--bs-border-width)); 
    --bs-card-bg: #fff; 
    color: var(--bs-body-color); 
    display: flex; 
    flex-direction: column; 
    height: var(--bs-card-height); 
    min-width: 0; 
    position: relative; 
    word-wrap: break-word; 
    background-clip: border-box; 
    background-color: var(--bs-card-bg); 
    border: var(--bs-card-border-width) solid var(--bs-card-border-color); 
    border-radius: var(--bs-card-border-radius);
} 

.table-responsive { 
    overflow-x: auto; 
    -webkit-overflow-scrolling: touch;
} 

.card-body { 
    color: var(--bs-card-color); 
    flex: 1 1 auto; 
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
} 

.p-5 { 
    padding: 2rem!important;
} 

table { 
    border-collapse: collapse; 
    caption-side: bottom;
} 

.table { 
    --bs-table-color-type: initial; 
    --bs-table-bg-type: initial; 
    --bs-table-color-state: initial; 
    --bs-table-bg-state: initial; 
    --bs-table-color: var(--bs-emphasis-color); 
    --bs-table-bg: var(--bs-body-bg); 
    --bs-table-border-color: var(--bs-border-color); 
    --bs-table-accent-bg: transparent; 
    --bs-table-striped-color: var(--bs-emphasis-color); 
    --bs-table-striped-bg: #f8f9fa; 
    --bs-table-active-color: var(--bs-emphasis-color); 
    --bs-table-hover-color: var(--bs-emphasis-color); 
    border-color: var(--bs-table-border-color); 
    margin-bottom: 1rem; 
    vertical-align: top; 
    width: 100%;
} 

.mb-0 { 
    margin-bottom: 0!important;
} 

.text-nowrap { 
    white-space: nowrap!important;
} 

@media (min-width: 992px){ 
  .text-lg-wrap { 
    white-space: normal!important;
  } 
}     

h2 { 
    color: var(--bs-heading-color); 
    font-family: Inter,"sans-serif"; 
    font-weight: 500; 
    line-height: 1.4; 
    margin-bottom: .5rem; 
    margin-top: 0;
} 

h2 { 
    font-size: calc(1.275rem + .3vw);
} 

@media (min-width: 1200px){ 
  h2 { 
    font-size: 1.5rem;
  } 
}     

h2 { 
    font-weight: 700; 
    letter-spacing: -.5px;
} 

.fw-bold { 
    font-weight: 700!important;
} 

p { 
    margin-bottom: 1rem; 
    margin-top: 0;
} 

.lead { 
    font-size: 1.25rem; 
    font-weight: 400;
} 

thead { 
    border: 0 solid; 
    border-color: inherit;
} 

.table > thead  { 
    vertical-align: bottom;
} 

tbody { 
    border: 0 solid; 
    border-color: inherit;
} 

.table > tbody  { 
    vertical-align: inherit;
} 

a { 
    color: rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));
} 

a { 
    text-decoration: none;
} 

.border-primary { 
    --bs-border-opacity: 1; 
    border-color: rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important;
} 

.btn-link { 
    --bs-btn-font-weight: 400; 
    --bs-btn-color: var(--bs-link-color); 
    --bs-btn-bg: transparent; 
    --bs-btn-border-color: transparent; 
    --bs-btn-hover-color: var(--bs-link-hover-color); 
    --bs-btn-hover-border-color: transparent; 
    --bs-btn-active-color: var(--bs-link-hover-color); 
    --bs-btn-focus-shadow-rgb: 122,102,255; 
    text-decoration: none;
} 

.border-bottom { 
    border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important;
} 

.border-primary { 
    border-color: #624bff!important;
} 

.border-2 { 
    border-width: 2px!important;
} 

.ms-2 { 
    margin-left: .5rem!important;
} 

.fs-5 { 
    font-size: .875rem!important;
} 

a,a:hover { 
    text-decoration: none;
} 

a:hover { 
    --bs-link-color-rgb: var(--bs-link-hover-color-rgb);
} 

.btn-link:hover { 
    text-decoration: none;
} 

.btn-link:hover { 
    color: var(--bs-btn-hover-color);
} 

tr { 
    border: 0 solid; 
    border-color: inherit;
} 

th { 
    font-weight: 600; 
    text-align: inherit; 
    text-align: -webkit-match-parent;
} 

th { 
    border: 0 solid; 
    border-color: inherit;
} 

.table > :not(caption) > * > *  { 
    background-color: var(--bs-table-bg); 
    border-bottom-width: var(--bs-border-width); 
    box-shadow: inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,var(--bs-table-accent-bg))); 
    color: var(--bs-table-color-state,var(--bs-table-color-type,var(--bs-table-color))); 
    padding: .5rem;
} 

.table-light th  { 
    color: #495057;
} 

td { 
    border: 0 solid; 
    border-color: inherit;
} 

.table-striped > tbody > tr:nth-of-type(2n + 1) > *  { 
    --bs-table-color-type: var(--bs-table-striped-color); 
    --bs-table-bg-type: var(--bs-table-striped-bg);
} 

.align-middle { 
    vertical-align: middle!important;
} 

@media (min-width: 992px){ 
  .w-lg-30 { 
    width: 30%!important;
  } 
}     

.p-0 { 
    padding: 0!important;
} 

.border-bottom-0 { 
    border-bottom: 0!important;
} 

h4 { 
    color: var(--bs-heading-color); 
    font-family: Inter,"sans-serif"; 
    font-weight: 500; 
    line-height: 1.4; 
    margin-bottom: .5rem; 
    margin-top: 0;
} 

h4 { 
    font-size: 1rem;
} 

.text-warning { 
    --bs-text-opacity: 1; 
    color: rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important;
} 

.btn { 
    --bs-btn-padding-x: 1.25rem; 
    --bs-btn-padding-y: 0.75rem; 
    --bs-btn-font-size: 0.875rem; 
    --bs-btn-font-weight: 600; 
    --bs-btn-line-height: 1.6; 
    --bs-btn-color: var(--bs-body-color); 
    --bs-btn-bg: transparent; 
    --bs-btn-border-width: var(--bs-border-width); 
    --bs-btn-border-color: transparent; 
    --bs-btn-border-radius: 0.25rem; 
    --bs-btn-hover-border-color: transparent; 
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb),.5); 
    background-color: var(--bs-btn-bg); 
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color); 
    border-radius: var(--bs-btn-border-radius); 
    color: var(--bs-btn-color); 
    cursor: pointer; 
    display: inline-block; 
    font-family: var(--bs-btn-font-family); 
    font-size: var(--bs-btn-font-size); 
    font-weight: var(--bs-btn-font-weight); 
    line-height: var(--bs-btn-line-height); 
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x); 
    text-align: center; 
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out; 
    -webkit-user-select: none; 
    -moz-user-select: none; 
    user-select: none; 
    vertical-align: middle;
} 

.btn-secondary { 
    --bs-btn-color: #fff; 
    --bs-btn-bg: #6c757d; 
    --bs-btn-border-color: #6c757d; 
    --bs-btn-hover-color: #fff; 
    --bs-btn-hover-bg: #5c636a; 
    --bs-btn-hover-border-color: #565e64; 
    --bs-btn-focus-shadow-rgb: 130,138,145; 
} 

.btn-sm { 
    --bs-btn-padding-y: 0.5rem; 
    --bs-btn-padding-x: 0.875rem; 
    --bs-btn-font-size: 0.875rem; 
    --bs-btn-border-radius: var(--bs-border-radius-sm);
} 

.btn:hover { 
    background-color: var(--bs-btn-hover-bg); 
    border-color: var(--bs-btn-hover-border-color); 
    color: var(--bs-btn-hover-color);
} 

.mt-3 { 
    margin-top: 1rem!important;
} 

.border { 
    border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important;
} 

.collapse:not(.show) { 
    display: none;
} 

img { 
    vertical-align: middle;
} 

.bi:before, [class*=" bi-"]::before,[class^="bi-"]:before { 
    display: inline-block; 
    font-family: bootstrap-icons!important; 
    font-style: normal; 
    font-weight: 400!important; 
    font-variant: normal; 
    text-transform: none; 
    line-height: 1; 
    vertical-align: -.125em; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
} 

.bi-star-fill:before { 
    content: "\f586";
} 

.bi::before, [class*=" bi-"]::before, [class^="bi-"]::before { 
    display: inline-block; 
    font-family: bootstrap-icons!important; 
    font-style: normal; 
    font-weight: 400!important; 
    font-variant: normal; 
    text-transform: none; 
    line-height: 1; 
    vertical-align: -.125em; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
} 

.g-3 { 
    --bs-gutter-x: 1rem;
} 

.g-3 { 
    --bs-gutter-y: 1rem;
} 

@media (min-width: 768px){ 
  .col-md-6 { 
    flex: 0 0 auto; 
    width: 50%;
  } 
}     

@media (min-width: 992px){ 
  .col-lg-4 { 
    flex: 0 0 auto; 
    width: 33.33333333%;
  } 
}     

@media (min-width: 1200px){ 
  .col-xl-4 { 
    flex: 0 0 auto; 
    width: 33.33333333%;
  } 
}     

.mt-4 { 
    margin-top: 1.5rem!important;
} 

.mb-3 { 
    margin-bottom: 1rem!important;
} 

ul { 
    padding-left: 2rem;
} 

ul { 
    margin-bottom: 1rem; 
    margin-top: 0;
} 

.list-unstyled { 
    list-style: none; 
    padding-left: 0;
} 

.d-flex { 
    display: flex!important;
} 

.align-items-start { 
    align-items: flex-start!important;
} 

.mb-2 { 
    margin-bottom: .5rem!important;
} 

.me-2 { 
    margin-right: .5rem!important;
} 

.text-primary { 
    --bs-text-opacity: 1; 
    color: rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important;
} 

.bi-check-circle-fill:before { 
    content: "\f26a";
} 


.cred{
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.cred-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.cred:hover .cred-inner {
  transform: rotateY(180deg);
}

.cred-front,
.cred-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.cred-front {
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(0deg);
}

.cred-back {
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}

`;

// Append the widget styles to the head
var styleElement = document.createElement('style');
styleElement.textContent = widgetStyles;
document.head.appendChild(styleElement);

// Append the widget to the body
document.body.appendChild(widgetContainer);


// Open the modal
function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
