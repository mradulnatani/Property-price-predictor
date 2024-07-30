// app/components/Index.jsx

'use client';

import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './Index.module.css';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Index() {
  const [area, setArea] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPrediction(null);

    try {
      const res = await fetch('/api/predict-rates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ area }),
      });

      const rawResponse = await res.text();
      console.log('Raw response:', rawResponse);

      let data;
      try {
        data = JSON.parse(rawResponse);
      } catch (parseError) {
        throw new Error(`Failed to parse JSON: ${rawResponse}`);
      }

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch prediction');
      }

      setPrediction(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: ['Current Rate', '1 Year Later', '2 Years Later'],
    datasets: [
      {
        label: `Property Rate in ${prediction?.area}`,
        data: [
          prediction?.currentRate || 0,
          prediction?.predictions.yearOne || 0,
          prediction?.predictions.yearTwo || 0
        ],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Property Rate Predictor</h1>
        <h2 className={styles.description}>
          We have information about property rates in various areas like We have information about Property rates in Vijay Nagar,
Bhanwarkuan,
Scheme No. 78,
Rajendra Nagar,
South Tukoganj,
Khajrana,
Sukhlia,
Manik Bagh,
Pipliyahana,
A.B. Road,
Nehru Park,
Chhoti Gwaltoli,
Rau,
Bicholi Mardana,
Nanda Nagar,
Vijay Nagar Extension,
Kesar Bagh,
Ranjeet Hanuman,
Banganga,
Sangam Nagar,
Gomti Nagar,
Dewas Naka,
Usha Nagar,
Sudama Nagar,
Agarwal Colony,
Harsiddhi,
Saket Nagar,
Dhar Road,
Shivaji Nagar,
Nehru Nagar,
Khandwa Road,
Janjeerwala,
Dewas Road,
Kanadia Road,
LIG Colony,
Eden Garden,
Rau Pithampur Road,
Pipliyapala,
Vijay Nagar Sector 2,
Navlakha,
Sardar Patel,
Raghuwanshi Nagar,
Mangal City,
Rajmohalla,
Royal City,
Amraiwadi,
Sukhliya Extension,
Prabhat Colony,
Kanchan Bagh,
Gandhi Nagar,
Shivaji Udyog Nagar,
Mangalwara,
Kesar Bagh,
Baroda,
Ravi Nagar,
Shiv Nagar,
Kothari,
Sadar Bazar,
New Palasia,
Palia,
Shikhar Bagh,
Bajrang Nagar,
Subhash Nagar,
Chandragupt Nagar,
Vijay Nagar Sector 3,
Rohit Nagar,
Kalani Nagar,
Chitrakoot,
Kalkheda,
Amaravati,
Ravi Nagar,
Satpura,
Maheshwari,
Kailash Colony and
Pologround. Enter an area name to see predictions.
        </h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={area} style={{color:'black'}}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Enter area name"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Predicting...' : 'Predict Rates'}
          </button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        {prediction && (
          <div className={styles.prediction}>
            <h2>Predictions for {prediction.area}</h2>
            <p>Current Rate: ₹{prediction.currentRate} per sq ft</p>
            <p>Year 1 Prediction: ₹{prediction.predictions.yearOne.toFixed(2)} per sq ft</p>
            <p>Year 2 Prediction: ₹{prediction.predictions.yearTwo.toFixed(2)} per sq ft</p>

            <div className={styles.chartContainer}>
              <Line data={chartData} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
