"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import messages from "../../message.json";
import autoplay from "embla-carousel-autoplay";
import {
  GithubIcon,
  Linkedin,
  Mail,
  Twitter,
  Shield,
  Zap,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import HeroSectionGradientBackground from "@/components/LoadingComponents/HeroSection";

function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full relative flex flex-col items-center justify-center">
        {/* Top Fade Grid Background */}
        <div
          className="absolute inset-0 z-[-1]"
          style={{
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />

        <HeroSectionGradientBackground />
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to collect honest, anonymous feedback from your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto mb-4 text-green-600" />
                <CardTitle className="text-lg">Complete Anonymity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Users can share their thoughts without revealing their identities, encouraging
                  honest communication.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <CardTitle className="text-lg">User-Friendly Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Manage and view all your feedback in one place with an intuitive and
                  easy-to-navigate interface.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                <CardTitle className="text-lg">Secure and Private</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Your data is safe with us. We prioritize your privacy and security at every step.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                <CardTitle className="text-lg">100% Anonymous</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Rest assured that all feedback is completely anonymous, encouraging honest and
                  open communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Follow these steps to create your first feedback link
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an Account or Login</h3>
              <p className="text-muted-foreground">Set up your profile quickly to get started.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Access Your Dashboard</h3>
              <p className="text-muted-foreground">Navigate to your personalized dashboard.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate Your Feedback Link</h3>
              <p className="text-muted-foreground">
                Copy the generated public link from your dashboard.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enable Feedback Reception</h3>
              <p className="text-muted-foreground">
                Turn on "Accepting messages" to start receiving feedback.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Link</h3>
              <p className="text-muted-foreground">
                Distribute the link to your audience to collect messages.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive and Review Feedback</h3>
              <p className="text-muted-foreground">
                View all incoming messages directly on your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Users Say</h2>
            <p className="text-xl text-muted-foreground">Real feedback from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Secret Alley helped me collect honest feedback from my team. The anonymity
                  feature encouraged everyone to share their true thoughts."
                </p>
                <div className="font-semibold">Team Leader</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "As a content creator, this platform helps me understand what my audience really
                  thinks. The dashboard is incredibly user-friendly!"
                </p>
                <div className="font-semibold">Content Creator</div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Perfect for collecting customer feedback. The anonymity ensures we get genuine
                  responses, and the interface makes management easy."
                </p>
                <div className="font-semibold">Business Owner</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="space-y-10 py-10 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Collecting Feedback?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Create your anonymous feedback link today and start receiving honest insights from your
            audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="link">
              Create Your Link <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
        {/* Carousel for Messages */}
        <Carousel
          className="w-full mx-auto max-w-lg md:max-w-xl"
          plugins={[autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {messages.map((message, index) => (
              <CarouselItem key={index} className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0" />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-muted-foreground">{message.received}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Secret Alley</h3>
              <p className="text-sm text-muted-foreground">
                Your secure gateway to anonymous communication and private messaging.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Secret Alley. All rights reserved.
            </div>
            <div>
              Made with 💗 by <b>@yash_zanzarukiya</b>
            </div>
            <div className="flex space-x-4">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <Link
                title="Twitter"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
                href="https://x.com/y_zanzarukiya"
                target="_blank"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                title="Github"
                className="text-muted-foreground hover:text-gray-900 transition-colors"
                href="https://github.com/yash-zanzarukiya"
                target="_blank"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link
                title="Linkedin"
                className="text-muted-foreground hover:text-blue-500 transition-colors"
                href="http://www.linkedin.com/in/yash-zanzarukiya"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
