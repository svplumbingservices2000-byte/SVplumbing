import React, { useState, useEffect } from "react";
import { HYDERABAD_COLONIES, BookingRequest } from "../data";
import { WhatsAppIcon } from "./Icons";
import { MapPin, Calendar as CalendarIcon, Clock, AlertCircle, CheckCircle, ArrowRight, User, Phone, FileText } from "lucide-react";

interface QuoteEstimatorProps {
  onBookingCreated?: () => void;
}

export default function QuoteEstimator({ onBookingCreated }: QuoteEstimatorProps) {
  // Booking Form State
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [colony, setColony] = useState(HYDERABAD_COLONIES[0]);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("09:00 AM - 12:00 PM");
  const [notes, setNotes] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successBooking, setSuccessBooking] = useState<BookingRequest | null>(null);

  // Auto-set tomorrow's date by default for convenience
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validations
    if (!customerName.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!customerPhone.trim() || customerPhone.replace(/\D/g, "").length < 10) {
      setErrorMsg("Please enter a valid 10-digit contact number.");
      return;
    }
    if (!address.trim()) {
      setErrorMsg("Please enter your full address or landmarks.");
      return;
    }
    if (!date) {
      setErrorMsg("Please select a preferred date for the plumbing visit.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create request payload
      const reqId = "SV-REQ-" + Math.floor(100000 + Math.random() * 900000);
      const newBooking: BookingRequest = {
        id: reqId,
        customerName,
        customerPhone,
        address,
        colony,
        selectedServices: notes.trim() ? [notes.trim()] : ["Plumbing Repair / General Inquiry"],
        notes,
        status: "Pending",
        date,
        timeSlot,
      };

      // Format WhatsApp Message
      const textMessage = `Hello SV Plumbing Services! I want to book an appointment:

*Request Code:* ${reqId}
*Customer Name:* ${customerName}
*Phone Number:* ${customerPhone}
*Colony/Locality:* ${colony}
*Full Address:* ${address}
*Date of Visit:* ${date}
*Preferred Slot:* ${timeSlot}

*Plumbing Issue / Details:*
${notes.trim() ? notes : "General plumbing inspection/repair works"}

Please confirm my plumbing technician slot. Thank you!`;

      const encodedMessage = encodeURIComponent(textMessage);
      const whatsappUrl = `https://wa.me/918008693712?text=${encodedMessage}`;

      // Open WhatsApp Link instantly
      window.open(whatsappUrl, "_blank");

      // Set success booking
      setSuccessBooking(newBooking);
      
      if (onBookingCreated) {
        onBookingCreated();
      }

      // Clear form
      setCustomerName("");
      setCustomerPhone("");
      setAddress("");
      setNotes("");
    } catch (err) {
      setErrorMsg("An error occurred while compiling your plumbing request. Please contact us directly!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto" id="booking-form-wrapper">
      {/* Header Accent Bar */}
      <div className="bg-[#0f1c3f] text-white p-4 min-[380px]:p-5 sm:p-8 flex items-center justify-between gap-4 border-b border-[#d32f2f]/30">
        <div className="space-y-1 min-w-0">
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300 font-mono block">
            Direct Dispatch Scheduler
          </span>
          <h3 className="font-display font-black text-lg min-[380px]:text-xl sm:text-2xl text-white leading-tight">
            SV Plumbing Appointment Form
          </h3>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-xs text-slate-300 font-medium block">Questions? Call 24/7</span>
          <a href="tel:+918008693712" className="text-[#ef4444] font-black tracking-tight hover:underline font-mono text-sm">
            +91 80086 93712
          </a>
        </div>
      </div>

      <div className="p-4 min-[380px]:p-5 sm:p-8" id="booking-card-body">
        {successBooking ? (
          /* SUCCESS STATE PANEL */
          <div className="text-center py-8 sm:py-10 px-1 sm:px-4 flex flex-col items-center justify-center space-y-6 animate-scaleIn" id="estimator-success-screen">
            <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-md">
              <CheckCircle className="w-10 h-10 stroke-[2.5]" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 leading-tight">
                Your Request has been Sent!
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Thank you! Your booking has been generated with Request Code <strong className="text-slate-800">{successBooking.id}</strong>. We have opened a WhatsApp redirect window to send these details to our dispatch desk.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 w-full max-w-md text-left font-mono text-xs space-y-2 text-slate-700 shadow-inner">
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-1 border-b border-slate-200 pb-2">
                <span className="font-bold text-slate-500">REQUEST ID:</span>
                <span className="font-black text-[#d32f2f] break-all">{successBooking.id}</span>
              </div>
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-1">
                <span>Selected Colony:</span>
                <span className="font-bold text-slate-900">{successBooking.colony}</span>
              </div>
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-1">
                <span>Scheduled Date:</span>
                <span className="font-bold text-slate-900">{successBooking.date}</span>
              </div>
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-1">
                <span>Preferred Slot:</span>
                <span className="font-bold text-slate-900">{successBooking.timeSlot}</span>
              </div>
            </div>

            <div className="text-xs text-slate-500 bg-blue-50 border border-blue-100 p-3.5 rounded-xl max-w-md text-left leading-relaxed">
              <strong>Tip:</strong> If the WhatsApp chat did not open automatically, please click the button below to send your details directly.
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md pt-4">
              <button
                onClick={() => setSuccessBooking(null)}
                className="flex-1 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 py-3.5 rounded-xl text-xs font-bold transition-all text-center"
                id="success-book-another-btn"
              >
                Book Another Appointment
              </button>
              <a
                href={`https://wa.me/918008693712?text=${encodeURIComponent(
                  `Hello SV Plumbing Services! I want to confirm my booking request: ${successBooking.id}. Location: ${successBooking.colony}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#00A884] hover:bg-[#009675] text-white py-3.5 rounded-xl text-xs font-bold shadow-md transition-all text-center flex items-center justify-center space-x-2"
                id="success-whatsapp-btn"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Send WhatsApp Message</span>
              </a>
            </div>
          </div>
        ) : (
          /* STANDARD BOOKING FORM */
          <form onSubmit={handleSubmit} className="space-y-6" id="booking-request-form">
            {errorMsg && (
              <div className="bg-rose-50 border border-rose-100 p-3.5 rounded-xl flex items-start space-x-2 text-xs text-rose-600 animate-fadeIn" id="booking-error-alert">
                <AlertCircle className="w-4.5 h-4.5 shrink-0 text-rose-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Inputs grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Your Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="E.g., Ramesh Kumar"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent transition-all"
                  id="form-name-input"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Contact Phone Number</span>
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="E.g., 8008693712"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent transition-all"
                  id="form-phone-input"
                />
              </div>

              {/* Colony Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Select Colony / Locality</span>
                </label>
                <select
                  value={colony}
                  onChange={(e) => setColony(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent bg-white transition-all"
                  id="form-colony-select"
                >
                  {HYDERABAD_COLONIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Prefered Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1">
                  <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>Preferred Date of Visit</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent bg-white transition-all"
                  id="form-date-input"
                />
              </div>

              {/* Preferred Time Slot */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Preferred Visit Time Slot</span>
                </label>
                <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-4 gap-2.5" id="form-timeslot-group">
                  {[
                    "09:00 AM - 12:00 PM",
                    "12:00 PM - 03:00 PM",
                    "03:00 PM - 06:00 PM",
                    "06:00 PM - 09:00 PM",
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`py-3 px-2 text-[11px] font-bold rounded-xl border transition-all text-center ${
                        timeSlot === slot
                          ? "bg-[#0f1c3f] border-[#0f1c3f] text-white shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                      id={`timeslot-btn-${slot.replace(/\s+/g, "")}`}
                    >
                      {slot.replace(":00", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Address */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Full Address / Landmark Details</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="E.g., Flat 402, Sai Residency, Main Road, Kothapet (Near Srinagar Colony park)"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent transition-all"
                  id="form-address-input"
                />
              </div>

              {/* Problem Description / Required Services */}
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center space-x-1">
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span>Plumbing Issue / Required Service Description</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="E.g., Bath faucet dripping continuously, water pump not lifting water, water tank cleaning, bathroom leakage sealing needed, etc."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent transition-all"
                  id="form-notes-input"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-4 border-t border-slate-100">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d32f2f] hover:bg-[#b71c1c] text-white py-4 rounded-xl text-sm font-black tracking-wider uppercase shadow-md hover:shadow-lg disabled:opacity-50 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                id="booking-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span className="text-center leading-tight">Submit & Open WhatsApp Chat</span>
                    <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
                  </>
                )}
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-3 font-mono leading-relaxed">
                * Our dispatcher will instantly view your details on WhatsApp and confirm the standby technician nearest to your colony.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
