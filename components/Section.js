import SectionTitle from "./SectionTitle";

function Section({ children, type, title }) {
    return (
        <section className={'section ' + type}>
            <SectionTitle title={title} />
            {children}
        </section>
      );
}

export default Section;