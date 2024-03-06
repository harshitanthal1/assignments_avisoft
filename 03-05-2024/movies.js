const mongoose = require('mongoose');
const fs = require('fs');
const batchSize = 1000;

mongoose.connect('mongodb://localhost:27017/moviesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  director: String,
  duration: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

const moviesData = JSON.parse(fs.readFileSync('movies.json', 'utf8'));

let currentIndex = 0;
const insertBatch = () => {
  const batch = moviesData.slice(currentIndex, currentIndex + batchSize);
  currentIndex += batchSize;

  if (batch.length === 0) {
    console.log('All movies inserted successfully');
    performAggregations();
    return;
  }

  Movie.insertMany(batch)
    .then(() => {
      console.log(`Inserted ${batch.length} movies. Total inserted: ${currentIndex}`);
      insertBatch();
    })
    .catch((err) => {
      console.error('Error inserting movies:', err);
      mongoose.connection.close();
    });
};

const performAggregations = () => {

  Movie.aggregate([{ $group: { _id: '$genre', count: { $sum: 1 } } }])
    .then((results) => {
      console.log('Movies count by genre:', results);
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error('Error performing aggregation:', err);
      mongoose.connection.close();
    });

};

insertBatch();
