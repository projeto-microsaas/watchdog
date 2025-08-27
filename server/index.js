const express = require('express');
     const mongoose = require('mongoose');
     const dotenv = require('dotenv');
     const cors = require('cors');

     dotenv.config();

     const app = express();
     app.use(express.json());
     app.use(cors());

     // Conectar ao MongoDB Atlas
     mongoose.connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     })
       .then(() => console.log('MongoDB connected'))
       .catch((err) => console.error('MongoDB connection error:', err));

     // Modelo de Dados
     const DataSchema = new mongoose.Schema({
       Dates: [String],
       Courman: [String],
       Cod: [String],
       CMAS: [String],
     });
     const Data = mongoose.model('Data', DataSchema);

     // Rota para inserir dados fictícios
     app.get('/api/seed', async (req, res) => {
       await Data.deleteMany({});
       const data = [
         {
           Dates: ['2025-08-01', '2025-08-02'],
           Courman: ['Courman A', 'Courman B'],
           Cod: ['COD123', 'COD456'],
           CMAS: ['CMAS789', 'CMAS012'],
         },
         {
           Dates: ['2025-09-01', '2025-09-02'],
           Courman: ['Courman X', 'Courman Y'],
           Cod: ['COD789', 'COD012'],
           CMAS: ['CMAS345', 'CMAS678'],
         },
       ];
       await Data.insertMany(data);
       res.json({ message: 'Dados inseridos com sucesso' });
     });

     // Rota para recuperar dados
     app.get('/api/data', async (req, res) => {
       const data = await Data.find();
       res.json(data);
     });

     // Iniciar o servidor
     const PORT = process.env.PORT || 5000;
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));