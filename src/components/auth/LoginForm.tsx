import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome to Claim Pro</CardTitle>
        <CardDescription>Login with your Microsoft 365 account</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full"
          onClick={handleMicrosoftLogin}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login with Microsoft"}
        </Button>
      </CardContent>
    </Card>
  );
}