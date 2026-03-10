"use client";

import React from "react";

interface ShopTheLookProps {
  children: React.ReactNode;
  spots?: unknown[]; // kept for compatibility, but ignored
}

/**
 * Previously this component added interactive hotspots to images.
 * Hotspots have been removed per request, so the wrapper is now a
 * simple passthrough.
 */
export default function ShopTheLook({ children }: ShopTheLookProps) {
  return <>{children}</>;
}
