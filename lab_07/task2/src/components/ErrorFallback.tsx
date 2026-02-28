type ErrorFallbackProps = {
  error: Error | null;
  onRetry: () => void;
};

function ErrorFallback({ error, onRetry }: ErrorFallbackProps) {
  return (
    <div className="error">
      <h2>Something went wrong</h2>
      {error && <p>{error.message}</p>}
      <button onClick={onRetry}>Try again</button>
    </div>
  );
}

export default ErrorFallback;