"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { StatusBadge } from "@/app/components/StatusBadge";

function DashboardContent() {
  const { data: session } = useSession();

  // Demo mode: show demo user if no session
  const displayUser = session?.user || {
    name: "Demo User",
    email: "demo@example.com"
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-3xl">👋</span>
              </div>
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Welcome back
                </dt>
                <dd className="text-2xl font-bold text-gray-900">
                  Hello, {displayUser.name}!
                  {!session && (
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full ml-2">
                      Demo Mode
                    </span>
                  )}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Orders
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">28</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✅</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Delivered
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">9</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⏳</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Pending
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">4</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">❌</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Cancelled
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">2</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Overview */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Order Status Overview
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="text-center">
              <StatusBadge status="Pending" size="sm" showDot={false} />
              <p className="text-sm text-gray-600 mt-1">5 orders</p>
            </div>
            <div className="text-center">
              <StatusBadge status="Preparing" size="sm" showDot={false} />
              <p className="text-sm text-gray-600 mt-1">6 orders</p>
            </div>
            <div className="text-center">
              <StatusBadge status="Out for Delivery" size="sm" showDot={false} />
              <p className="text-sm text-gray-600 mt-1">6 orders</p>
            </div>
            <div className="text-center">
              <StatusBadge status="Delivered" size="sm" showDot={false} />
              <p className="text-sm text-gray-600 mt-1">9 orders</p>
            </div>
            <div className="text-center">
              <StatusBadge status="Cancelled" size="sm" showDot={false} />
              <p className="text-sm text-gray-600 mt-1">2 orders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/dashboard/orders"
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-500 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-orange-50 text-orange-600 ring-4 ring-white">
                  <span className="text-2xl">🍕</span>
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  View Pizza Orders
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Manage and track all pizza orders in the system
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </Link>

            <div className="relative group bg-white p-6 rounded-lg border border-gray-200 opacity-50">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-400 ring-4 ring-white">
                  <span className="text-2xl">📈</span>
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-400">
                  Analytics (Coming Soon)
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  View detailed analytics and reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
