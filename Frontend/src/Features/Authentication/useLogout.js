import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { logOutUser } from '../../Services/authService';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutateAsync: logout } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
        console.log("success");
    //   toast.success(message);
      queryClient.invalidateQueries();
      navigate('/Auth', { replace: true });
    },
  });

  return { isPending, logout };
}
