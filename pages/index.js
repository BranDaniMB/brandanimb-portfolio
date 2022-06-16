import Head from "next/head";
import Welcome from "@components/Welcome";
import Footer from "@components/Footer";
import Section from "@components/Section";
import Box from "@components/Box";

export default function Home() {
  return (
    <div className="container is-fullhd is-dark">
      <Head>
        <title>BranDaniMB</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main>
        <Welcome />
        <p className="has-text-centered">
          <a
            href="#Skills"
            class="button is-primary is-outlined is-large m-auto animate__animated animate__bounce animate__infinite animate__slow"
          >
            <span class="material-symbols-outlined is-size-2">expand_more</span>
          </a>
        </p>
      </main>
      <Section title="Skills">
        <div className="columns">
          <Box title="Front End" addClass="column m-1">
            <div className="has-text-centered">
              <img
                src="https://skillicons.dev/icons?i=html,css,js,bootstrap,jquery,md,react,regex,sass,wordpress&perline=5"
                alt="Icons"
              />
            </div>
          </Box>
          <Box title="Back End" addClass="column m-1">
            <div className="has-text-centered">
              <img
                src="https://skillicons.dev/icons?i=cs,dotnet,firebase,heroku,java,mysql,netlify,nextjs,nodejs,php&perline=5"
                alt="Icons"
              />
            </div>
          </Box>
          <Box title="Programming languages" addClass="column m-1">
            <div className="has-text-centered">
              <img
                src="https://skillicons.dev/icons?i=kotlin,latex,lua,py&perline=5"
                alt="Icons"
              />
            </div>
          </Box>
          <Box title="Design" addClass="column m-1">
            <div className="has-text-centered">
              <img
                src="https://skillicons.dev/icons?i=figma,ai,ps&perline=5"
                alt="Icons"
              />
            </div>
          </Box>
          <Box title="Management" addClass="column m-1">
            <div className="has-text-centered">
              <img
                src="https://skillicons.dev/icons?i=androidstudio,eclipse,git,github,idea,vscode&perline=5"
                alt="Icons"
              />
            </div>
          </Box>
        </div>
      </Section>
      <Section title="Education">
        
      </Section>

      <Footer />
    </div>
  );
}
