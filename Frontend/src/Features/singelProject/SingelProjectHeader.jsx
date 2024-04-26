import { HiArrowLeft } from 'react-icons/hi';
import useMoveBack from '../../Hooks/useMoveBack';
import useSingelProject from './useSingelProject';

function SingelProjectHeader({ project }) {
  // const { isLoading, project } = useSingelProject();
  const moveBack = useMoveBack();

  return (
    <div className="text-primary-900 font-semibold flex items-center gap-2">
      <HiArrowLeft onClick={() => moveBack()} />
      <h2 className="text-primary-900 font-semibold">
        Your Proposals for{' '}
        <span className="font-extrabold text-2xl">{project.title}</span>
      </h2>
    </div>
  );
}

export default SingelProjectHeader;
