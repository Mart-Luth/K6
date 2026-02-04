import http from 'k6/http';
import { sleep, check } from 'k6';

// Test configuration: 2 virtual users for 30 seconds
export const options = {
  vus: 2,
  duration: '30s',
};

export default function () {
  // Hit yahoo.com
  const res = http.get('https://yahoo.com');
  
  // Verify the server responds with a 200 OK
  check(res, { 'status is 200': (r) => r.status === 200 });

  // Wait for 1 second between requests
  sleep(1);
}
