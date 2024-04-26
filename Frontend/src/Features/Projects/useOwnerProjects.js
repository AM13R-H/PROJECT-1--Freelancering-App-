import { useQuery } from '@tanstack/react-query';
import { getOwnerProjectsApi } from '../../Services/projectService';

export default function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ['owner-projects'],
    queryFn: getOwnerProjectsApi,
  });

  const { projects } = data || {};
  console.log(data);
  return { projects, isLoading };
}
