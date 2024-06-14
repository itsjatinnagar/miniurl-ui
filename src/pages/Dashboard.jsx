import Header from "../components/Header";
import LinksList from "../components/LinksList";
import ShortenForm from "../components/ShortenForm";
import LinkProvider from "../contexts/LinkContext.jsx";

export default function Dashboard() {
    return (
        <LinkProvider>
            <Header />
            <main className="main container mx-auto px-6 flex-col items-start gap-y-5">
                <h2 className="text-3xl font-bold">Links</h2>
                <ShortenForm />
                <hr className="w-full border border-solid border-primary-900" />
                <LinksList />
            </main>
        </LinkProvider>
    );
}
