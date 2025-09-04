import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import { MessageCircle, Mail, AlertTriangle, Shield, Download, HelpCircle } from "lucide-react";

const SupportPage = () => {
  const faqs = [
    {
      question: "Are these cheats safe to use?",
      answer: "We test all cheats for malware, but we cannot guarantee they won't result in account bans. Always use at your own risk and preferably on secondary accounts."
    },
    {
      question: "How often are cheats updated?",
      answer: "Our team updates cheats weekly or after major game patches. Verified cheats are prioritized for faster updates."
    },
    {
      question: "Why was my account banned?",
      answer: "Game developers actively combat cheating. If your account was banned, discontinue cheat usage immediately. We cannot help recover banned accounts."
    },
    {
      question: "Can I request cheats for specific games?",
      answer: "Yes! Contact us with game requests. Popular games and those with active communities are prioritized for new cheat development."
    },
    {
      question: "How do I report a non-working cheat?",
      answer: "Use the report button on the cheat page or contact us directly. Include your game version, cheat name, and error details."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Support & FAQ
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get help with cheats, report issues, or find answers to common questions
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="card-gaming group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-card-foreground">Live Chat</CardTitle>
              <CardDescription>Get instant help from our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full btn-gaming">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="card-gaming group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-card-foreground">Email Support</CardTitle>
              <CardDescription>Send us a detailed message</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full btn-gaming-outline">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="card-gaming group">
            <CardHeader>
              <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive/30 transition-colors">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <CardTitle className="text-card-foreground">Report Issue</CardTitle>
              <CardDescription>Report bugs or broken cheats</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                Report Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Important Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="card-gaming border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <CardTitle className="text-card-foreground">Safety Guidelines</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• Always scan downloads with antivirus software</p>
              <p>• Use cheats on secondary accounts when possible</p>
              <p>• Keep game and cheat versions updated</p>
              <p>• Disable Windows Defender real-time protection temporarily</p>
              <p>• Never share your main account credentials</p>
            </CardContent>
          </Card>

          <Card className="card-gaming border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Download className="w-6 h-6 text-primary" />
                <CardTitle className="text-card-foreground">Download Issues</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• Try disabling antivirus temporarily</p>
              <p>• Clear browser cache and cookies</p>
              <p>• Use a different browser or incognito mode</p>
              <p>• Check your internet connection</p>
              <p>• Contact support if problems persist</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold glow-text">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gaming border-border/30"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-muted/10 border border-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-foreground">⚠️ Important Disclaimer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            GameCheats provides game modifications for educational and entertainment purposes only. 
            Users assume all risks associated with cheat usage, including potential account suspensions, 
            bans, or other consequences imposed by game developers. We do not endorse violating game 
            terms of service and recommend using cheats responsibly. Always respect other players and 
            the gaming community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;