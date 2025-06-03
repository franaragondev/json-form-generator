## Getting Started

This React component renders a dynamic form based on a JSON schema configuration. It supports different field types like text, number, boolean, multiline text, date, and enum (select).

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Form Configuration Example

Below is an example of the JSON configuration used to generate the form. It defines the form title, buttons, and fields with their respective types, labels, names, and placeholders.

```json
{
  "title": "Registration Form",
  "buttons": [
    { "text": "Submit", "action": "submit" },
    { "text": "Reset", "action": "reset" },
    { "text": "Cancel", "action": "cancel" }
  ],
  "fields": [
    {
      "type": "string",
      "label": "Full Name",
      "name": "fullName",
      "placeholder": "Enter your name"
    },
    {
      "type": "number",
      "label": "Age",
      "name": "age",
      "placeholder": "Example: 30"
    },
    {
      "type": "multi-line",
      "label": "Personal Description",
      "name": "description",
      "placeholder": "Tell us something about yourself"
    },
    {
      "type": "date",
      "label": "Birth Date",
      "name": "birthDate"
    },
    {
      "type": "enum",
      "label": "Gender",
      "name": "gender",
      "options": ["Male", "Female", "Other"]
    },
    {
      "type": "boolean",
      "label": "Do you accept the terms?",
      "name": "termsAccepted"
    }
  ]
}