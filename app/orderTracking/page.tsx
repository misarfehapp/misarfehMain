"use client";
import OrderTrackingBody from "@/components/order tracking body/OrderTrackingBody";

import { Suspense } from "react";

const OrderTracking = () => {
  return (
    <Suspense>
      <OrderTrackingBody />
    </Suspense>
  );
};
export default OrderTracking;
