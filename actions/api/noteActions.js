const Note = require('../../db/models/note')

class noteActions {
	getAllNotes(req, res) {
		//get pobieranie wszystkich notatek
		res.send('GET pobiera wszystkie notatki')
	}
	main(req, res) {
		//get strona główna wyświetlanie
		res.send('Strona główna projektu działa')
	}
	getNote(req, res) {
		//get pobieranie  notatki
		res.send('GET pobiera Info o notatce')
	}
	saveNote(req, res) {
		//post służy do zapisywanie notatki
		// const newNote = new Note({
		// 	title: 'Upiec ciasto',
		// 	body: 'Mleko cukier drożdże jajka',
		// })
		// newNote.save().then(() => {
		// 	console.log('notatka została zapisana')
		// })
		const title = req.body.title
		const body = req.body.body
		res.send('POST notatka została zapisana. Tytuł: ' + title + ' Treść : ' + body)
	}
	updateNote(req, res) {
		//put służy do edycji notatki
		res.send('PUT notatka zaktualizowana')
	}
	deleteNote(req, res) {
		const id = req.params.id
		//delete  służy do usuwania notatki
		res.send('DELETE notatka usunięta ID:' + id)
	}
}

module.exports = new noteActions()
