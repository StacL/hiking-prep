import React from "react";
import CheckItem from "./CheckItem";

const DailyChecklist = () => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Daily Pack</h2>
        <div className="form-control">
          <CheckItem item="water"/>
          <CheckItem item="food"/>
          <CheckItem item="extra socks"/>
          <CheckItem item="sunscreen"/>
        </div>
      </div>
    </div>
  );
};

export default DailyChecklist;
