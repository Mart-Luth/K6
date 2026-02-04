import http from 'k6/http';
import { sleep, check } from 'k6';

// Test configuration: 10 users for 30 seconds
export const options = {
  vus: 2,
  duration: '5s',
};

export default function () {
  // Hit k6's official test API
  const res = http.get('https://bbc.co.uk');
  
  // Verify the server responds with a 200 OK
  check(res, { 'status is 200': (r) => r.status === 200 });

  // Wait for 1 second between requests to simulate human behavior
  sleep(1);
}
