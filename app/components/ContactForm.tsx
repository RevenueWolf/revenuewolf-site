export default function ContactForm() {
  return (
    <form action="https://formspree.io/f/xreybelw" method="POST" className="space-y-5">
      <input type="hidden" name="_next" value="https://revenuewolf.com" />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-body">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-dark outline-none transition-colors placeholder:text-muted focus:border-red focus:ring-1 focus:ring-red"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-body">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-dark outline-none transition-colors placeholder:text-muted focus:border-red focus:ring-1 focus:ring-red"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-body">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-dark outline-none transition-colors placeholder:text-muted focus:border-red focus:ring-1 focus:ring-red"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-body">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-base text-dark outline-none transition-colors placeholder:text-muted focus:border-red focus:ring-1 focus:ring-red"
          placeholder="Tell us a little about what you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-red px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-dark"
      >
        Send us a message
      </button>
    </form>
  );
}
