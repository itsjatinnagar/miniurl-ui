import { useAuth } from "../contexts/AuthContext";
import LoginForm from "./LoginForm";
import VerifyForm from "./VerifyForm";

export default function Hero() {
  return (
    <main className="main container mx-auto px-6 items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-10 md:flex-row md:gap-x-6 md:-mt-20 lg:gap-x-16">
        <ContentSection />

        <FormSection />
      </div>
    </main>
  );
}

function ContentSection() {
  return (
    <section className="max-w-sm">
      <h1 className="text-5xl font-bold text-center leading-tight">
        More than just <span className="text-primary">shorter</span> links
      </h1>
      <p className="mx-auto mt-4 max-w-sm text-base text-gray-800 text-center">
        Build your brand&apos;s recognition and get detailed insights on how
        your links are performing.
      </p>
    </section>
  );
}

function FormSection() {
  const { showVerifyForm } = useAuth();

  return (
    <section className="max-w-sm">
      {showVerifyForm ? <VerifyForm /> : <LoginForm />}
    </section>
  );
}
