import { Header } from '@/components/auth/header';
import { BackButton } from '@/components/auth/back-button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Bir Hata Oluştu" />
      </CardHeader>
      <CardContent>
        <BackButton label="Back to Login" href="/auth/login" />
      </CardContent>
    </Card>
  );
};
