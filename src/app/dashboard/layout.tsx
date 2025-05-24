"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DashboardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    // Allow demo mode - don't redirect if no session
    setIsLoading(false);
  }, [session, status, router]);

  const handleSignOut = async () => {
    if (session) {
      await signOut({ callbackUrl: "/auth/signin" });
    } else {
      // Demo mode - just redirect to sign in
      router.push("/auth/signin");
    }
  };

  if (isLoading || status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  // Demo mode: show demo user if no session
  const displayUser = session?.user || {
    name: "Demo User",
    email: "demo@example.com",
    image: null
  };

  const navigation = [
    { name: "Welcome", href: "/dashboard", current: pathname === "/dashboard" },
    { name: "Pizza Orders", href: "/dashboard/orders", current: pathname === "/dashboard/orders" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🍕</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Pizza Dashboard</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? "border-orange-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {displayUser.image ? (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={displayUser.image}
                        alt={displayUser.name || "User"}
                      />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {displayUser.name?.charAt(0) || "U"}
                        </span>
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-700">
                      {displayUser.name}
                    </span>
                    {!session && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Demo
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {session ? "Sign Out" : "Exit Demo"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1 bg-white border-b">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                item.current
                  ? "bg-orange-50 border-orange-500 text-orange-700"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardContent>{children}</DashboardContent>;
}
