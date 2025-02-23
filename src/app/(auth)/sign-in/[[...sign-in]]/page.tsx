import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-black hover:bg-gray-900',
            footerActionLink: 'text-black hover:text-gray-900'
          }
        }}
      />
    </div>
  );
}
