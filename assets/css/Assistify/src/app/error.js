'use client';

export default function Error({ error, reset }) {
  return (
    <div className='container text-center py-5'>
      <h2 className='mb-4'>Something went wrong!</h2>
      <button className='btn btn-primary' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
