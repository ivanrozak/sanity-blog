import NavigationBar from "@/components/NavigationBar";
import React from "react";

const LayoutBase = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavigationBar />
      <div className="max-w-5xl p-6 mx-auto">{children}</div>
    </>
  );
};

export default LayoutBase;
