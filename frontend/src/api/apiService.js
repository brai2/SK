import axios from 'axios';

const base = import.meta.env.VITE_API_URL || '';

const client = axios.create({
  baseURL: `${base}/api/customers`,
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Lấy danh sách tất cả khách hàng
 * @returns {Promise<Array>} Danh sách customers
 */
export async function fetchCustomers() {
  const { data } = await client.get('/');
  return data.data;
}

/**
 * Lấy thông tin khách hàng theo ID
 * @param {string} id - Customer ID
 * @returns {Promise<Object>} Customer object
 */
export async function fetchCustomerById(id) {
  const { data } = await client.get(`/${id}`);
  return data.data;
}
