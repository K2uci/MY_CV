// Encabezado de sección: "01. Sobre <resaltado>"
export default function SectionHeading({ number, heading, id }) {
    return (
        <h2 className="heading" id={id}>
            <span className="heading-number">{number}.</span>
            {heading.pre && `${heading.pre} `}<span>{heading.hi}</span>
        </h2>
    );
}
