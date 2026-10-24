# 🌱 Dhara AI Farm Buddy

### Dharthi Tech — AI-Powered Multilingual Farm Input Copilot

**Helping farmers choose the right agricultural inputs, verify product authenticity, apply them safely, and make smarter farming decisions with AI.**

---

## 🌾 Overview

**Dhara AI Farm Buddy** is a multilingual, voice-first agricultural assistant designed to help farmers make informed decisions throughout the agricultural input lifecycle — from identifying crop problems and selecting suitable products to verifying authenticity, understanding safe application practices, and receiving follow-up guidance.

The platform combines Agentic AI, Generative AI, weather intelligence, product verification, and personalized agricultural guidance in a farmer-friendly interface.

By making agricultural information more accessible, Dhara AI aims to reduce uncertainty, improve input-selection decisions, and help farmers avoid preventable crop damage and financial losses.

## 🎯 Vision

Empower every farmer with an intelligent, accessible, and trustworthy AI assistant that supports better agricultural decisions through multilingual voice interaction and explainable recommendations.

## 🚀 Mission

To simplify agricultural input selection and safe usage by bringing AI-powered diagnosis, weather-aware recommendations, product authenticity checks, safety guidance, and expert assistance into one accessible platform.

## ⚠️ Problem Statement

Farmers often rely on fragmented or unverified information when making agricultural decisions.

Common challenges include:

- Incorrect fertilizer and pesticide selection.
- Improper dosage and unsafe application practices.
- Counterfeit or suspicious agricultural products.
- Unreliable advice from informal sources.
- Limited access to timely, localized agricultural guidance.
- Language barriers and low digital literacy.
- Preventable crop damage and financial losses.

## 💡 Our Solution

Dhara AI provides a connected workflow that guides farmers from identifying a problem to taking an informed action.

**Speak → Understand → Diagnose → Check Weather → Recommend → Verify → Apply Safely → Follow Up → Escalate to an Expert**

The system is designed to explain not only what action may be appropriate, but also why it is recommended, what precautions are necessary, and when human expertise is required.

## ✨ Key Features

### 🎙️ 1. Multilingual AI Voice Copilot
- Voice-based interaction for farmers.
- Support for Telugu, Hindi, Kannada, Tamil, Marathi, and English.
- Speech-to-text and text-to-speech capabilities.
- Conversational agricultural assistance.
- Simple explanations designed for different literacy levels.

### 🌿 2. AI-Powered Crop Diagnosis
- Submit crop images, describe symptoms by voice, or enter details manually.
- Analyze crop symptoms and potential causes.
- Display diagnosis confidence when supported by the underlying model.
- Provide relevant next steps and safety precautions.
- Escalate uncertain or high-risk cases for expert review.

### 🧪 3. Intelligent Product Recommendations
- Recommend agricultural inputs based on crop, growth stage, symptoms, soil conditions, budget, and local context.
- Explain why a product or treatment may be suitable.
- Present alternatives where appropriate.
- Display relevant dosage and application guidance only when supported by reliable product-specific information.

### 🔎 4. Product Authenticity Verification
- QR code scanning.
- Barcode scanning.
- Agricultural product packaging image analysis.
- Extraction of visible batch, brand, expiry, and manufacturer information.
- Risk indicators and verification results.
- Clear next steps when information cannot be verified.

**Important:** A readable QR code or package image alone does not prove that a product is genuine. Authenticity claims should be based on trusted manufacturer or authorized verification records whenever available.

### 🛡️ 5. AI Safety Guide
- Product-specific dosage guidance.
- Personal protective equipment (PPE) reminders.
- Safe application timing.
- Weather-aware spraying precautions.
- Mixing compatibility warnings.
- Pre-harvest intervals and reapplication guidance when specified by the product label.
- Warnings against unsupported or unsafe recommendations.

### 🌦️ 6. Weather Intelligence
- Temperature, humidity, wind, and rainfall information.
- Rain probability and weather alerts.
- Weather-aware spraying recommendations.
- Irrigation-related insights where supporting data is available.

### 📊 7. Agricultural Market Insights
- Daily market prices where verified data is available.
- Nearby market information.
- Historical price trends.
- Potential selling-time insights based on available data.

### 🔔 8. Follow-Up and Notifications
- Crop condition follow-up reminders.
- Weather and disease-risk alerts.
- Product verification notifications.
- Application reminders.
- Follow-up photo submissions to evaluate changes.

