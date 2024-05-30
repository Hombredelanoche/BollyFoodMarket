import "@/styles/globals.css";
import Footer from "@/web/components/footer";
import Header from "@/web/components/header";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="p-4">
        <div className="md:max-w-3xl p-4 mx-auto">
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
