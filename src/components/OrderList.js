import React, { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";

function OrderList() {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("LoginDetails"));
  const adminId = admin.adminId;
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [orderHistory, setorderHistory] = useState([]);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        `https://apimlm.bloomitsolutions.in/ecomroutes/getOrdersForVendor?vendorId=${adminId}`
      );
      if (response.status === 200) {
        setorderHistory(response.data.orders);
        localStorage.setItem("orderlen", JSON.stringify(response.data.length));
      }
    } catch (error) {
      console.log("error", `${error.response.data.error}`);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminId]);

  //pagination start
  const PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(orderHistory.length / PER_PAGE);

  const trackingor = (id) => {
    navigate(`/Tracking/${id}`);
  };

  return (
    <div className="container-fluid contmar">
      
        <div className="row ">
        <div className="col-lg-1 text-end">
            <Link to="/">
              <h6>
                <i className="fa fa-home" aria-hidden="true"></i> Home
              </h6>
            </Link>
          </div>
          /
          <div className="col-lg-5">
            <h6>Order Details</h6>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 mt-3 mb-3">
              <div className="card" ref={componentRef}>
                <div className="card-header bg bg-success text-white border-0">
                  <h4>Order Details</h4>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">user Id </th>
                          <th scope="col">product_name</th>
                          <th scope="col">paymentType</th>
                          <th scope="col">paymentStatus</th>
                          <th scope="col">orderStatus</th>
                          <th scope="col">Date / Time</th>
                          <th scope="col">totalAmount</th>
                          <th scope="col">Address</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderHistory
                          .slice(offset, offset + PER_PAGE)
                          .map((res, index) => {
                            if (res.orderStatus !== "Deleverd") {
                              return (
                                <tr>
                                  <td>{res.userId}</td>
                                  <td>{res.Product.product_name}</td>
                                  <td>{res.paymentType}</td>
                                  <td>{res.paymentStatus}</td>
                                  <td>{res.orderStatus}</td>
                                  <td>{res.updatedAt.split("T")[0]}</td>
                                  <td>{res.totalAmount}</td>
                                  <td>
                                    {res.shippingAddress.name},
                                    {res.shippingAddress.mobile}{" "}
                                    {res.shippingAddress.city},{" "}
                                    {res.shippingAddress.state},
                                    {res.shippingAddress.pin}
                                  </td>
                                  <td>
                                    {" "}
                                    <Button
                                      className="btn btn-success"
                                      onClick={() => trackingor(res.id)}
                                    >
                                      view Tracking
                                    </Button>
                                  </td>
                                </tr>
                              );
                            }
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /.card-body */}
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  breakLabel={"..."}
                  pageCount={pageCount}
                  marginPagesDisplayed={10}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination  justify-content-center"}
                  pageClassName={"page-item "}
                  pageLinkClassName={"page-link"}
                  previousClassName={"page-item"}
                  previousLinkClassName={"page-link"}
                  nextClassName={"page-item"}
                  nextLinkClassName={"page-link"}
                  breakClassName={"page-item"}
                  breakLinkClassName={"page-link"}
                  activeClassName={"active primary"}
                />
              </div>
              <div className=" mb-2 ">
                <Button
                  className="rounded-0 btn btn-success"
                  onClick={handlePrint}
                >
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default OrderList;
