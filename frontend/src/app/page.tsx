import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ScamShield</h1>
      <p className="mb-6">
        Protecting users from online scams with AI-powered detection and
        reporting.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Report Scams</h2>
          <p>Submit details about scams you've encountered to help others.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Verify Links</h2>
          <p>
            Check if a website or message is a known scam before interacting.
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h2 className="text-xl font-semibold">Learn About Scams</h2>
          <p>Educational resources to help you recognize and avoid scams.</p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Platform Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">0</p>
            <p>Scams Reported</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p>Active Threats</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p>Users Protected</p>
          </div>
          <div>
            <p className="text-2xl font-bold">$0</p>
            <p>Money Saved</p>
          </div>
        </div>
      </div>
    </main>
  );
}
