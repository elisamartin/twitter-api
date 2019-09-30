import axios from 'axios';

export default function() {
  const instance = axios.create({
    headers: {
      Authorization:
        'Bearer WUpLZnN6UzR5ZkVMemY5dHJ4RHN5eWt6aDowQ1c0OEtENUpGSGN0WVNaUkxPNjhLdkpQOEZteFpmam41Z1h0VVZhVnhSeVJQWUM2dA=='
    }
  });

  return instance;
}
