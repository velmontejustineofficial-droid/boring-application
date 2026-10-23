
import { supabase } from './SupabaseService';

const API_URL = 'http://localhost:8080/api/tools';

async function apiRequest(path = '', options = {}) {
  const { data, error } = await supabase.auth.getSession();

  if (error) throw error;

  const session = data.session;

  if (!session?.access_token) {
    throw new Error('Please sign in before managing your systems.');
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.access_token}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Request failed: ${response.status}`);
  }

  if (response.status === 204) return null;

  return response.json();
}

export function getAllToolsByUserId(userId) {
  if (!userId) throw new Error('User ID is required.');

  return apiRequest(`/user/${encodeURIComponent(userId)}`);
}

export function createTool(tool) {
  return apiRequest('', {
    method: 'POST',
    body: JSON.stringify(tool),
  });
}
