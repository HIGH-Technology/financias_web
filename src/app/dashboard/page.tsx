'use client';

import { Heading, Text } from '@/presentation/components/atoms/Typography';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-base-dark p-8">
      <div className="max-w-7xl mx-auto">
        <Heading as="h1" gradient className="mb-4">
          Dashboard
        </Heading>
        <Text>Bem-vindo ao sistema de finanças!</Text>
      </div>
    </div>
  );
}

