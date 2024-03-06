import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .nonempty({ message: "Message is required" })
    .min(15, { message: "Message is too short" }),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const templateParams = {
      to_name: "Gustavo Eloi",
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Email successfully sent!",
          className: "bg-green-500 text-white font-medium border-none",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Error sending email!",
          description: "Try again later",
          className: "bg-red-600 text-white font-medium border-none",
        });
      });
  }

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-t from-black to-gray-800 p-4 text-white font-base py-16"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="">
          <h3 className="text-4xl font-bold border-b-4 border-y-teal-600 p-2 inline-block">
            Contact
          </h3>
          <p className="py-7">Send your message!</p>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="user@email.com" />
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
                      <Textarea {...field} className="resize-none h-64" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant={"secondary"}>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
