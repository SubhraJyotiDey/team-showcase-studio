import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-page-gradient flex flex-col">
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-gradient mb-4">
            ClearMed
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Smarter Choices. Better Care. Know the real cost and make smarter healthcare decisions.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
