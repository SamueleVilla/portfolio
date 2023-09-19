import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex justify-center gap-2 items-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
  group focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
  disabled:scale-100 disable:bg-opacity-65 "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1"></FaPaperPlane>{' '}
        </>
      )}
    </button>
  );
}
