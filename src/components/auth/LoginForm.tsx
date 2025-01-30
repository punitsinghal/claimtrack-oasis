import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    try {
      // Microsoft OAuth integration would go here
      toast({
        title: "Login Successful",
        description: "Welcome to Claim Pro",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[350px] text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-6">ClaimPro</h1>
        <h2 className="text-xl font-medium mb-2">Welcome</h2>
        <p className="text-sm opacity-90">
          Please sign in with your Microsoft credentials to continue
        </p>
      </div>
      <Button
        className="w-full bg-white text-black hover:bg-gray-100 font-medium"
        onClick={handleMicrosoftLogin}
        disabled={isLoading}
      >
        <img 
          src="https://authjs.dev/img/providers/microsoft.svg" 
          alt="Microsoft logo" 
          className="w-5 h-5 mr-2"
        />
        {isLoading ? "Logging in..." : "Sign in with Microsoft"}
      </Button>
    </div>
  );
}