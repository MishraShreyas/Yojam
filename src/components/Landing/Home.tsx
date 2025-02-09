import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Divider } from "@/components/ui/divider";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FeaturesSection } from "@/components/Landing/Features";
// import WavingLogo from "@/components/Landing/WavingLogo";

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <WavyBackground className="text-center space-y-6 max-w-4xl px-4 mx-auto text-white" speed="slow">

                    <div className="relative">
                        <div className="absolute bottom-full -translate-y-8 md:-translate-y-16 left-1/2 -translate-x-1/2">
                            {/* <WavingLogo /> */}
                        </div>
                        <h1 className="text-6xl font-bold animate-in slide-in-from-bottom-full fade-in ease-in-out duration-1000">
                            Find Your Inner Peace with Yojam
                        </h1>
                    </div>
                    <div className="relative">
                        <p className="text-xl">
                            Journey through meditation, tarot readings, and yoga practices
                        </p>

                        <div className="absolute inset-x-0 top-full translate-y-8 md:translate-y-16 flex flex-col items-center w-full">
                            {/* Live Session Counter */}
                            <div className="py-8">
                                <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8">
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold text-purple-400">42</h3>
                                        <p className="text-slate-300">Live Sessions</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold text-purple-400">1.2k+</h3>
                                        <p className="text-slate-300">Active Members</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold text-purple-400">98%</h3>
                                        <p className="text-slate-300">Satisfaction Rate</p>
                                    </div>
                                </div>
                            </div>

                            <a href="/login">
                                <Button size="lg" className="">
                                    Begin Your Journey
                                </Button>
                            </a>
                        </div>
                    </div>
                </WavyBackground>
            </section>

            <Divider variant="gradient" />

            {/* Features Section */}
            <FeaturesSection />

            <Divider variant="path" />

            {/* Daily Wellness Section */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Daily Wellness Guide</h2>
                <Tabs defaultValue="tarot" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="tarot">Daily Tarot</TabsTrigger>
                        <TabsTrigger value="meditation">Meditation</TabsTrigger>
                        <TabsTrigger value="activities">Activities</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tarot" className="bg-slate-800/50 p-6 rounded-lg mt-4">
                        <h3 className="text-xl font-semibold mb-4">{`Today's Card: The Star`}</h3>
                        <p className="text-slate-300">Hope, inspiration, and renewed faith...</p>
                    </TabsContent>
                    {/* Add other TabsContent components */}
                </Tabs>
            </section>

            <Divider variant="gradient" />

            {/* Upcoming Events */}
            <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
                    <div className="space-y-4">
                        {/* Event cards */}
                        <Card className="bg-slate-800/50">
                            <CardHeader>
                                <CardTitle>Full Moon Meditation</CardTitle>
                                <CardDescription>Dec 25, 2023 • 7:00 PM</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <Calendar className="rounded-md border" />
            </section>

            <Divider variant="path" />

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How do I get started?</AccordionTrigger>
                        <AccordionContent>
                            Simply create an account and choose your wellness journey...
                        </AccordionContent>
                    </AccordionItem>
                    {/* Add more FAQ items */}
                </Accordion>
            </section>

            <Divider variant="glass" />

            {/* Latest Blog Posts */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8">Latest Insights</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="bg-slate-800/50">
                        <CardHeader>
                            <CardTitle>Morning Rituals for Success</CardTitle>
                            <CardDescription>5 min read • Wellness</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-300">Discover the power of morning routines...</p>
                        </CardContent>
                    </Card>
                    {/* Add more blog post cards */}
                </div>
            </section>

            <Divider variant="gradient" />

            {/* Testimonials */}
            <section className="bg-slate-800/30 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-slate-800/50">
                            <CardHeader>
                                <CardTitle>Life-changing experience</CardTitle>
                                <CardDescription>Sarah M. • Yoga Enthusiast</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-300">The meditation sessions have transformed my daily routine...</p>
                            </CardContent>
                        </Card>
                        {/* Add more testimonial cards */}
                    </div>
                </div>
            </section>
        </div>
    );
}
