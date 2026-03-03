"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Navn skal være mindst 2 tegn"),
  email: z.string().email("Ugyldig e-mailadresse"),
  subject: z.string().min(2, "Emne skal være mindst 2 tegn"),
  message: z.string().min(10, "Besked skal være mindst 10 tegn"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Server error");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-dark-text mb-1"
        >
          Navn <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm text-dark-text
                     focus:outline-none focus:ring-2 focus:ring-accent-gold"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-dark-text mb-1"
        >
          E-mail <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm text-dark-text
                     focus:outline-none focus:ring-2 focus:ring-accent-gold"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-dark-text mb-1"
        >
          Emne <span className="text-red-600">*</span>
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm text-dark-text
                     focus:outline-none focus:ring-2 focus:ring-accent-gold"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-dark-text mb-1"
        >
          Besked <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          {...register("message")}
          className="w-full rounded-sm border border-gray-300 px-3 py-2 text-sm text-dark-text
                     focus:outline-none focus:ring-2 focus:ring-accent-gold resize-y"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-block bg-accent-gold text-primary-black font-heading font-bold uppercase
                   text-sm px-8 py-3 rounded-sm hover:brightness-110 transition-all
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sender…" : "Send besked"}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <p className="text-green-700 text-sm mt-2">
          Tak! Din besked er sendt. Vi vender tilbage hurtigst muligt.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mt-2">
          Der opstod en fejl. Prøv venligst igen senere.
        </p>
      )}
    </form>
  );
}
