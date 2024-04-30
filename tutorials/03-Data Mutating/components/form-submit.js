"use client";
import { useFormStatus } from "react-dom";

function FormSubmit() {
  const { pending } = useFormStatus();

  if (pending) return <p>creating post...</p>;
  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}

export default FormSubmit;
