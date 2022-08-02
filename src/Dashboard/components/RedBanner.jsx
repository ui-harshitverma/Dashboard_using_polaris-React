import { Banner, Link } from "@shopify/polaris";
import React from "react";

export function RedBanner() {
  return (
    <Banner
      status="critical"
    >
      <p>
        Invalid Walmart API Credentials. Kindly {" "}
        <Link url="https://help.shopify.com/manual">Click here</Link> to update it.
      </p>
    </Banner>
  );
}

