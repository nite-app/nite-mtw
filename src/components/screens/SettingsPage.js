import React from "react";
import Header from "../Header";
import Personal from "../settings/Personal";
import Appearance from "../settings/Appearance";
import About from "../settings/About";

function SettingsPage({ active, setActive }) {
  return (
    <div className="w-full h-full min-h-full box-border overflow-y-scroll rounded-3xl bg-backpanel p-8 relative 2xl:p-12 dark:bg-neutral-800">
      <Header active={active} setActive={setActive} />
      <Personal></Personal>
      <Appearance></Appearance>
      <About></About>
    </div>
  );
}

export default SettingsPage;
