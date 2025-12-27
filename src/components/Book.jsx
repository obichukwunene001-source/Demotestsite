import React, { useState, useEffect } from 'react'

const Book = () => {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    reason: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate required fields: full name, phone, reason
    if (!form.fullName || !form.phone || !form.reason) {
      alert('Please fill in required fields: full name, phone, and reason for appointment.')
      return
    }

    // Name validation: allow single-word names; must contain at least 2 letters total
    const isValidName = (name) => {
      if (!name) return false
      const lettersOnly = name.replace(/[^A-Za-zÀ-ȳ]/g, '')
      return lettersOnly.length >= 2
    }

    if (!isValidName(form.fullName)) {
      alert('Please enter your name (at least 2 letters).')
      return
    }

    // Basic phone validation: count digits between 10 and 15
    const isValidPhone = (phone) => {
      const digits = phone.replace(/\D/g, '')
      return digits.length >= 10 && digits.length <= 15
    }

    if (!isValidPhone(form.phone)) {
      alert('Please enter a valid phone number (10 to 15 digits).')
      return
    }

    // Create WhatsApp message with form details and encode properly.
    // Build a well-arranged message; include optional fields only when provided.
    const lines = [
      '*Appointment Request*',
      '------------------------',
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      `Reason: ${form.reason}`
    ]
    if (form.preferredDate) lines.push(`Preferred Date: ${form.preferredDate}`)
    if (form.preferredTime) lines.push(`Preferred Time: ${form.preferredTime}`)
    if (form.notes) lines.push(`Additional Notes: ${form.notes}`)

    lines.push('', 'Sent from MBC website')

    const rawMessage = lines.join('\n')
    const message = encodeURIComponent(rawMessage)

    // Send to WhatsApp
    const whatsappLink = `https://wa.me/2349162919586?text=${message}`
    window.open(whatsappLink, '_blank')

    console.log('Appointment request submitted:', form)
    alert('Opening WhatsApp to send your appointment request...')
    setForm({ fullName: '', phone: '', reason: '', preferredDate: '', preferredTime: '', notes: '' })
  }

  useEffect(() => {
    try {
      const el = document.getElementById('book-top');
      if (el) {
        const offset = 70; // account for fixed header
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'auto' });
        el.focus && el.focus();
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <div id="book-top" tabIndex={-1} className="max-w-3xl mx-auto p-6 mt-20 pt-14 md:p-10 md:pt-28 bg-gradient-to-br from-slate-900 via-slate-800/40 to-black/40 rounded-xl shadow-lg text-white">
      <h2 className=" text-2xl  mt-9 font-sans  font-extrabold bg-gradient-to-r from-sky-100 to-blue-300 bg-clip-text text-transparent md:text-5xl md:pb-4 md:mb-1">
            BOOK APPOINTMENT
          </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col text-sm">
          <span className="mb-1 text-gray-200">Enter your name<span className="text-rose-400"> *</span></span>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="e.g., John or Chinedu"
            required
            className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40"
          />
        </label>


        <label className="flex flex-col text-sm">
          <span className="mb-1 text-gray-200">Phone Number<span className="text-rose-400"> *</span></span>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="e.g., +2348012345678" required className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:outline-none focus:ring-1 focus:ring-cyan-400/40" />
        </label>

      
        <label className="flex flex-col text-sm">
          <span className="mb-1 text-gray-200">Reason for Appointment<span className="text-rose-400"> *</span></span>
          <select name="reason" value={form.reason} onChange={handleChange} required className="w-full px-3 py-2 rounded-md bg-black border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400/40">
            <option value="">Select a reason</option>
              <option value="structural-building-construction">Structural Building Construction</option>
              <option value="roofing-systems-installation">Roofing Systems Installation</option>
              <option value="felting-waterproofing-solutions">Felting & Waterproofing Solutions</option>
              <option value="concrete-reinforcement-works">Concrete & Reinforcement Works</option>
              <option value="masonry-block-works">Masonry & Block Works</option>
              <option value="interior-exterior-finishing">Interior & Exterior Finishing</option>
              <option value="flooring-tiling-paving">Flooring, Tiling & Paving</option>
              <option value="construction-project-supervision">Construction Project Supervision</option>
          </select>
        </label>

    

        <label className="flex flex-col text-sm md:col-span-2">
          <span className="mb-1 text-gray-200">Additional Notes</span>
          <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full min-h-[100px] px-3 py-2 rounded-md bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40"></textarea>
        </label>

        <div className="md:col-span-2 flex justify-end">
          <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-200 text-cyan-100 px-5 py-3 rounded-lg font-semibold hover:scale-95 active:scale-90 transition">Request Appointment</button>
        </div>
      </form>
    </div>
  )
}

export default Book