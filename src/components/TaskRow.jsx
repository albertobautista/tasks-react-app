import React from "react";

export const TaskRow = ({ task, toggleTask }) => {
  const onChangeCheckbox = () => {
    toggleTask(task);
  };

  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          value={task.done}
          checked={task.done}
          onChange={onChangeCheckbox}
        />
      </td>
    </tr>
  );
};
