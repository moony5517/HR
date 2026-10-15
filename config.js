// People Desk settings.
// Edit this file directly, or use admin.html to change the values and download a fresh copy.
// After changing it, commit and push so the live site picks it up.

window.SITE_CONFIG = {
  siteName: "People Desk",
  topbarNote: "Ask a question, then submit your leave request.",

  theme: {
    primary: "#0f6b6b",     // buttons, user messages, active tab
    dark: "#0b2a30",        // top bar
    background: "#f2f6f7"   // page background
  },

  chat: {
    title: "Ask HR",
    subtitle: "Get quick answers about policies, benefits, and time off.",
    // n8n webhook. Use the /webhook-test/ URL while testing and the /webhook/ URL when live.
    webhookUrl: "https://tasnem17.app.n8n.cloud/webhook-test/chatbot",
    welcomeTitle: "How can we help today?",
    welcomeText: "Type a question below or start with one of these.",
    placeholder: "Ask a question about HR",
    suggestions: [
      "How do I request leave?",
      "What is the sick leave policy?",
      "How many vacation days do I get?",
      "Who do I contact about payroll?"
    ]
  },

  leave: {
    title: "Leave request",
    subtitle: "Fill in the form to request time off.",
    // Google Form link (the normal /viewform link). Embedding is added automatically.
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf7YGuw9Yccj-KuYgt6nR-cXpOopaVzlfIjKCMt6T5nXYhcJA/viewform?usp=header"
  }
};
