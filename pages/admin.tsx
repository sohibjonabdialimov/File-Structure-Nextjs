import { isAuthenticated } from '@/src/utils/auth';
import { useRouter } from 'next/router';
import React from 'react'

const Admin = () => {
  const router = useRouter();
  const isAuth = isAuthenticated;

  if(!isAuth) {
    router.replace("/login");
  }
  return (
    <div>Admin</div>
  )
}

export default Admin