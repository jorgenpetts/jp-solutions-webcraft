import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "info@jpsolutions.co.za",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+27 (0)21 XXX XXXX",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Cape Town, South Africa",
      description: "Schedule a meeting"
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-jp-primary via-jp-primary-light to-jp-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in">
                Get In Touch
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 animate-fade-in">
                Ready to start your next project? Let's discuss how we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-jp-primary mb-4">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Have a project in mind? We'd love to hear about it. 
                    Get in touch and let's explore how we can help bring your ideas to life.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <info.icon className="h-6 w-6 text-jp-accent mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-jp-primary mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Business Hours */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-jp-accent mt-1" />
                      <div>
                        <h3 className="font-semibold text-jp-primary mb-2">
                          Business Hours
                        </h3>
                        <div className="space-y-1 text-sm">
                          <p><span className="text-muted-foreground">Monday - Friday:</span> 8:00 AM - 5:00 PM</p>
                          <p><span className="text-muted-foreground">Saturday:</span> 9:00 AM - 1:00 PM</p>
                          <p><span className="text-muted-foreground">Sunday:</span> Closed</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          South African Standard Time (SAST)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-strong">
                  <CardHeader>
                    <CardTitle className="text-2xl text-jp-primary flex items-center">
                      <Send className="h-6 w-6 mr-2" />
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name (optional)"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, requirements, or any questions you have..."
                          rows={5}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button type="submit" variant="hero" size="lg" className="flex-1">
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </Button>
                        <Button type="button" variant="outline-primary" size="lg">
                          <Globe className="h-5 w-5 mr-2" />
                          Schedule a Call
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-jp-primary mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the growing number of businesses that trust JP Solutions 
                for their software development needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start Your Project Today
                </Button>
                <Button variant="outline-primary" size="lg">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;