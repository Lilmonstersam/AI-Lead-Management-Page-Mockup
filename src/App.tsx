import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Network, 
  Smartphone, 
  MessageSquare, 
  Calendar, 
  BarChart, 
  Settings, 
  Zap, 
  Users, 
  TrendingUp, 
  Search,
  Plus,
  Minus,
  ShieldCheck,
  PlayCircle,
  BrainCircuit,
  Workflow,
  Gauge,
  Target,
  Megaphone,
  PieChart,
  Heart,
  Database,
  Calculator,
  Clock
} from 'lucide-react';

const App = () => {
  const [openFaq, setOpenFaq] = useState(0);
  
  // Smart Sticky Banner State
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Video Showcase State
  const [activeVideoTab, setActiveVideoTab] = useState(0);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smart Scroll Listener (Hide on scroll down, show on scroll up past hero)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; 

      if (currentScrollY > heroHeight) {
        if (currentScrollY < lastScrollY) {
          // Scrolling UP
          setIsStickyVisible(true);
        } else {
          // Scrolling DOWN
          setIsStickyVisible(false);
        }
      } else {
        // Above Hero
        setIsStickyVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const SmartStickyBanner = () => (
    <div className={`fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 z-[100] transition-transform duration-300 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] ${isStickyVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="hidden md:flex items-center gap-3">
          <img src="https://digilari.com.au/wp-content/uploads/2020/09/dig-logo-c5.png" alt="Digilari" className="h-6" />
          <span className="text-[#8D2257] font-black text-[10px] uppercase tracking-widest border-l-2 border-slate-200 pl-3">AI Lead Management</span>
        </div>
        <div className="flex w-full md:w-auto items-center gap-3">
          <button onClick={() => scrollToSection('contact')} className="flex-1 md:flex-none bg-slate-100 text-[#8D2257] px-6 py-3 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors text-center">
            Request Demo
          </button>
          <button onClick={() => scrollToSection('contact')} className="flex-1 md:flex-none bg-[#E41B6F] text-white px-6 py-3 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#c4155f] transition-colors shadow-lg shadow-[#E41B6F]/20 text-center flex items-center justify-center gap-2">
            Book Strategy Call <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );

  const Hero = () => (
    <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden pt-12 pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] right-0 w-[50vw] h-[50vw] bg-[#E41B6F] rounded-full blur-[180px] opacity-[0.05]"></div>
        <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-[#8D2257] rounded-full blur-[140px] opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 bg-[#8D2257]/5 border border-[#8D2257]/10 rounded-full px-4 py-1.5 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E41B6F] animate-pulse"></span>
          <span className="text-[10px] text-[#8D2257] font-black uppercase tracking-[0.2em]">Digilari CRM Manager</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[1.1] tracking-tighter mb-6">
          AI-DRIVEN <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E41B6F] to-[#FD9B28]">
            LEAD MANAGEMENT
          </span> <br/>
          & AUTOMATION
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
          Transform your leads into revenue for your growth-focused business with an intelligent CRM set-up and intuitive AI tools that automate engagement, qualification, and conversion.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto mt-4">
          <button onClick={() => scrollToSection('contact')} className="bg-[#E41B6F] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#c4155f] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#E41B6F]/20 w-full">
            Book Strategy Call <ArrowRight size={16} />
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-white border-2 border-slate-100 text-[#8D2257] px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:border-[#8D2257] hover:bg-[#8D2257]/5 transition-all flex items-center justify-center gap-3 w-full">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );

  const TheProblem = () => (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#E41B6F] font-black text-xs uppercase tracking-[0.2em]">The Modern Sales Challenge</span>
          <h2 className="text-4xl md:text-5xl font-black text-black mt-4 tracking-tight">Why AI-Driven Lead Management Matters Today</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6 font-medium leading-relaxed">
            People are overwhelmed with manual follow-ups, cold contacts fall through the cracks, and sales teams waste time on low-intent leads. AI-driven lead management changes everything.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Target size={32} />,
              title: "Qualify & Prioritise",
              desc: "Automatically qualify and prioritise leads based on behaviour and intent. Stop wasting time on unqualified prospects and focus entirely on high-value accounts.",
              color: "text-[#8D2257]",
              bg: "bg-[#8D2257]/5"
            },
            {
              icon: <Users size={32} />,
              title: "Personalise at Scale",
              desc: "Deliver highly personalised experiences to thousands of prospects simultaneously. Make every lead feel like they are your only focus, without the manual effort.",
              color: "text-[#E41B6F]",
              bg: "bg-[#E41B6F]/5"
            },
            {
              icon: <Zap size={32} />,
              title: "Instant Response",
              desc: "Reduce response times from hours to seconds. Engage leads instantly when their intent is highest, helping you close more revenue with significantly less manual work.",
              color: "text-[#FD9B28]",
              bg: "bg-[#FD9B28]/10"
            }
          ].map((pillar, i) => (
            <div key={i} className="p-8 rounded-[40px] border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 bg-white group">
              <div className={`w-16 h-16 ${pillar.bg} ${pillar.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[#8D2257] mb-3">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SolutionShowcase = () => {
    const videoTabs = [
      {
        title: "Intelligent Lead Capture & Routing",
        icon: <Network size={20} />,
        desc: "No more lost leads or messy lists. Every lead is captured accurately, categorised by intent and behaviour, and routed to the right workflow in real time for faster response and fewer missed opportunities.",
        placeholderText: "Lead Routing Automation Preview",
        bgColor: "bg-gradient-to-br from-blue-600 to-indigo-700"
      },
      {
        title: "Automated Lead Qualification",
        icon: <Gauge size={20} />,
        desc: "Forget manual segmentation. Our AI automatically scores leads based on behaviour and conversion likelihood, surfacing ready-to-buy prospects to sales teams while identifying leads requiring further nurture.",
        placeholderText: "Predictive Lead Scoring Preview",
        bgColor: "bg-gradient-to-br from-[#E41B6F] to-[#FD9B28]"
      },
      {
        title: "AI Conversational Engagement",
        icon: <MessageSquare size={20} />,
        desc: "Use intuitive AI tools to start conversations, nurture responses, and schedule appointments 24/7 without human intervention. Intelligent messaging across email, SMS, and webchat builds conversion momentum.",
        placeholderText: "AI Appointment Setter Preview",
        bgColor: "bg-gradient-to-br from-[#8D2257] to-slate-900"
      }
    ];

    return (
      <section className="py-16 lg:py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 lg:mb-16">
            <span className="text-[#E41B6F] font-black text-xs uppercase tracking-[0.2em]">Introducing Digilari CRM Manager</span>
            <h2 className="text-4xl md:text-5xl font-black text-black mt-4 tracking-tight max-w-3xl">How Our AI Lead Management System Solves Your Problems</h2>
            <p className="text-lg text-slate-600 max-w-3xl mt-6 font-medium leading-relaxed">
              Change the way you manage customer relationships with a system that is built to think for you. A powerful Go High Level CRM set-up configured by Digilari to bring your data to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sidebar (1/4 width on desktop, 2nd on mobile) */}
            <div className="order-2 lg:order-1 lg:col-span-1 space-y-3">
              {videoTabs.map((tab, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveVideoTab(i)}
                  className={`w-full text-left px-6 py-5 rounded-2xl flex items-center gap-4 transition-all duration-300 font-bold border-2 ${
                    activeVideoTab === i 
                    ? 'bg-white border-[#E41B6F] text-[#8D2257] shadow-md' 
                    : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-200'
                  }`}
                >
                  <div className={`${activeVideoTab === i ? 'text-[#E41B6F]' : 'text-slate-400'}`}>
                    {tab.icon}
                  </div>
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Video Showcase (3/4 width on desktop, 1st on mobile) */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="bg-slate-50 rounded-[32px] p-4 lg:p-6 shadow-xl border border-slate-100 max-w-4xl mx-auto">
                {/* Video Placeholder Area */}
                <div className={`w-full max-w-3xl mx-auto aspect-video rounded-2xl ${videoTabs[activeVideoTab].bgColor} flex flex-col items-center justify-center text-white relative overflow-hidden shadow-inner group cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-0"></div>
                  <PlayCircle size={64} className="mb-4 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all z-10" strokeWidth={1.5} />
                  <span className="font-bold text-sm tracking-widest uppercase z-10 opacity-90">{videoTabs[activeVideoTab].placeholderText}</span>
                  
                  <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest z-10">
                    System Preview
                  </div>
                </div>

                {/* Sub-section Description below video */}
                <div className="mt-6 px-2 lg:px-4 max-w-3xl mx-auto">
                  <h3 className="text-xl md:text-2xl font-black text-[#8D2257] mb-2 flex items-center gap-3">
                    {videoTabs[activeVideoTab].icon} {videoTabs[activeVideoTab].title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base font-medium">
                    {videoTabs[activeVideoTab].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ToolsGrid = () => (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block bg-[#8D2257] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-6 rounded">The Technology Stack</div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">Result-Focused AI Tools You Will Get</h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            Whether you are using your existing CRM or transitioning into a more advanced lead management system, we integrate intuitive AI tools to deliver clear ROI from day one.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Smart Lead Scoring Engines", 
              icon: <Target size={24} className="text-[#E41B6F]"/>,
              desc: "Predictive lead scoring algorithms that evaluate prospect behaviour to identify your most qualified, sales-ready opportunities automatically."
            },
            { 
              title: "AI Conversational Workflows", 
              icon: <MessageSquare size={24} className="text-[#FD9B28]"/>,
              desc: "Intelligent, multi-channel response workflows that engage leads organically across SMS, email, and webchat without human delay."
            },
            { 
              title: "Automated Follow-Up Campaigns", 
              icon: <Workflow size={24} className="text-[#8D2257]"/>,
              desc: "Robust, automated lead nurturing sequences designed to keep cold prospects engaged until they are ready to purchase."
            },
            { 
              title: "Lead Prioritisation Dashboards", 
              icon: <BarChart size={24} className="text-blue-500"/>,
              desc: "Clear, intuitive interfaces for your sales team, highlighting exactly who they need to contact each day based on AI-driven lead prioritisation."
            },
            { 
              title: "AI-Enabled Calendar Scheduling", 
              icon: <Calendar size={24} className="text-green-500"/>,
              desc: "AI appointment setters that handle the back-and-forth of booking meetings, dropping qualified prospects directly into your sales schedule."
            },
            { 
              title: "Real-Time CRM Analytics", 
              icon: <TrendingUp size={24} className="text-purple-500"/>,
              desc: "Deep insights and performance metrics tracking every interaction, ensuring your AI marketing automation is always driving tangible revenue."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] border border-slate-100 hover:border-[#E41B6F]/30 transition-all shadow-sm group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#8D2257] mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProcessTimeline = () => {
    const timelineSteps = [
      { step: "01", title: "Strategy & CRM Audit", desc: "We evaluate your current systems, data flow, and workflows to identify key optimisation areas.", icon: <Search size={20}/> },
      { step: "02", title: "CRM Set-Up & Customisation", desc: "We configure your CRM for lead capture, advanced segmentation, AI-powered automation, and reporting dashboards.", icon: <Settings size={20}/> },
      { step: "03", title: "Intuitive AI Tools Integration", desc: "Our team connects tools that empower your CRM to score leads automatically and trigger personalised follow-ups.", icon: <BrainCircuit size={20}/> },
      { step: "04", title: "Training & Enablement", desc: "We onboard your team so they fully understand how to use the system for daily productivity and ongoing growth.", icon: <CheckCircle2 size={20}/> },
    ];

    return (
      <section className="py-24 bg-[#8D2257] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start relative z-10">
          <div className="lg:col-span-5">
             <div className="inline-flex items-center gap-2 text-[#FD9B28] mb-6">
                <ShieldCheck size={20} />
                <span className="font-black text-xs uppercase tracking-[0.2em]">The Digilari Difference</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
               What Makes Our <br/>Approach Different?
             </h2>
             <p className="text-lg text-slate-200 leading-relaxed mb-10">
               Clear steps that get you launched fast, without the chaos. We are not just setting up systems; we are engineering outcomes that matter.
             </p>
             
             <div className="space-y-6">
               <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 backdrop-blur-md">
                 <h3 className="text-xl font-bold mb-2 flex items-center gap-3 text-[#FD9B28]">
                    <TrendingUp size={20}/> Revenue-Driven Outcomes
                 </h3>
                 <p className="text-slate-300 text-sm leading-relaxed">
                   Expect more conversions, better lead engagement, faster sales cycles, and clear ROI from day one of your CRM set-up.
                 </p>
               </div>
               
               <div className="bg-white/5 border border-white/10 rounded-[24px] p-6 backdrop-blur-md">
                 <h3 className="text-xl font-bold mb-2 flex items-center gap-3 text-[#E41B6F]">
                    <Bot size={20}/> Continuous Optimisation
                 </h3>
                 <p className="text-slate-300 text-sm leading-relaxed">
                   Never set-and-forget. Adaptive AI systems and automations update automatically based on performance metrics, meaning your system gets smarter over time.
                 </p>
               </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="lg:col-span-7 pt-4">
            <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4">Our CRM Set-Up & Implementation Process</h3>
            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-white/20"></div>
              
              {timelineSteps.map((item, idx) => (
                <div key={idx} className="relative flex gap-8 items-start group">
                  <div className="w-14 h-14 rounded-full bg-[#E41B6F] text-white flex items-center justify-center shrink-0 font-bold z-10 shadow-lg shadow-[#E41B6F]/30 ring-4 ring-[#8D2257]">
                    {item.icon}
                  </div>
                  <div className="pt-2">
                    <div className="text-[10px] font-black text-[#FD9B28] uppercase tracking-widest mb-1">Step {item.step}</div>
                    <h4 className="font-bold text-xl mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const CaseStudies = () => (
    <section id="results" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-8">Real Results from AI-Driven Lead Management</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 relative">
                <MessageSquare className="text-[#E41B6F]/20 absolute top-4 left-4" size={48} />
                <p className="text-slate-600 font-medium italic relative z-10 pt-4">
                    "By implementing Digilari's AI lead management suite, we saw a 38% increase in qualified leads within 90 days."
                </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1 relative">
                <MessageSquare className="text-[#FD9B28]/20 absolute top-4 left-4" size={48} />
                <p className="text-slate-600 font-medium italic relative z-10 pt-4">
                    "Automated conversational follow-ups doubled reply rates and freed our sales team to focus on closing."
                </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {[
            { client: "Tyre Doctor", industry: "Mining", image: "https://tyredoctor.com.au/wp-content/uploads/2021/07/logo_without_group.png", stat: "38%", metric: "Qualified Lead Increase", link: "https://digilari.com.au/case-studies/tyredoctor/" },
            { client: "OzHitch", industry: "Manufacturing", image: "https://ozhitch.com/wp-content/uploads/2024/04/OZHITCH-LOGO-2048x438.png", stat: "2x", metric: "Reply Rate Growth", link: "https://digilari.com.au/case-studies/ozhitch/" },
            { client: "Duracube", industry: "Construction", image: "https://duracube.com.au/wp-content/uploads/2022/04/identity-768x138.png", stat: "90 Days", metric: "To Clear ROI", link: "https://digilari.com.au/case-studies/duracube/" }
          ].map((study, i) => (
            <a key={i} href={study.link} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-[32px] overflow-hidden shadow-xl border border-slate-100 hover:-translate-y-2 transition-all block">
              <div className="h-48 bg-white flex items-center justify-center p-8 border-b border-slate-50 relative">
                <img src={study.image} alt={study.client} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-slate-50 text-[#8D2257] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-20 border border-slate-100">{study.industry}</div>
              </div>
              <div className="p-10">
                <div className="text-5xl font-black text-[#E41B6F] mb-2">{study.stat}</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{study.metric}</div>
                <h3 className="text-2xl font-bold text-[#8D2257] mb-4">{study.client}</h3>
                <div className="text-[#FD9B28] font-black text-xs uppercase tracking-widest flex items-center gap-2">Read Case Study <ArrowRight size={14} /></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactAndFAQ = () => {
    const faqs = [
      {
        q: "What exactly is AI-Driven Lead Management?",
        a: "It uses artificial intelligence to automatically capture, score, prioritise, and nurture leads based on their behaviour and likelihood to convert. This reduces manual effort and helps sales teams focus on high-potential opportunities."
      },
      {
        q: "Do we have to change our current CRM?",
        a: "Not at all. We can either optimise your existing CRM or migrate you into the Digilari CRM Manager, whichever offers the most value and scalability for your needs."
      },
      {
        q: "How soon will we see results?",
        a: "Providing you already have a steady lead flow, most clients see improvements in lead engagement and conversion within 30–60 days. ROI increases typically follow shortly after as campaigns and automations begin to scale."
      },
      {
        q: "What is the difference between traditional automation and AI marketing automation?",
        a: "Traditional automation follows static rules. AI marketing automation learns from user interactions, adapts in real-time, and delivers personalised experiences that improve continuously."
      },
      {
        q: "Will this replace my sales team?",
        a: "No. AI enhances your sales team's efficiency; it handles repetitive tasks like follow-ups and data entry so your team can focus on human-to-human selling and closing deals."
      },
      {
        q: "Is this solution suitable for B2B and B2C businesses?",
        a: "Yes. Whether you are targeting high-ticket B2B clients or managing large volumes of B2C leads, our AI tools and CRM strategies adapt to your funnel complexity and sales cycle."
      },
      {
        q: "Can you integrate with our existing website and landing pages?",
        a: "Absolutely. We ensure seamless integration of lead capture forms, chatbots, and tracking scripts with your website and landing pages to streamline the entire journey from first click to conversion."
      }
    ];

    return (
      <section id="contact" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 text-left">
          
          <div>
            <div className="mb-12">
              <span className="text-[#E41B6F] font-black text-[10px] uppercase tracking-[0.2em]">Common Questions</span>
              <h2 className="text-4xl font-black text-black mt-4 tracking-tight">Frequently Asked<br/>Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full p-6 text-left flex items-start justify-between group">
                    <span className="font-bold text-[#8D2257] group-hover:text-[#E41B6F] transition-colors pr-4">{faq.q}</span>
                    {openFaq === i ? <Minus size={20} className="text-[#8D2257] shrink-0" /> : <Plus size={20} className="text-slate-400 shrink-0 group-hover:text-[#E41B6F] transition-colors" />}
                  </button>
                  {openFaq === i && <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300"><p className="text-slate-600 text-sm border-l-2 border-[#E41B6F] pl-4 leading-relaxed">{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#8D2257] text-white p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden h-fit">
             <div className="absolute top-0 right-0 w-80 h-80 bg-[#FD9B28] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
             
             <div className="relative z-10">
               <h3 className="text-3xl font-black mb-4">Ready to Transform Your Lead Management with AI?</h3>
               <p className="text-slate-200 mb-8 text-sm leading-relaxed">Book your strategy call or request a demo of Digilari CRM Manager with intuitive AI tools in action.</p>
               
               <form className="space-y-5 mt-8">
                 <div className="grid grid-cols-2 gap-5">
                   <div>
                     <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">First Name *</label>
                     <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:border-[#E41B6F] outline-none transition-all text-white text-sm font-bold" />
                   </div>
                   <div>
                     <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Last Name *</label>
                     <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:border-[#E41B6F] outline-none transition-all text-white text-sm font-bold" />
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Your Email *</label>
                   <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:border-[#E41B6F] outline-none transition-all text-white text-sm font-bold" />
                 </div>
                 
                 <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Your Phone Number *</label>
                   <input type="tel" className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:border-[#E41B6F] outline-none transition-all text-white text-sm font-bold" />
                 </div>

                 <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Company Name *</label>
                   <input type="text" placeholder="e.g. Acme Corp" className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:border-[#E41B6F] outline-none transition-all text-white text-sm font-bold placeholder:text-white/20" />
                 </div>
                 
                 <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-3">What are you interested in? *</label>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     <label className="relative flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all has-[:checked]:border-[#E41B6F] has-[:checked]:bg-[#E41B6F]/5 group">
                       <input type="radio" name="requestType" value="demo" className="peer sr-only" defaultChecked />
                       <div className="w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center peer-checked:border-[#E41B6F] transition-all">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#E41B6F] scale-0 peer-checked:scale-100 transition-transform"></div>
                       </div>
                       <span className="text-sm font-bold text-white pr-2">Request a Demo</span>
                     </label>
                     <label className="relative flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all has-[:checked]:border-[#E41B6F] has-[:checked]:bg-[#E41B6F]/5 group">
                       <input type="radio" name="requestType" value="strategy" className="peer sr-only" />
                       <div className="w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center peer-checked:border-[#E41B6F] transition-all">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#E41B6F] scale-0 peer-checked:scale-100 transition-transform"></div>
                       </div>
                       <span className="text-sm font-bold text-white pr-2">Book a Strategy Call</span>
                     </label>
                   </div>
                 </div>

                 <div>
                   <label className="block text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Your Message... *</label>
                   <textarea rows={3} className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:border-[#E41B6F] outline-none transition-all text-white text-sm font-bold"></textarea>
                 </div>

                 <button className="w-full bg-[#E41B6F] text-white font-black text-sm uppercase tracking-widest py-5 rounded-xl shadow-lg hover:bg-[#c4155f] transition-all flex items-center justify-center gap-3 mt-4">
                    Submit Request <ArrowRight size={18} />
                 </button>
               </form>
             </div>
          </div>

        </div>
      </section>
    );
  };

  return (
    <div className="font-sans antialiased text-slate-900 selection:bg-[#E41B6F] selection:text-white pb-20">
      <SmartStickyBanner />
      <Hero />
      <TheProblem />
      <SolutionShowcase />
      <ToolsGrid />
      <ProcessTimeline />
      <CaseStudies />
      <ContactAndFAQ />
    </div>
  );
};

export default App;
