import React from "react";
import Records from "./Records";
import EmptyStage from "./EmptyStage";

const RecordGroup = ({ records,delRecord }) => {
  console.log(records);
  return (
    <>
      {records.length === 0 && <EmptyStage />}
      {records.map((record,index) => (
        <Records key={record.id} record={record} index={index} delRecord={delRecord} />
      ))}
      {/* <Records /> */}
    </>
  );
};

export default RecordGroup;
