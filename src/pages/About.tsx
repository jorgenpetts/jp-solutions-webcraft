import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Users, Lightbulb, Target, Award, Globe } from "lucide-react";
import { NavLink } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Innovation",
      description: "We leverage cutting-edge technologies to deliver innovative solutions that drive business growth."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, understanding their unique needs and challenges."
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      icon: Target,
      title: "Results",
      description: "We focus on delivering measurable outcomes that make a real difference to your business."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-jp-primary via-jp-primary-light to-jp-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in">
                About JP Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
                Empowering businesses through innovative software solutions
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h2 className="text-3xl md:text-4xl font-bold text-jp-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Founded in Cape Town, South Africa, JP Solutions was born from a vision 
                    to bridge the gap between complex business challenges and elegant 
                    technological solutions.
                  </p>
                  <p>
                    With years of experience in software development, we've grown from 
                    a small team with big ideas to a trusted partner for businesses 
                    across various industries.
                  </p>
                  <p>
                    Our journey is defined by continuous learning, adaptation, and 
                    an unwavering commitment to excellence in everything we deliver.
                  </p>
                </div>
              </div>
              <div className="animate-fade-in">
                <Card className="p-8 shadow-strong">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl font-bold text-jp-primary mb-2">
                            {stat.number}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-jp-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape how we work with our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <value.icon className="h-12 w-12 text-jp-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-jp-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Globe className="h-16 w-16 text-jp-accent mx-auto mb-6 animate-float" />
                <h2 className="text-3xl md:text-4xl font-bold text-jp-primary mb-6">
                  Our Mission
                </h2>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                To empower businesses of all sizes with innovative, scalable, and reliable 
                software solutions that drive growth, efficiency, and competitive advantage 
                in an increasingly digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink to="/contact">
                  <Button variant="hero" size="lg">
                    Start Your Project
                  </Button>
                </NavLink>
                <Button variant="outline-primary" size="lg">
                  <Award className="h-5 w-5 mr-2" />
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;