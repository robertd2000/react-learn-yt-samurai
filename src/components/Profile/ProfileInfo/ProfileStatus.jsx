import React, { useEffect, useState } from 'react';

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateMode = () => setEditMode(true);
  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateMode}>
            {props.status || '----------'}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
