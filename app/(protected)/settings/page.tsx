import React from 'react';
import { auth, signOut } from '@/auth';
type Props = {};

const SettingsPage = async (props: Props) => {
  const sesion = await auth();

  return (
    <div>
      {JSON.stringify(sesion)}
      <form
        action={async (typ) => {
          'use server';
          await signOut();
        }}
      >
        <button type="submit">signOut</button>
      </form>
    </div>
  );
};

export default SettingsPage;
