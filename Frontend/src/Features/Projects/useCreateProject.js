import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProjectApi } from '../../Services/projectService';
import toast from 'react-hot-toast';

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const {
    data: project,
    error,
    isPending: isCreatingProject,
    mutateAsync: createProject,
  } = useMutation({
    mutationFn: createProjectApi,
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

  return { project, error, isCreatingProject, createProject };
}
