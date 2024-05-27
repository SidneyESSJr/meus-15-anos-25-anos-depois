"use client";

import React from "react";

export default function GlobalError({ message }: { message: string }) {
  return (
    <html>
      <body>
        <main>{message}</main>
      </body>
    </html>
  );
}


