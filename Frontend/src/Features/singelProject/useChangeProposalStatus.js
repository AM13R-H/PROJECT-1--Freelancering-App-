import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeProposalStatusApi } from '../../Services/porposalsService';
import { useParams } from 'react-router-dom';
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: () => {
      console.log('success');
    },
    onError: (err) => {
        toast.error(err?.response?.data?.message)
    }
  });

  //   console.log(data);

  return { isUpdating, changeStatus };
}
