import React from "react";

const Page = ({ title, children }) => {
  const logoUrl = "/logo.png";

  return (
    <div className="container text-center">
      {/* Image */}
      <img src={logoUrl} alt={title} width="280px" />

      {/* Subtitle */}
      <div>
        <h4 className="subtitle">Juego de memoria</h4>
      </div>

      {/* Injected Content */}
      {children}
    </div>
  );
};

export default Page;
