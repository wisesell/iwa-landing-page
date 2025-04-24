import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Award,
  BarChart3,
  CheckCircle2,
  Cloud,
  Code,
  Database,
  Globe,
  Layers,
  LayoutGrid,
  Mail,
  Server,
  ShieldCheck,
  Timer,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-bold">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-xl">Iwastech</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#product" className="text-sm font-medium hover:text-primary">
              WiserSell
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Our Team
            </Link>
            <Link href="#blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild>
              <Link href="#demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transforming Business Through Technology
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We build innovative software solutions, provide cloud expertise, and deliver end-to-end development
                    services to help your business thrive.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#product">Discover WiserSell</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[400px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Iwastech innovative software solutions and cloud services"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer Banner */}
        <section className="w-full bg-primary py-6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
              <div className="flex items-center gap-2 text-primary-foreground">
                <Timer className="h-5 w-5" />
                <p className="font-medium">
                  <span className="font-bold">Limited Time Offer:</span> Get 20% off your first 3 months of WiserSell
                </p>
              </div>
              <Button asChild variant="secondary" size="sm">
                <Link href="#demo">Claim Offer</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* WiserSell Product Section */}
        <section id="product" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet WiserSell</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our flagship e-commerce integration platform that connects your business to customers everywhere
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Seamless Integration</h3>
                      <p className="text-muted-foreground">
                        Connect your e-commerce store with multiple marketplaces and platforms with just a few clicks
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Inventory Management</h3>
                      <p className="text-muted-foreground">
                        Synchronize inventory across all your sales channels in real-time
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Order Processing</h3>
                      <p className="text-muted-foreground">
                        Automate order fulfillment and shipping processes to save time and reduce errors
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">Analytics Dashboard</h3>
                      <p className="text-muted-foreground">
                        Gain valuable insights into your sales performance across all channels
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="flex justify-start">
                  <Button asChild size="lg" className="mt-4">
                    <Link href="#demo">Get a Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="WiserSell Dashboard showing e-commerce integration features"
                  width={600}
                  height={400}
                  className="rounded-xl border shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results & Statistics Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proven Results</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our solutions have helped businesses achieve remarkable growth and efficiency
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary">40%</div>
                <p className="text-sm text-muted-foreground">Average increase in sales for WiserSell clients</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary">60%</div>
                <p className="text-sm text-muted-foreground">
                  Reduction in infrastructure costs with our cloud solutions
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Successful projects delivered across 20+ countries</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-8 text-center shadow-sm">
                <div className="text-4xl font-bold text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Client satisfaction rate with ongoing support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive technology solutions to power your business growth
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 p-4">
                    <Cloud className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Cloud & DevOps</CardTitle>
                  <CardDescription>
                    Expert consultancy for cloud migration, infrastructure optimization, and CI/CD implementation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Cloud architecture design
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Infrastructure as Code
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Continuous Integration/Deployment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Kubernetes orchestration
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 p-4">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Software Development</CardTitle>
                  <CardDescription>
                    End-to-end development of custom software solutions tailored to your business needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Web application development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Mobile app development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      API development & integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Legacy system modernization
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 p-4">
                    <LayoutGrid className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Ready-to-Start Projects</CardTitle>
                  <CardDescription>
                    Pre-packaged software solutions that can be quickly customized and deployed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      E-commerce platforms
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      CRM systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Business intelligence dashboards
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                      Content management systems
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What sets us apart from other technology providers
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rapid Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Our solutions can be deployed in weeks, not months, getting you to market faster
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Industry Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Our team brings decades of combined experience across multiple industries
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Scalable Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Our technology grows with your business, from startup to enterprise
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Security First</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security built into every solution we deliver
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 support from a team that knows your business and technology
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Data-Driven Approach</h3>
                <p className="text-sm text-muted-foreground">
                  We use analytics to continuously improve and optimize your solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Enthusiastic Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the experts who bring your technology vision to life
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Full Stack Developers</h3>
                  <p className="text-sm text-muted-foreground">
                    Experts in both frontend and backend technologies who build robust, scalable applications
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <Server className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Cloud & DevOps Specialists</h3>
                  <p className="text-sm text-muted-foreground">
                    Infrastructure experts who ensure your applications run efficiently and securely in the cloud
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">QA Testers</h3>
                  <p className="text-sm text-muted-foreground">
                    Quality assurance professionals who ensure your software meets the highest standards
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Project Managers</h3>
                  <p className="text-sm text-muted-foreground">
                    Experienced leaders who ensure your projects are delivered on time and within budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed">
                    "WiserSell transformed our e-commerce operations. We've seen a 40% increase in sales since
                    implementing their platform. The integration was seamless and their support team is exceptional."
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Sarah Johnson"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">E-Commerce Director, RetailPlus</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed">
                    "Their cloud migration expertise saved us countless hours and significantly reduced our
                    infrastructure costs. The team's technical knowledge and professionalism exceeded our expectations."
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Michael Chen"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">CTO, TechInnovate</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed">
                    "We needed a custom CRM solution fast, and their team delivered beyond our expectations. The
                    ready-to-start project approach saved us months of development time while still giving us the
                    customization we needed."
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Emily Rodriguez"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Emily Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Operations Manager, GlobalServe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Read More Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="w-full py-12 md:py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Trusted By Industry Leaders</h2>
              </div>
            </div>
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 py-8">
              {/* Replace with actual partner/certification logos */}
              <div className="flex h-16 w-32 items-center justify-center grayscale transition-all hover:grayscale-0">
                <Image
                  src="/placeholder.svg?height=64&width=128"
                  alt="AWS Partner"
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex h-16 w-32 items-center justify-center grayscale transition-all hover:grayscale-0">
                <Image
                  src="/placeholder.svg?height=64&width=128"
                  alt="Microsoft Partner"
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex h-16 w-32 items-center justify-center grayscale transition-all hover:grayscale-0">
                <Image
                  src="/placeholder.svg?height=64&width=128"
                  alt="Google Cloud Partner"
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex h-16 w-32 items-center justify-center grayscale transition-all hover:grayscale-0">
                <Image
                  src="/placeholder.svg?height=64&width=128"
                  alt="ISO 27001 Certified"
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex h-16 w-32 items-center justify-center grayscale transition-all hover:grayscale-0">
                <Image
                  src="/placeholder.svg?height=64&width=128"
                  alt="PCI DSS Compliant"
                  width={128}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to transform your business?
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Whether you need our WiserSell e-commerce solution, cloud expertise, or custom software development,
                    we're here to help.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Get Started Today</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="rounded-lg border bg-background p-8 shadow-lg">
                  <h3 className="text-xl font-bold">Request a Demo</h3>
                  <p className="text-sm text-muted-foreground mb-6">See how our solutions can work for your business</p>
                  <form className="space-y-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="company" className="text-sm font-medium leading-none">
                        Company
                      </label>
                      <input
                        id="company"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="interest" className="text-sm font-medium leading-none">
                        I'm interested in
                      </label>
                      <select
                        id="interest"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="wisersell">WiserSell E-commerce Solution</option>
                        <option value="cloud">Cloud & DevOps Consultancy</option>
                        <option value="software">Custom Software Development</option>
                        <option value="ready">Ready-to-Start Projects</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full">
                      Request Demo
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay Updated</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest industry insights and company updates
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <div className="flex-1">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Insights</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with industry trends, technology insights, and company news
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="E-commerce Integration Trends"
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime="2023-04-15">April 15, 2023</time>
                    <span>•</span>
                    <span>E-commerce</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight">
                    <Link href="#" className="hover:underline">
                      5 E-commerce Integration Trends to Watch in 2023
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-muted-foreground">
                    Discover the latest trends in e-commerce integration that are helping businesses streamline
                    operations and increase sales across multiple platforms.
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/blog/e-commerce-integration-trends">Read More</Link>
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Author"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium">Alex Morgan</span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Cloud Migration"
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime="2023-03-22">March 22, 2023</time>
                    <span>•</span>
                    <span>Cloud & DevOps</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight">
                    <Link href="#" className="hover:underline">
                      How to Plan a Successful Cloud Migration Strategy
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-muted-foreground">
                    Learn the key steps to planning and executing a successful cloud migration that minimizes disruption
                    and maximizes the benefits of cloud infrastructure.
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/blog/cloud-migration-strategy">Read More</Link>
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Author"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium">Samantha Lee</span>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg md:col-span-2 lg:col-span-1">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="WiserSell Update"
                    width={500}
                    height={300}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <time dateTime="2023-02-10">February 10, 2023</time>
                    <span>•</span>
                    <span>Company News</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight">
                    <Link href="#" className="hover:underline">
                      Introducing WiserSell 2.0: New Features and Improvements
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-muted-foreground">
                    We're excited to announce the launch of WiserSell 2.0, featuring enhanced analytics, faster
                    synchronization, and new marketplace integrations.
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/blog/wisersell-2-update">Read More</Link>
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Author"
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium">David Wilson</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link href="#">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or ready to start your next project? Contact us today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Visit our website</h3>
                    <p className="text-sm text-muted-foreground">
                      <a href="https://wisersell.com" className="underline hover:text-primary">
                        wisersell.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Our offices</h3>
                    <p className="text-sm text-muted-foreground">123 Tech Park, Innovation Street, Digital City</p>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Connect with us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="LinkedIn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="Twitter">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#" aria-label="GitHub">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Send us a message</h3>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="contact-name" className="text-sm font-medium leading-none">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="contact-email" className="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="contact-message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <Layers className="h-6 w-6 text-primary" />
            <span>Iwastech</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Iwastech. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
