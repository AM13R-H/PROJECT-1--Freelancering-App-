import { useState } from 'react';
import { Switch } from '@headlessui/react';
import useChangeProjectStatus from '../Features/Projects/useChangeProjectStatus';
import Loader from './Loader';

function ToggleSwitch({ project }) {
  const [enabled, setEnabled] = useState(project.status=== "Open" ? true : false);
  const { isChangingStatus, changeStatus } = useChangeProjectStatus();
  const onChangeStatus = () => {
    const status = project.status === 'Open' ? 'Closed' : 'Open';
    changeStatus({
      id: project._id,
      data: { status },
    }, {onSuccess: () => {
        setEnabled((prev) => !prev);
    }});
  };

  return (
    <Switch.Group>
      {isChangingStatus ? (
        <Loader width='3rem' height='3rem' />
      ) : (
        <div className="flex items-center">
          <Switch.Label className="mr-4">{project.status}</Switch.Label>
          <Switch
            checked={enabled}
            onChange={onChangeStatus}
            className={`${
              enabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          >
            <span
              className={`${
                enabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      )}
    </Switch.Group>
  );
}

export default ToggleSwitch;
