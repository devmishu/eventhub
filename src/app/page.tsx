
export default function Home() {
  return (
    <div className="main-bg text-primary min-h-screen flex flex-col">
      {/* আপনার হোম পেজের সেকশনগুলো (যেমন: Hero, Featured Events) এখানে একটার পর একটা বসবে */}
      <div className="app-container flex flex-col flex-1 items-center justify-center">
        
        {/* জাস্ট টেস্ট করার জন্য একটি সাময়িক টেক্সট রাখা হলো */}
        <h1 className="text-3xl font-bold tracking-tight text-center">
          Welcome to EventHub
        </h1>
        <p className="text-secondary mt-2 text-center">
          Discover, Create & Manage Events seamlessly.
        </p>

      </div>
    </div>
  );
}