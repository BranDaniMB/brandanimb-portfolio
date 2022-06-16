function SectionTitle({ title }) {
  return (
    <>
      <h1 id={title} className="title">
        {title}
      </h1>
      <div className="separator"></div>
    </>
  );
}

export default SectionTitle;