### 👨‍🌾 9. Farmer Profile and Personalization
- Village, district, and location preferences.
- Farm size and soil type.
- Current crops and growth stages.
- Preferred language and voice settings.
- Personalized recommendations based on available farm information.

### 🧑‍🌾 10. Community and Expert Support
- Farmer questions and discussions.
- Image and voice-based queries.
- Expert contact and escalation options.
- Links to relevant agricultural support services.

### 📱 11. Farmer-Friendly Experience
- Mobile-first, responsive interface.
- Large buttons and readable typography.
- Accessible regional-language controls.
- Clear loading, error, empty, and success states.
- Offline-friendly workflows where implemented.
- Simple navigation for first-time smartphone users.

---

## 🧠 AI Workflow

Dhara AI follows a specialized, multi-stage workflow designed to support agricultural decisions.

| Agent | Responsibility |
|---|---|
| Context Agent | Understands the farmer's crop, location, budget, symptoms, and requirements. |
| Diagnosis Agent | Analyzes crop symptoms and identifies possible causes. |
| Orchestration Agent | Coordinates the workflow and routes information between specialized agents. |
| Product Recommendation Agent | Identifies suitable agricultural input options using available evidence. |
| Verification Agent | Checks product details against available trusted verification sources. |
| Safety Agent | Evaluates application instructions, precautions, and relevant risks. |
| Escalation Agent | Routes uncertain or high-risk cases to a qualified human expert. |

**Workflow:** Context → Diagnosis → Orchestration → Product Recommendation → Verification → Safety → Escalation

The agents are intended to work together as one coordinated system rather than provide disconnected answers.

## 🎨 UI/UX Design System

Dhara AI combines modern mobile design principles with an accessible agricultural interface.

### Design Principles
- Simple and intuitive navigation.
- Voice-first interaction.
- Clear explanations and visible safety information.
- Consistent layouts and reusable components.
- Responsive design for mobile and desktop.
- Accessible controls for users with different literacy levels.

### Color Palette

| Color | Hex Code | Usage |
|---|---|---|
| Primary Green | `#2E7D32` | Primary actions and branding |
| Light Green | `#81C784` | Highlights and supporting elements |
| Background | `#F8FAF7` | Main application background |
| Earth Brown | `#8D6E63` | Agricultural accents |
| Warning Amber | `#FFB300` | Cautions and alerts |
| Error Red | `#D32F2F` | Errors and risk indicators |
| Accent Blue | `#1565C0` | Informational elements |

### Typography
- **Headings:** Poppins
- **Body text:** Inter
- **Buttons and controls:** Medium-weight, readable text.

### Main Navigation
- Home
- Verify
- AI Assistant
- Weather
- Profile

The AI Assistant is the central interaction point, making voice-based agricultural guidance easy to access.

## 📲 Application Screens

The planned application experience includes:

1. Splash Screen
2. Onboarding
3. Login
4. Registration
5. Farmer Profile Setup
6. Home Dashboard
7. AI Voice Copilot
8. Crop Diagnosis
9. Product Recommendations
10. QR Code Verification
11. Barcode Verification
12. Packaging Verification
13. Weather Dashboard
14. AI Safety Guide
15. Agricultural Market Prices
16. Farmer Community
17. Notifications
18. AI Follow-Up
19. Human Expert Support
20. Farmer Profile
21. Settings
22. Help and Support
23. About Dharthi Tech

Screen availability depends on the implemented application version.

## 🛠️ Technology and Architecture

Dhara AI is designed to integrate multiple technologies into a unified agricultural assistance platform.

| Technology Area | Purpose |
|---|---|
| Frontend | Responsive user interface and farmer dashboard |
| Agentic AI | Coordination of specialized agricultural workflows |
| Generative AI | Conversational assistance and explanations |
| Machine Learning | Crop suitability and other supported prediction tasks |
| Computer Vision | Crop symptom and packaging image analysis |
| Voice Technologies | Speech recognition and spoken responses |
| Weather APIs | Weather information and spraying-risk assessment |
| QR and Barcode Scanning | Product identification and verification workflows |
| Backend and APIs | Business logic, data exchange, and integrations |
| Database | Farmer profiles, preferences, and application records |

**Note:** The exact frameworks, models, APIs, and database technologies should match the dependencies and services actually configured in the repository. A feature should not be described as fully operational until its implementation and data sources have been tested.

## 🔐 Safety, Reliability, and Trust

Agricultural guidance can directly affect crop health, farmer income, and human safety. Dhara AI is designed around the following principles:

