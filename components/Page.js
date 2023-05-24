import React from "react";

const Page = ({ title, children }) => {
  const logoUrl = "/logo.png";

  return (
    <div className="page text-center">
      {/* Image */}
      <img src={logoUrl} alt={title} width="280px" />

      {/* Title */}
      <div className="page-title_box">
        <h4 className="page-title text-dark">Juego de memoria</h4>
      </div>

      {/* Injected Content */}
      {children}
    </div>
  );
};

export default Page;
