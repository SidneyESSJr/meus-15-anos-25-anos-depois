"use client";

export default function Error({
  error,
  resetErrorBoundary,
}: {
  error: any;
  resetErrorBoundary: (...args: any[]) => void;
}) {
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={() => resetErrorBoundary()}>Tente novamente</button>
    </div>
  );
}
