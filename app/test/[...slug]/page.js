// pages/test/[...slug].tsx
'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const TestPage = () => {
  const router = useRouter();
//   const { slug } = router.query;

  useEffect(() => {
    // If you want to redirect to /test for any /test/* route
    router.replace('/test');
  }, [router]);

  return (
    <div>
      <h1>Test Page</h1>
      {/* You can conditionally show different content based on slug if needed */}
      {/* <p>Slug: {slug?.join('/')}</p> */}
    </div>
  );
};

export default TestPage;
