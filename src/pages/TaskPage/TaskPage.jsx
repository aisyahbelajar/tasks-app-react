import { Main, Users } from "../../components";
import React from "react";

const TaskPage = () => {
  return (
    <div className="flex gap-3">
      <Users />
      <Main />
    </div>
  );
};

export default TaskPage;
