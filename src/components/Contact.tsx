import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Github, Linkedin, Code } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        form.reset();
      } else {
        toast({
          title: "Error!",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Network Error!",
        description: "Check your connection or try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <Card className="shadow-lg p-8 h-full">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold mb-4">
                  Let's Build Something Amazing Together
                </CardTitle>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always excited to work on new projects and collaborate
                  with fellow developers. Whether you have a project in mind,
                  need mentoring, or just want to connect, feel free to reach
                  out!
                </p>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <Card className="p-6 text-center hover:shadow-md transition-shadow duration-300 hover-scale">
                    <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a
                      href="mailto:toakshit2004@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      toakshit2004@gmail.com
                    </a>
                  </Card>

                  <Card className="p-6 text-center hover:shadow-md transition-shadow duration-300 hover-scale">
                    <Github className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">GitHub</h3>
                    <a
                      href="https://github.com/akshitjain1264"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      akshitjain1264
                    </a>
                  </Card>

                  <Card className="p-6 text-center hover:shadow-md transition-shadow duration-300 hover-scale">
                    <Linkedin className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/akshitjain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Connect with me
                    </a>
                  </Card>

                  <Card className="p-6 text-center hover:shadow-md transition-shadow duration-300 hover-scale">
                    <Code className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">LeetCode</h3>
                    <a
                      href="https://www.leetcode.com/u/codewithakshit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      codewithakshit
                    </a>
                  </Card>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">📍 Location</h4>
                  <p className="text-muted-foreground">Delhi, India</p>
                  <p className="text-muted-foreground">📞 +91 9910281163</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    💻 LeetCode:{" "}
                    <span className="font-mono">codewithakshit</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>

              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="your.email@example.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or just say hello..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center gap-2"
                    >
                      {loading && (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                      )}
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>

                <div className="text-center mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    Or reach out directly:
                  </p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:toakshit2004@gmail.com">Send Email</a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/akshitjain1264"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
