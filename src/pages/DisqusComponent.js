import { DiscussionEmbed } from "disqus-react";

const DisqusComponent = () => {
  const styles = {
    width: "50%",
    margin: "1rem auto",
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Disqus Comments</h1>
      <div style={styles}>
        <DiscussionEmbed
          shortname="disqus-react"
          config={{
            url: "http://localhost:3000",
            identifier: "0",
            title: "Disqus react app",
            language: "en_US",
          }}
        />
      </div>
    </>
  );
};

export default DisqusComponent;
