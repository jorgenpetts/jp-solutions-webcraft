import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Globe, Database, Shield, Zap, Users, CheckCircle, Star } from "lucide-react";
import { NavLink } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to meet your specific business requirements."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications using the latest technologies and frameworks."
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Scalable database design, optimization, and management for optimal performance."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Robust security implementations and compliance with industry standards."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience with our optimization services."
    }
  ];

  const features = [
    "Expert development team",
    "Agile development methodology",
    "24/7 support and maintenance",
    "Scalable and secure solutions",
    "On-time delivery guarantee"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Cape Town",
      text: "JP Solutions transformed our business processes with their innovative software. Exceptional quality and service!"
    },
    {
      name: "Michael Chen",
      company: "FinanceFlow SA",
      text: "The team's expertise and dedication resulted in a solution that exceeded our expectations. Highly recommended!"
    },
    {
      name: "Priya Patel",
      company: "RetailEdge",
      text: "Outstanding support and beautiful, functional software. Our customers love the new platform!"
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-jp-primary via-jp-primary-light to-jp-primary text-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  Innovative
                  <span className="block text-jp-accent">Software Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                  Empowering businesses in Cape Town and beyond with cutting-edge 
                  technology solutions that drive growth and success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <NavLink to="/contact">
                    <Button variant="accent" size="xl" className="animate-pulse-glow">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </NavLink>
                  <NavLink to="/about">
                    <Button variant="outline-primary" size="xl" className="bg-white/10 border-white text-white hover:bg-white hover:text-jp-primary">
                      Learn More
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div className="relative animate-float">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-glow">
                  <img 
                    src="/lovable-uploads/f8057b8b-3f78-463d-832f-38fdbe38ee4e.png" 
                    alt="JP Solutions - Software Development" 
                    className="w-full h-auto filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="w-full h-full bg-gradient-to-l from-jp-accent to-transparent"></div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-jp-primary mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From concept to deployment, we provide comprehensive software development 
                services tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-jp-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-jp-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-jp-primary mb-6">
                  Why Choose JP Solutions?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We combine technical expertise with business understanding to deliver 
                  solutions that not only work perfectly but also drive real business value.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-jp-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <NavLink to="/about">
                    <Button variant="hero" size="lg">
                      <Users className="mr-2 h-5 w-5" />
                      Meet Our Team
                    </Button>
                  </NavLink>
                </div>
              </div>
              <div className="relative">
                <div className="bg-jp-gradient rounded-2xl p-8 text-white shadow-strong">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-gray-200">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">25+</div>
                      <div className="text-gray-200">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">5+</div>
                      <div className="text-gray-200">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-gray-200">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-jp-primary mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it - hear from satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-strong transition-all duration-300 border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-jp-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-jp-gradient text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our innovative solutions 
              can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button variant="accent" size="xl" className="bg-white text-jp-primary hover:bg-gray-100">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </NavLink>
              <Button variant="outline-primary" size="xl" className="border-white text-white hover:bg-white hover:text-jp-primary">
                <Globe className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
