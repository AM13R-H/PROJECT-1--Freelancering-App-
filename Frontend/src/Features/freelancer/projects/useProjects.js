import { useQuery } from '@tanstack/react-query';
import getProjectsApi from '../../../Services/projectService';
import { useLocation } from 'react-router-dom';
import QueryString from "query-string";

export default function useProjects() {
  const {search} = useLocation();
  const queryObject = QueryString.parse(search);
  // console.log(queryString);

  const { data, isLoading } = useQuery({
    queryKey: ['projects' , queryObject],
    queryFn: () => getProjectsApi(search),
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
