import { PropsWithChildren } from 'react';

export default function Loading({ children, isLoading }: PropsWithChildren<{ isLoading: boolean }>) {
  return <>{isLoading ? <div>Lade Daten...</div> : <>{children}</>}</>;
}
