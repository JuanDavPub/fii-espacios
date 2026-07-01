"use client";

export default function DeleteButton({
  formAction,
  label,
}: {
  formAction: (formData: FormData) => Promise<void>;
  label?: string;
}) {
  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (!confirm(`¿Eliminar ${label ? `"${label}"` : "este elemento"}? Esta acción no se puede deshacer.`)) {
          e.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className="inline-flex items-center font-medium border border-red-400 text-red-600 rounded px-2 py-1 text-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
      >
        Eliminar
      </button>
    </form>
  );
}
