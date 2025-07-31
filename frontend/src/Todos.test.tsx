import {describe, it, expect} from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Todos } from './Todos';

const queryClient = new QueryClient();

describe('Todos', () => {
  it('renders todos from API', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Learn TypeScript')).toBeInTheDocument();
      expect(screen.getByText('Build an Express app')).toBeInTheDocument();
    });
  });
});
