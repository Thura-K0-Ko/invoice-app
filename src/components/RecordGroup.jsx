import React from "react";
import Records from "./Records";

const RecordGroup = ({ records }) => {
  console.log(records);
  return (
    <>
      {records.map((record) => (
        <Records key={record.id} record={record} />
      ))}
      {/* <Records /> */}
    </>
  );
};

export default RecordGroup;
