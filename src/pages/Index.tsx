import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Lightbulb, Target, TrendingUp, FileCheck, Zap, Factory, Building2, Leaf, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <span className="text-xl font-bold text-primary">STRASYD</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#services" className="text-foreground/80 hover:text-foreground transition-colors">Services</a>
            <a href="#verticals" className="text-foreground/80 hover:text-foreground transition-colors">Verticals</a>
            <a href="#intelligence" className="text-foreground/80 hover:text-foreground transition-colors">Intelligence Engine</a>
            <a href="#resources" className="text-foreground/80 hover:text-foreground transition-colors">Resources</a>
          </nav>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Start Your Project
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              AI-Native Intelligence Engine
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              From Idea to Execution:<br />
              <span className="text-primary">Investable Blueprints</span> for Complex Industries
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strasyd delivers executable, institutional-grade dossiers that bridge the gap between concept and operation. 
              We combine expert human synthesis with an AI-powered intelligence engine to provide turnkey blueprints for 
              launching, financing, or optimizing your business in regulated industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
                Get My Blueprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Free Diagnostic Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Execution Gap */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Gap Nobody Fills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three approaches fail to deliver what you actually need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-destructive/50 transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">Generic AI Templates</h3>
                <p className="text-muted-foreground">
                  $20 for a plan that can't navigate the FDA, model an industrial supply chain, or structure ESG compliance
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-destructive/50 transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">Abstract Strategy Consultants</h3>
                <p className="text-muted-foreground">
                  Millions for recommendations you can't execute. The "Strategy-Execution Gap" costs 67% of initiatives
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-destructive/50 transition-colors">
              <CardContent className="pt-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-bold">Equity-Hungry Venture Studios</h3>
                <p className="text-muted-foreground">
                  The playbook you need, but only if you surrender control and equity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Blueprint Studio Model
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Not an AI text generator</h3>
                  <p className="text-muted-foreground">An enterprise-grade intelligence stack</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Not advice</h3>
                  <p className="text-muted-foreground">An operational dossier with industrial formulations, regulatory pathways, auditable financial models</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Not a co-founder</h3>
                  <p className="text-muted-foreground">A service partner that leaves you in total control</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4 text-sm font-medium">
                    <div className="bg-background px-4 py-2 rounded">Klue</div>
                    <div className="bg-background px-4 py-2 rounded">Compliance.ai</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm font-medium">
                    <div className="bg-background px-4 py-2 rounded">Anaplan</div>
                    <div className="bg-background px-4 py-2 rounded">AlphaSense</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="inline-block bg-secondary/20 text-secondary-foreground px-6 py-3 rounded-lg font-bold">
                      Expert Human Synthesis
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services - Dual Branch */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Two Branches. One Expertise.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl group">
              <CardContent className="pt-8 space-y-6">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Blueprint Branch</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>For:</strong> Founders, Innovators, Investors
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>What:</strong> Launch, Scale, Enterprise Dossiers
                  </p>
                  <p className="text-muted-foreground">
                    Reduce risk. Accelerate funding. Move from pitch to operation.
                  </p>
                </div>
                <Button className="w-full" variant="outline">
                  Explore Blueprints
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-accent transition-all hover:shadow-xl group">
              <CardContent className="pt-8 space-y-6">
                <div className="h-16 w-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Optimization Branch</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>For:</strong> SMEs, Corporate Divisions
                  </p>
                  <p className="text-muted-foreground mb-4">
                    <strong>What:</strong> Diagnostic Audits, Continuous Optimization
                  </p>
                  <p className="text-muted-foreground">
                    Cut costs. Stay compliant. Automate without chaos.
                  </p>
                </div>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Request an Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section id="verticals" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vertical Specialization. No Generalism.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer group">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">HealthTech & Life Sciences</h3>
                <div className="text-sm text-muted-foreground">
                  FDA • Clinical Trials • Reimbursement
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer group">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">FinTech & Financial Services</h3>
                <div className="text-sm text-muted-foreground">
                  SEC • Tokenization • Payment Rails
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer group">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">ESG & Sustainability</h3>
                <div className="text-sm text-muted-foreground">
                  Supply Chain • Impact Reporting • Carbon Markets
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer group">
              <CardContent className="pt-8 text-center space-y-4">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold">AI Governance & Integration</h3>
                <div className="text-sm text-muted-foreground">
                  Strategy • Compliance • Integration Roadmaps
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">69%</div>
              <div className="text-lg opacity-90">Gross Margin vs. 20-40% industry</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">8 Weeks</div>
              <div className="text-lg opacity-90">From Kick-off to Delivery</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">Audited by External Regulatory Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Concept into an Action Plan?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
                Book My Blueprint Intake (90 min)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Request Diagnostic Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded bg-primary" />
                <span className="text-xl font-bold text-primary">STRASYD</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Executable Blueprints for Complex Industries
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blueprint Branch</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Optimization Branch</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Intelligence Engine</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Verticals</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">HealthTech</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FinTech</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">ESG</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">AI Governance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            © 2025 Strasyd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
