import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../Services/authService';

export default function useUser() {
  const {isLoading, data} = useQuery({
    queryKey: ['get-user'],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const {user} = data || {};
  return {isLoading, user};
}
