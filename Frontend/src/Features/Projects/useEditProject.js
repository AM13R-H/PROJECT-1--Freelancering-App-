import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editProjectApi } from '../../Services/projectService';
import toast from 'react-hot-toast';

export default function useEditProject() {
  const queryClient = useQueryClient();

  const {
    isPending: iseditingProject,
    mutateAsync: editProject,
  } = useMutation({
    mutationFn: editProjectApi,
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

  return { iseditingProject, editProject };
}
