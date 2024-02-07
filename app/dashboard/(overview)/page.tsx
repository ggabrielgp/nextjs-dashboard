import { Suspense } from "react";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import { lusitana } from "../../ui/fonts";
import { CardSkeleton, CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "../../ui/skeletons";
import CardWrapper, { Card } from "../../ui/dashboard/cards";
import { fetchCardData } from "../../lib/data";

export default async function DashboardPage() {
    /* const revenue = await fetchRevenue() // 2s
    console.log("revenue", revenue) */

    /* const latestInvoices = await fetchLatestInvoices() // 1s
    console.log("latestInvoices", latestInvoices) */

    // tardará en renderizar 3s por los await
    
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
                {/* <Suspense fallback={<CardSkeleton />}>
                    <Card title="Collected" value={totalPaidInvoices} type="collected" />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="Pending" value={totalPendingInvoices} type="pending" />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                </Suspense>
                <Suspense fallback={<CardSkeleton />}>
                    <Card title="Total Customers" value={numberOfCustomers} type="customers" />
                </Suspense> */}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />} >
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />} >
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}

