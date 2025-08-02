import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contact Us <span className="text-automotive-primary">with us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our expert team for all your automotive service needs
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  First & Last Name
                </Label>
                <Input
                  id="name"
                  placeholder="First name Last name"
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Your Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-medium">
                  Your Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+254 7XXXXXXXX or 07XXXXXXXX"
                  className="w-full"
                  type="tel"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="car" className="text-foreground font-medium">
                  Your Car Model
                </Label>
                <Input
                  id="car"
                  placeholder="Car Name"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="photo" className="text-foreground font-medium">
                  Attach Photo
                </Label>
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-automotive-primary file:text-white hover:file:bg-automotive-primary/90"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground font-medium">
                  Date for visit
                </Label>
                <Input
                  id="car"
                  placeholder="Visit date"
                  className="w-full"
                  type="date"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">
                Your Message or explain your issue.
              </Label>
              <Textarea
                id="message"
                placeholder="Message"
                rows={6}
                className="w-full resize-none"
              />
            </div>
            
            <div className="text-center pt-6">
              <Button 
                type="submit"
                className="bg-automotive-primary bg-black hover:bg-automotive-primary/90 text-white px-12 py-3 text-lg"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;