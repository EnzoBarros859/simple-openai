# Simple AI Text Generator

A modern web application that generates AI-powered responses using OpenAI's GPT-3.5 Turbo model. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Real-time AI text generation
- Clean and responsive UI
- Error handling and loading states
- OpenAI GPT-3.5 Turbo integration
- TypeScript support
- Tailwind CSS styling

## Prerequisites

Before you begin, ensure you have:
- Node.js (Latest LTS version recommended)
- An OpenAI API key
- npm or yarn package manager

## Environment Setup

1. Clone the repository
2. Create a `.env` file in the root directory
3. Add your OpenAI API key:
```env
OPENAI_API_KEY=your_api_key_here
```

## Installation

```bash
# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

## Getting Started

First, run the development server:

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [OpenAI API](https://openai.com/api/) - AI text generation
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://reactjs.org/) - UI library

## Development

```bash
# Run in development mode with hot reload
npm run dev:watch
# or
yarn dev:watch

# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## Error Handling

The application includes comprehensive error handling for:
- API connection issues
- Invalid inputs
- OpenAI API errors
- Network problems

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for providing the GPT-3.5 Turbo API
- Next.js team for the excellent framework
- Vercel for hosting solutions
