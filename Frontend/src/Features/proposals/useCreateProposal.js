import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProposalApi } from '../../Services/porposalsService';
import toast from 'react-hot-toast';

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { mutate: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['proposals'],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { createProposal, isCreating };
}
