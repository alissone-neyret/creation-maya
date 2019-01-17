import express from 'express';
import connection from './conf';

const router = express.Router();

/* GET index page. 
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
}); */

router.get('/api/catalogue', (req, res) => {
  connection.query('SELECT * FROM catalogue', (err, results) => {
    if (err) {
      results.info('Erreur lors de la récupération des informations des entreprises');
      res.status(500).send('Erreur ');
    } else {
      res.json(results);
    }
  });
});

router.get('/api/catalogue/top', (req, res) => {
  connection.query('SELECT nom, prix, image FROM top INNER JOIN catalogue ON top.id_bijoux=catalogue.id', (err, results) => {
    if (err) {
      results.info('Erreur lors de la récupération des informations des entreprises');
      res.status(500).send('Erreur ');
    } else {
      res.json(results);
    }
  });
});

router.post('/api/creation-profil', (req, res) => {
  const formData = req.body;
  connection.query('INSERT into profil SET ?', formData, (err) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: 'Le profil a été créé' });
    }
  });
});

router.post('/api/creation-bijoux', (req, res) => {
  const formData = req.body;
  connection.query('INSERT into catalogue SET ?', formData, (err) => {
    if (err) {
      res.status(500).json({ flash: err.message });
    } else {
      res.status(200).json({ flash: 'Le profil a été créé' });
    }
  });
});


export default router;
