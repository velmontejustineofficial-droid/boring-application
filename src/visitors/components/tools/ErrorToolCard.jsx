import "./css/LoadingToolCard.css";

export default function ErrorToolCard({error}) {
  return (
    <div className="tools-empty-state">
        <h3>Unable to load tools</h3>
        <p>{error}</p>
        <button
              type="button"
              onClick={() => window.location.reload()}
        >
            Try Again
        </button>
    </div>
  )
}
