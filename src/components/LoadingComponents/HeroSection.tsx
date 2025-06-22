import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

export default function HeroSectionGradientBackground() {
  const { toast } = useToast();

  const handleLearnMore = () => toast({ title: "No more learning needed... 🤨" });

  return (
    <>
      {/* Hero */}
      <div className="relative w-full overflow-hidden py-24 lg:py-32">
        {/* End Gradients */}
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-4xl text-center mx-auto">
              <p className="">Discover the Power of Honest, Anonymous Feedback</p>
              {/* Title */}
              <div className="mt-5 max-w-3xl mx-auto">
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                  Feedback Without Footprints
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-4xl">
                <p className="text-xl text-muted-foreground">
                  {/* Secret Alley - Your safe space to speak freely without revealing your identity. */}
                  Secret Alley - The one place where feedback is honest, unfiltered, and always
                  anonymous.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 flex justify-center">
                <Link href="/sign-in">
                  <Button size={"lg"}>Get started</Button>
                </Link>
                <Button size={"lg"} variant={"outline"} onClick={handleLearnMore}>
                  Learn more
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
