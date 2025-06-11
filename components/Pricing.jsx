"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <Card className="shadow-lg bg-gradient-to-r from-teal-500/20 to-emerald-300/20 border-emerald-800/20">
      <CardContent className="p-6 md:p-8">
        <PricingTable
          // 1) Override the “Subscribe” button inside the pricing table:
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-gradient-to-r from-emerald-300/40 text-white hover:bg-emerald-700",
            },
          }}
          // 2) Keep your existing drawer override in checkoutProps:
          checkoutProps={{
            appearance: {
              elements: {
                drawerRoot: {
                  zIndex: 2000,
                },
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Pricing;
