"use client";

import { useState, useMemo } from "react";
import { mockPizzaOrders, PizzaOrder } from "@/lib/mockData";
import { StatusBadge } from "@/app/components/StatusBadge";

type SortField = keyof PizzaOrder;
type SortDirection = 'asc' | 'desc';

export default function OrdersPage() {
  const [sortField, setSortField] = useState<SortField>('orderDate');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = mockPizzaOrders;

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.pizzaType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort
    return filtered.sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      if (sortField === 'orderDate') {
        aValue = new Date(aValue as string).getTime();
        bValue = new Date(bValue as string).getTime();
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [sortField, sortDirection, statusFilter, searchTerm]);

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }

    return sortDirection === 'asc' ? (
      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
      </svg>
    );
  };

  const statusOptions = [
    { value: 'all', label: '🍕 All Status' },
    { value: 'Pending', label: '🟡 Pending' },
    { value: 'Preparing', label: '🔵 Preparing' },
    { value: 'Out for Delivery', label: '🟣 Out for Delivery' },
    { value: 'Delivered', label: '🟢 Delivered' },
    { value: 'Cancelled', label: '🔴 Cancelled' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Pizza Orders
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Streamline your pizza order workflow ({filteredAndSortedOrders.length} orders)
          </p>
        </div>
      </div>

      {/* Status Legend */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Order Status Guide</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl">🟡🍕</span>
            <div>
              <StatusBadge status="Pending" size="sm" showDot={false} />
              <p className="text-xs font-medium text-gray-700 mt-1">Awaiting preparation</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl">🔵🍕</span>
            <div>
              <StatusBadge status="Preparing" size="sm" showDot={false} />
              <p className="text-xs font-medium text-gray-700 mt-1">Being made</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-300 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl">🟣🍕</span>
            <div>
              <StatusBadge status="Out for Delivery" size="sm" showDot={false} />
              <p className="text-xs font-medium text-gray-700 mt-1">On the way</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-300 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl">🟢🍕</span>
            <div>
              <StatusBadge status="Delivered" size="sm" showDot={false} />
              <p className="text-xs font-medium text-gray-700 mt-1">Completed</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-br from-red-50 to-red-100 border border-red-300 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-2xl">🔴🍕</span>
            <div>
              <StatusBadge status="Cancelled" size="sm" showDot={false} />
              <p className="text-xs font-medium text-gray-700 mt-1">Order cancelled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">🔍 Search & Filter Orders</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              🔎 Search Orders
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by customer, order ID, or pizza type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-2">
              🏷️ Filter by Status
            </label>
            <select
              id="status-filter"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm px-3 py-2 bg-white"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value} className="py-2">
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('all');
                setSortField('orderDate');
                setSortDirection('desc');
              }}
              className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              🗑️ Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Order ID</span>
                    {getSortIcon('id')}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('customerName')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Customer</span>
                    {getSortIcon('customerName')}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('pizzaType')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Pizza Type</span>
                    {getSortIcon('pizzaType')}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('quantity')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Quantity</span>
                    {getSortIcon('quantity')}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('orderDate')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Order Date</span>
                    {getSortIcon('orderDate')}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort('status')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    {getSortIcon('status')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.pizzaType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(order.orderDate).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAndSortedOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">🍕</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
