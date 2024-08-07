const express = require('express')
const router = express.Router()
const noteActions = require('../actions/api/noteActions')

//end pointy api
//pobieranie notatek
//zapisywanie notatek
//edytowanie notatek
//usuwanie notatek

//metoda get pobiera zasoby z serwera tutaj wszystkie notatki pobieramy będziemy się //posługiwać na frontend
router.get('/notes', noteActions.getAllNotes)
//metoda get pobiera konkretną notatkę po id
router.get('/notes/:id', noteActions.getNote)
//post służy do zapisywania nowych notatek
router.post('/notes', noteActions.saveNote)
//put służy do edycji danych
router.put('/notes/:id', noteActions.updateNote)
//delete służy do usuwania danych
router.delete('/notes/:id', noteActions.deleteNote)
//get strona główna wyświetlanie
router.get('/', noteActions.main)

module.exports = router
