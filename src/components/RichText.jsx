// Renderiza un array de fragmentos: string normal o { b: 'texto en negrita' }
export default function RichText({ parts }) {
    return parts.map((part, i) =>
        typeof part === 'string' ? part : <strong key={i}>{part.b}</strong>
    );
}
