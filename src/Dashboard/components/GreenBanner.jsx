import { Banner } from "@shopify/polaris";
import React from "react";

export function GreenBanner() {
  return (
    <Banner
      status="info"
      onDismiss={() => {}}
    >
      <p>Rate the performance of the app and our services.</p>
    </Banner>
  );
}
