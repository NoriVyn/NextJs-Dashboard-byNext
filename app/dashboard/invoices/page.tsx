export default async function InvoicesPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simule un chargement
    return <div>Invoices page</div>;
  }