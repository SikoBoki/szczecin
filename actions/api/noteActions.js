const Note = require('../../db/models/note')

class noteActions {
	async getAllNotes(req, res) {
		//get pobieranie wszystkich notatek
		let doc
		try {
			doc = await Note.find({})
			res.status(200).json(doc)
		} catch (err) {
			return res.status(500).json({ message: err.message })
		}
		console.log(doc)
	}
	main(req, res) {
		//get strona główna wyświetlanie
		res.send('Strona główna projektu działa po zmianie folderu na backend')
	}
	async getNote(req, res) {
		//get pobieranie  notatki
		const id = req.params.id
		const note = await Note.findOne({ _id: id })
		res.status(200).json(note)
	}
	async saveNote(req, res) {
		//post służy do zapisywanie notatki
		const title = req.body.title
		const body = req.body.body
		let note
		try {
			note = new Note({
				title: title,
				body: body,
			})
			await note.save()
		} catch (err) {
			return res.status(422).json({ wiadomosc_bledu: err.message })
		}
		res.status(201).json(note)
	}
	async updateNote(req, res) {
		//put służy do edycji notatki
		const id = req.params.id
		const title = req.body.title
		const body = req.body.body
		const note = await Note.findOne({ _id: id })
		note.title = title
		note.body = body
		await note.save()
		res.status(201).json(note)
	}
	async deleteNote(req, res) {
		//delete  służy do usuwania notatki
		const id = req.params.id
		await Note.deleteOne({ _id: id })
		res.sendStatus(204)
	}
}

module.exports = new noteActions()