- Explain the basis of recommendations.
- Distinguish verified information from AI-generated suggestions.
- Show confidence only when it has a meaningful technical basis.
- Avoid inventing product registrations, manufacturer details, or authenticity results.
- Use current, product-specific label instructions for application guidance.
- Account for weather conditions when evaluating spraying suitability.
- Escalate uncertain, high-risk, or conflicting cases.
- Protect farmer information and request only necessary permissions.

AI recommendations are decision-support tools and should not replace official product-label instructions or qualified agricultural advice.

## 🧪 Testing and Reliability

Each implemented feature should be tested for:

- Correct functionality and expected outputs.
- API availability and failure handling.
- Invalid or incomplete user input.
- Camera and microphone permission denial.
- Network failures and offline conditions.
- Unsupported languages and speech recognition errors.
- QR codes or packages that cannot be verified.
- AI responses with insufficient confidence.
- Responsive layouts and accessibility.
- Protection of user data.

Features that depend on external services should provide meaningful fallback messages when those services are unavailable.

## 🏆 Demonstration Workflow

A short demonstration can showcase the complete farmer journey:

1. Open Dhara AI and introduce the farmer dashboard.
2. Ask an agricultural question using Telugu voice input.
3. Demonstrate crop diagnosis using a symptom description or image.
4. Review a product recommendation and its supporting explanation.
5. Scan a product code and demonstrate the verification workflow.
6. Open the weather dashboard and review spraying precautions.
7. Display the AI Safety Guide.
8. Demonstrate a follow-up reminder and expert escalation option.

### Project Goal

**From problem identification to informed input selection, product verification, safe application, and continuous agricultural support.**

---

## 🚀 Getting Started

### Prerequisites

Install the following tools before running the project locally:

- [Node.js](https://nodejs.org/) — use a version compatible with the project.
- npm — included with Node.js.
- Git — for cloning and version control.

### Installation

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Open the project directory**

```bash
cd <YOUR_REPOSITORY_NAME>
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

If the project requires API keys or backend services, create a local `.env` file using the variable names documented by the project.

Do not commit API keys, passwords, tokens, or other secrets to GitHub.

**5. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in the terminal.

> If the project uses a separate backend, follow its setup instructions as well. The commands above assume that `npm run dev` is defined in the repository's `package.json`.

## 📁 Project Structure

The exact structure depends on the current repository. A typical organization may look like this:

```text
dhara-ai-farm-buddy/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── assets/
│   └── utils/
├── backend/
├── tests/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

This is an illustrative structure, not a claim about the repository's existing files.

## 🔑 Environment Configuration

Use `.env.example` to document the required environment variables without exposing real credentials.

For example:

```env
VITE_API_BASE_URL=
VITE_WEATHER_API_KEY=
```

Only include variables that the actual application uses. Frontend environment variables may be exposed to users in the built application, so never place private server-side secrets in frontend variables.

## 🌍 Intended Impact

Dhara AI aims to make reliable agricultural information easier to access by:

- Reducing uncertainty in agricultural input selection.
- Encouraging safer product application practices.
- Helping farmers identify suspicious products.
- Improving access to multilingual agricultural assistance.
- Connecting farmers with qualified experts when necessary.
- Supporting more informed farming decisions through explainable AI.

These are intended outcomes; measurable impact must be established through field testing and farmer feedback.

## 🔮 Future Enhancements

Potential future improvements include:

- Expanded regional-language voice support.
- More robust offline operation and synchronization.
- Verified manufacturer integrations for product authenticity.
- Improved crop-disease models validated against field data.
- Localized agricultural advisory services.
- Integration with additional trusted market and weather data providers.
- Farmer feedback and recommendation-quality evaluation.

## 🤝 Contributing

Contributions that improve usability, accessibility, reliability, and agricultural relevance are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make focused changes.
4. Test the changes.
5. Submit a pull request with a clear description.

## 📄 License

Add the project's actual license before distributing or accepting external contributions. Until a license is selected, do not assume that the repository is open source.

## 👨‍💻 Project Information

- **Project:** Dhara AI Farm Buddy
- **Organization:** Dharthi Tech
- **Domain:** Agricultural AI and Smart Farming
- **Focus:** Multilingual Voice AI, Agentic AI, Product Verification, and Agricultural Safety
- **Platform:** Web/mobile-oriented application

---

**Dhara AI Farm Buddy — Helping farmers make informed decisions, use agricultural inputs safely, and farm with greater confidence.**
