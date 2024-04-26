import { useQuery } from '@tanstack/react-query';
import { getSingelProjectApi } from '../../Services/projectService';
import { useParams } from 'react-router-dom';

export default function useSingelProject() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useQuery({
    queryKey: ['singelProject' , id],
    queryFn: () => getSingelProjectApi(id),
  });

  // console.log(data.project);     
  const { project } = data || {};
  return { project, isLoading };
}
