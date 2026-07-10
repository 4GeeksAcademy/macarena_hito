"use client";

import { useEffect, useState } from "react";
import type { Note } from "@/types/note";
import {
  CandidatesApiError,
  createNote,
  deleteNote,
  getCandidateNotes,
} from "@/services/candidates";

interface CandidateNotesProps {
  candidateId: string;
}

export function CandidateNotes({ candidateId }: CandidateNotesProps) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingNoteId, setDeletingNoteId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadNotes() {
      try {
        setIsLoading(true);
        setError("");
        setMessage("");

        const notesData = await getCandidateNotes(candidateId);
        setNotes(notesData);
      } catch (error) {
        setError(
          error instanceof CandidatesApiError
            ? error.message
            : "Ocurrió un error al cargar las notas."
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadNotes();
  }, [candidateId]);

  async function handleCreateNote(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!content.trim()) return;

    try {
      setIsSaving(true);
      setError("");
      setMessage("");

      const newNote = await createNote(candidateId, content.trim());

      setNotes((currentNotes) => [newNote, ...currentNotes]);
      setContent("");
      setMessage("Nota agregada correctamente.");
    } catch (error) {
      setError(
        error instanceof CandidatesApiError
          ? error.message
          : "No se pudo crear la nota."
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDeleteNote(noteId: string) {
    try {
      setError("");
      setMessage("");
      setDeletingNoteId(noteId);

      await deleteNote(candidateId, noteId);

      setNotes((currentNotes) =>
        currentNotes.filter((note) => note.id !== noteId)
      );
      setMessage("Nota eliminada correctamente.");
    } catch (error) {
      setError(
        error instanceof CandidatesApiError
          ? error.message
          : "No se pudo eliminar la nota."
      );
    } finally {
      setDeletingNoteId(null);
    }
  }

  return (
    <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900">Notas internas</h2>

      <form onSubmit={handleCreateNote} className="mt-4 space-y-3">
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Escribí una nota interna..."
          className="min-h-24 w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-700 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={isSaving || !content.trim()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isSaving ? "Guardando..." : "Agregar nota"}
        </button>
      </form>

      {isLoading && (
        <p className="mt-4 text-sm text-gray-600">Cargando notas...</p>
      )}

      {deletingNoteId && (
        <p className="mt-4 text-sm text-gray-600">Eliminando nota...</p>
      )}

      {message && <p className="mt-4 text-sm text-green-700">{message}</p>}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      {!isLoading && !error && notes.length === 0 && (
        <p className="mt-4 text-sm text-gray-600">
          Esta candidatura todavía no tiene notas internas.
        </p>
      )}

      {!isLoading && notes.length > 0 && (
        <ul className="mt-4 space-y-3">
          {notes.map((note) => (
            <li
              key={note.id}
              className="rounded-lg border border-gray-200 p-3 text-sm text-gray-700"
            >
              <p>{note.content}</p>

              <div className="mt-2 flex items-center justify-between gap-3">
                {note.created_at && (
                  <p className="text-xs text-gray-500">
                    {new Date(note.created_at).toLocaleDateString()}
                  </p>
                )}

                <button
                  type="button"
                  disabled={deletingNoteId === note.id}
                  onClick={() => handleDeleteNote(note.id)}
                  className="text-xs font-semibold text-red-600 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {deletingNoteId === note.id ? "Eliminando..." : "Eliminar"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}