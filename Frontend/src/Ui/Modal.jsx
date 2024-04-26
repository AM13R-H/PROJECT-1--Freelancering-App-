import { HiOutlineX } from 'react-icons/Hi';
import useOutSideClick from '../Hooks/useOutSideClick';

function Modal({ open, children, onClose, title }) {
  const ref = useOutSideClick(onClose);

  return (
    open && (
      <div
        ref={ref}
        className="absolute top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center text-primary-900 z-10"
      >
        <div className=" w-2/6 h-fit border bg-secondary-0 rounded-sm">
          <div className="flex justify-between">
            <button className="deleteBtn" onClick={onClose}>
              <HiOutlineX />
            </button>
            {title}
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
