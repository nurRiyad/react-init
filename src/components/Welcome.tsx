import { useOnlineStatus } from '../hooks/useOnlineStatus';

export default function Welcome() {
  const status = useOnlineStatus();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold">Welcome to React Init!</h1>
      <p>I am currently {status ? 'Online' : 'Offline'}</p>
    </div>
  );
}
