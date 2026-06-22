"use client";
import React, { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, MessageCircle, ChevronRight, Send, Calendar } from 'lucide-react';
import { blogsData } from '@/data/blogs';

export default function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const blog = blogsData.find(b => b.slug === resolvedParams.slug);
  const recent = blogsData.slice(0, 3);

  if (!blog) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h2 className="text-3xl font-black text-[#003366]">BLOG NOT FOUND</h2>
        <Link href="/blog" className="text-[#D58267] underline mt-4 inline-block font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      
<section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-12">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${blog.image})` }}>
    <div className="absolute inset-0 bg-[#003366]/75"></div> 
  </div>
  
  <div className="container mx-auto px-6 relative z-10 text-white text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter max-w-5xl mx-auto leading-[1.1] mb-6"
    > 
      {blog.title}
    </motion.h1>
    
    <nav className="flex justify-center gap-2 text-base md:text-lg font-bold">
      <Link href="/" className="hover:text-[#D58267] transition-colors">Home</Link>
      <span className="text-white/50">/</span>
      <Link href="/blog" className="hover:text-[#D58267] transition-colors">Blog</Link>
    </nav>
  </div>
</section>

      <section className="py-24 container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className="relative group mb-12">
            <img src={blog.image} className="w-full h-[400px] md:h-[550px] object-cover rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" alt={blog.title} />
            <div className="absolute -bottom-6 left-10 bg-[#D58267] text-white px-8 py-3 rounded-2xl font-black shadow-xl flex items-center gap-2">
              <Calendar size={20} /> {blog.date}
            </div>
          </div>
          
          <div className="flex gap-8 mb-10 border-b border-gray-100 pb-8 mt-12">
            <span className="flex items-center gap-2 text-[#003366] font-black uppercase tracking-widest text-sm">
              <User size={20} className="text-[#D58267]" /> {blog.author}
            </span>
            <span className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-widest text-sm">
              <MessageCircle size={20} className="text-[#D58267]" /> 0 Comments
            </span>
          </div>

          <div className="text-gray-600 text-lg md:text-xl font-medium leading-[2.2] whitespace-pre-line mb-16">
            {blog.content}
          </div>

          <div className="p-10 md:p-16 bg-gray-50 rounded-[3.5rem] border border-gray-100 shadow-inner">
            <h3 className="text-3xl md:text-4xl font-black text-[#003366] mb-10 uppercase tracking-tighter">Leave a Comment</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input type="text" placeholder="Full Name" className="p-5 rounded-2xl border-2 border-white bg-white focus:border-[#D58267] shadow-sm outline-none transition-all font-bold" />
              <input type="email" placeholder="Email Address" className="p-5 rounded-2xl border-2 border-white bg-white focus:border-[#D58267] shadow-sm outline-none transition-all font-bold" />
              <textarea rows={6} placeholder="Write your comment here..." className="md:col-span-2 p-6 rounded-[2rem] border-2 border-white bg-white focus:border-[#D58267] shadow-sm outline-none transition-all font-bold"></textarea>
              <button className="bg-[#003366] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-[#D58267] hover:shadow-2xl transition-all flex items-center gap-3 w-fit active:scale-95">
                Post Comment <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <aside className="lg:col-span-1 space-y-12">
          <div className="bg-[#003366] p-10 rounded-[3rem] text-white shadow-2xl">
            <h3 className="text-2xl font-black mb-8 uppercase border-b-4 border-[#D58267] pb-2 w-fit">Categories</h3>
            <ul className="space-y-5">
              {["Travel Guides", "Umrah Guide", "Visa Updates", "Uzbekistan Travel", "Top Destinations"].map((cat, i) => (
                <li key={i} className="flex justify-between items-center group cursor-pointer border-b border-white/10 pb-4">
                  <span className="font-bold text-gray-300 group-hover:text-[#D58267] transition-all text-lg">{cat}</span>
                  <ChevronRight size={20} className="text-white/30 group-hover:text-[#D58267] group-hover:translate-x-2 transition-all" />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-black text-[#003366] mb-10 uppercase border-b-4 border-[#D58267] pb-2 w-fit">Recent Posts</h3>
            <div className="space-y-8">
              {recent.map((post, i) => (
                <Link href={`/blog/${post.slug}`} key={i} className="flex gap-5 group">
                  <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                    <img src={post.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="post" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-black text-[#003366] text-sm group-hover:text-[#D58267] leading-tight mb-2 uppercase transition-colors">{post.title}</h4>
                    <span className="text-xs font-black text-[#D58267] tracking-widest">{post.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}