'use client';

import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/essential/button';
import { Input } from '@/components/ui/essential/input';
import { Textarea } from '@/components/ui/essential/textarea';
import { Card, CardContent } from '@/components/ui/essential/card';
import { useThemeDetection } from '@/hooks/use-theme-detection';

export default function ConnectPage() {
    const { isDarkTheme } = useThemeDetection();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <main className="container mx-auto px-4 py-24">
            <div className="flex flex-col items-center text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Let's Connect</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Have a question or want to work together? We'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Contact Information Cards */}
                <div className="lg:col-span-1 space-y-6">
                    <a href="mailto:01@shunyaek.se">
                        <Card className="border bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">E-Mail</h3>
                                        <p className="text-sm text-muted-foreground">01@shunyaek.se</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </a>

                    <a href="tel:+917818888887">
                        <Card className="border bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Call</h3>
                                        <p className="text-sm text-muted-foreground">+91 7818888887</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </a>

                    <a href="https://wa.me/917818888887" target="_blank" rel="noopener noreferrer">
                        <Card className="border bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MessageCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium">Chat</h3>
                                        <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card className="border bg-background/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <CheckCircle className="h-16 w-16 text-primary mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-6">
                                        Thank you for reaching out. We'll get back to you as soon as possible.
                                    </p>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium">
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium">
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="What's this about?"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your message..."
                                            rows={6}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-2">
                                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                                <span>Sending...</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <Send className="h-4 w-4" />
                                                <span>Send Message</span>
                                            </div>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
} 