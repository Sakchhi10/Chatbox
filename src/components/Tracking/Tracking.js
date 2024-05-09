import React, { useState, useEffect } from "react";
import { Container, ProgressBar, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import "./OrderTracking.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Tracking = () => {
  const [progress, setProgress] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem("VendorLogindetails")) || [];
  const vendorId = userData.vendorId;

  useEffect(() => {
    fetchOrderStatus();
  }, [id]);

  const fetchOrderStatus = async () => {
    try {
      const response = await axios.get(
        `https://apimlm.bloomitsolutions.in/ecomroutes/getOrderByOrderIdId?orderId=${id}`
      );
      const orderData = response.data;
      console.log("orderData", orderData);
      setOrderStatus(orderData.orderStatus);

      if (orderData.orderStatus === "Pending") {
        setProgress(25);
      } else if (orderData.orderStatus === "Approved") {
        setProgress(50);
      } else if (orderData.orderStatus === "Departured") {
        setProgress(75);
      } else if (orderData.orderStatus === "Delevered") {
        setProgress(100);
      }
    } catch (error) {
      console.error("Error fetching order status:", error);
    }
  };

  const renderIcon = () => {
    if (orderStatus === "Pending") {
      return <FontAwesomeIcon icon={faCheckCircle} />;
    } else if (
      orderStatus === "Approved" ||
      orderStatus === "Departured" ||
      orderStatus === "Delevered"
    ) {
      return <FontAwesomeIcon icon={faShippingFast} />;
    } else {
      return <FontAwesomeIcon icon={faTimesCircle} />;
    }
  };

  const updateOrder = async (newStatus) => {
    try {
      await axios.put(
        "https://apimlm.bloomitsolutions.in/ecomroutes/updateOrder",
        {
          orderId: id,
          newStatus: newStatus,
        }
      );
      fetchOrderStatus();
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <Container className="tracking-container">
      <h2>Order Tracking</h2>
      <div className="order-details">
        <h4>Order #{id}</h4>
        <ProgressBar now={progress} label={`${progress}%`} />
        <div className="status-icon">
          <Badge variant="primary">{renderIcon()}</Badge>
          <p>{orderStatus}</p>
        </div>
        <div className="action-buttons">
          {orderStatus === "Pending" && (
            <button
              className="btn btn-success"
              onClick={() => updateOrder("Approved")}
            >
              Approve
            </button>
          )}
          {(orderStatus === "Pending" || orderStatus === "Approved") && (
            <button
              className="btn btn-warning ml-2"
              onClick={() => updateOrder("Departured")}
            >
              Ship
            </button>
          )}
          {(orderStatus === "Pending" ||
            orderStatus === "Approved" ||
            orderStatus === "Departured") && (
            <button
              className="btn btn-info ml-2"
              onClick={() => updateOrder("Delevered")}
            >
              Deliver
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Tracking;
