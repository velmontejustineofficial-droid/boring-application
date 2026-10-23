
import { useEffect, useState } from 'react';
import { getAllTools } from '../app/service/ToolService';

export default function ToolsTestPage() {
  const [tools, setTools] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTools() {
      try {
        const data = await getAllTools();

        console.log('Tools response:', data);
        setTools(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to load tools:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTools();
  }, []);

  if (loading) return <p>Loading tools...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Tools ({tools.length})</h1>

      {tools.map((tool) => (
        <article key={tool.id}>
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
          <p>Author: {tool.author}</p>
          <p>Category: {tool.category}</p>
        </article>
      ))}
    </div>
  );
}
