import { useQuery } from '@tanstack/react-query';
import { fetchTodos, fetchTodosV2 } from '../services/todoService';
import { useProfile } from './useProfile';

export function useTodos() {
  const profileResult = useProfile();

  return useQuery({
    queryKey: ['todos'],
    queryFn: profileResult.data?.isInternalUser ? fetchTodosV2: fetchTodos, 
    enabled: profileResult.isSuccess,
  });
}
