import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeProjectStatusApi } from '../../Services/projectService';
import toast from 'react-hot-toast';

export default function useChangeProjectStatus() {
  const queryClient = useQueryClient();

  const {
    // data: project,
    error,
    isPending: isChangingStatus,
    mutateAsync: changeStatus,
  } = useMutation({
    mutationFn: changeProjectStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);

      queryClient.invalidateQueries({
        queryKey: ['owner-projects'],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.dara?.message);
    },
  });

  return { isChangingStatus, changeStatus };
}
