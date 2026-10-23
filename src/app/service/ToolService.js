
import { supabase } from './SupabaseService';

const API_URL = 'http://localhost:8080/api/tools';

async function apiRequest(path = '', options = {}) {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    throw new Error(
      `Failed to get Supabase session: ${sessionError.message}`
    );
  }

  if (!session?.access_token) {
    throw new Error(
      'No active Supabase session. Please sign in again.'
    );
  }

  let response;

  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.access_token}`,
        ...options.headers,
      },
    });
  } catch (error) {
    throw new Error(
      `Cannot connect to backend at ${API_URL}. Make sure Spring Boot is running.`,
      { cause: error }
    );
  }

  const contentType = response.headers.get('content-type') || '';
  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(
      `API request failed (${response.status}): ${
        responseText || response.statusText
      }`
    );
  }

  if (response.status === 204 || !responseText) {
    return null;
  }

  if (!contentType.includes('application/json')) {
    throw new Error(
      `Expected JSON but received "${contentType}". ` +
      `Check the backend URL and Spring Boot controller. ` +
      `Response: ${responseText.slice(0, 200)}`
    );
  }

  try {
    return JSON.parse(responseText);
  } catch {
    throw new Error('The backend returned invalid JSON.');
  }
}

export function getAllToolsByUserId(userId) {
  if (!userId) {
    throw new Error('User ID is required.');
  }

  return apiRequest(
    `/user/${encodeURIComponent(userId)}`
  );
}

export function createTool(tool) {
  return apiRequest('', {
    method: 'POST',
    body: JSON.stringify(tool),
  });
}
