import LoginForm from "@/components/auth/LoginForm";

export default function Index() {
  return (
    <div className="min-h-screen flex">
      {/* Left side with illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-12">
        <img 
          src="/lovable-uploads/44328ad7-69e3-42d3-96f3-0d09de89dcfd.png" 
          alt="Login illustration" 
          className="max-w-[80%] h-auto"
        />
      </div>
      
      {/* Right side with login form */}
      <div className="w-full lg:w-1/2 bg-[#4052FF] flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}