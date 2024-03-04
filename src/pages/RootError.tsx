import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  const errMsg = errorMessage(error);

  function errorMessage(error: unknown): string {
    if (isRouteErrorResponse(error)) {
      return `${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === 'string') {
      return error;
    } else {
      console.error(error);
      return 'Unknown error';
    }
  }

  return (
    <div id="error-page">
      <p>
        <i>{errMsg}</i>
      </p>
    </div>
  );
}
