"use client"; // This is a client component

import ZestButton from "jattac.libs.web.zest-button";
import "jattac.libs.web.zest-button/dist/zestbutton.css"; // Manual CSS import as per reverted README

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>ZestButton Test Page</h1>
      <ZestButton onClick={() => alert('Zest!')}>
        Click Me
      </ZestButton>
      <p style={{ marginTop: '20px' }}>
        If you see this button and no crash, it's working!
      </p>
    </div>
  );
}