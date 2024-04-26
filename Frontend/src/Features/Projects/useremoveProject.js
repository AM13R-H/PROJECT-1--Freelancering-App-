import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeProjectApi } from '../../Services/projectService';
import toast from 'react-hot-toast';

export default function useRemoveProject() {
    const queryClient = useQueryClient();
  const { mutate: deleteProject, isPending: isDeletingProject } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"]
      })
    },
    onError: (err) => {
      toast.error(err?.response?.dara?.message);
    },
  });

  return {deleteProject, isDeletingProject};
}
