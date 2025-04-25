'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Mail, Phone, SendHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import MaxWidthContent from '@/components/maxWidthContent'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/beacon.png"
            alt="Contact Us"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <MaxWidthContent >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl bg-white/95 backdrop-blur-sm p-8 md:p-12 border-l-8 border-gold border-b-2 border-b-primary"
          >
            <div className="inline-block px-4 py-1 bg-gold text-white text-sm font-medium rounded-full mb-4">
              Get in Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Start a Conversation</h1>
            <p className="text-lg text-gray-600">
              Whether you're looking for your dream home or interested in our services, our team is ready to assist you.
            </p>
          </motion.div>
        </MaxWidthContent>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <MaxWidthContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Information */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-6">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-8">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="p-3 rounded-full bg-primary/5 group-hover/item:bg-primary/10 transition-colors">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">09125555510, 09125555512</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="p-3 rounded-full bg-primary/5 group-hover/item:bg-primary/10 transition-colors">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">sales@zeekshomes.ng</p>
                      <p className="text-muted-foreground">info@zeekshomes.ng</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="p-3 rounded-full bg-primary/5 group-hover/item:bg-primary/10 transition-colors">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">Novare Central Office, Dabala Crescent Wuse Zone 5 Abuja</p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-primary/5" />
              <CardContent className="relative p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white/50 backdrop-blur-sm resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <SendHorizontal className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-24 rounded-xl overflow-hidden border shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8766304233657!2d7.4726721!3d9.0733397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba3302a3c37%3A0x2f3c1e8f8f6c9e82!2sNovare%20Central%20Wuse%20Zone%205!5e0!3m2!1sen!2sng!4v1701683394949!5m2!1sen!2sng"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </MaxWidthContent>
      </section>
    </div>
  )
}

export default ContactPage